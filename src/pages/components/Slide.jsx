import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function IndividualIntervalsExample() {
  return (
    <>
      <div className="flex mt-12 ml-1/20 items-center">
        <img src="/icon/5-05.png" alt="icon" className="w-20 h-20" />
        <h3 className="noto-serif-tc-regular">互動遊戲</h3>
      </div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="bg-pink w-full h-80 flex justify-center items-center">
            <Link to="/puzzle_game" className="no-underline">
              <button className="bg-dark-yellow text-nav-blue font-bold p-4 rounded flex items-center gap-2">
                <img
                  src="/puzzle.png"
                  alt="interactive_game"
                  className="w-12 h-12"
                />
                <span className="text-xl">馬上來玩！</span>
              </button>
            </Link>
          </div>
          <Carousel.Caption>
            <h3>互動小遊戲</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="bg-pink w-full h-80"></div>
          <Carousel.Caption>
            <h3>投票</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;
