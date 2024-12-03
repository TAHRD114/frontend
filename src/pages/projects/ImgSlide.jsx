import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import projects from "../../data/project.json";

export default function ImageGallery({ id }) {
  const [ImageGalleryPhotos, setImageGalleryPhotos] = useState([]);
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  useEffect(() => {
    const loadImages = async () => {
      const project = projects.find((p) => p.id === Number(id));

      if (!project) {
        console.error(`Project with id ${id} not found`);
        return;
      }

      if (!project.image) {
        return;
      }
      const imagesWithPaths = await Promise.all(
        project.image.map(async (img) => {
          const imageModule = await import(
            `../../assets/group_${id}/${img.image}`
          );
          return {
            image: imageModule.default,
            alt: img.alt,
          };
        })
      );

      setImageGalleryPhotos(imagesWithPaths);
    };

    loadImages();
  }, [id]);

  const activeImageIndex = wrap(0, ImageGalleryPhotos.length, imageCount);

  if (ImageGalleryPhotos.length === 0) {
    return <div>無相關照片</div>;
  }

  //sets the new state
  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  //We pass and index and determine where to animate from
  const skipToImage = (imageId) => {
    let changeDirection = 1;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };
  return (
    <React.Fragment>
      {" "}
      {/* Dont want animation on page load */}
      <AnimatePresence initial={false} custom={direction}>
        <div
          className="animate-in flex flex-col items-center gap-8 justify-center"
          style={{ "--index": 1 }}
        >
          <div className="flex relative justify-center w-full items-center">
            <motion.div
              key={imageCount}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="flex flex-col cursor-grabbing items-center justify-center"
            >
              <img
                src={ImageGalleryPhotos[activeImageIndex].image}
                alt={ImageGalleryPhotos[activeImageIndex].alt}
                //width={320}
                // height={380}
                className="relative h-60 inset-0 object-contain shadow-md pointer-events-none rounded-2xl"
              />
            </motion.div>
          </div>

          <div className="flex gap-1.5 p-2">
            {ImageGalleryPhotos.map((_, index) => {
              return (
                <motion.span
                  key={index}
                  transition={sliderTransition}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=""
                >
                  <div
                    onClick={() => skipToImage(index)}
                    className={`w-4 h-4 rounded-full cursor-pointer ${
                      activeImageIndex === index
                        ? "bg-nav-blue"
                        : "bg-light-gray"
                    }`}
                  ></div>
                </motion.span>
              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </React.Fragment>
  );
}

const sliderVariants = {
  incoming: (direction) => ({
    //if the direction is from the right
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  //if the direction is from the right
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04],
};
