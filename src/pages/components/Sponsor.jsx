import MarqueeEffect from "react-fast-marquee";
import img_1 from "../../assets/sponsor/1.webp";
import img_2 from "../../assets/sponsor/2.webp";
import img_4 from "../../assets/sponsor/4.webp";
import img_5 from "../../assets/sponsor/5.webp";
import img_6 from "../../assets/sponsor/6.webp";
import img_7 from "../../assets/sponsor/7.webp";
import img_8 from "../../assets/sponsor/8.webp";
import img_9 from "../../assets/sponsor/9.webp";

const ImageContainer = () => {
  const imgs = [img_1, img_2, img_4, img_5, img_6, img_7, img_8, img_9];
  return (
    <>
      <div className="flex items-center gap-10 ml-10">
        {imgs.map((i, index) => (
          <img
            alt={"img" + index}
            src={i}
            className="w-32 h-32 object-contain"
          />
        ))}
      </div>
    </>
  );
};

export default function Sponsor() {
  return (
    <>
      <MarqueeEffect
        className="w-full max-h-32"
        pauseOnClick
        speed={80}
        direction="left"
      >
        <ImageContainer />
      </MarqueeEffect>
      <p className="text-center pt-4 font-bold">感謝所有的贊助商們！</p>
    </>
  );
}
