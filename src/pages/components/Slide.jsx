import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { TypeWriter } from "./Animation";
import Click from "../../assets/icon/click.png";
import Rank from "../../assets/icon/ranking.png";

function IndividualIntervalsExample() {
  return (
    <>
      <div className="flex mt-12 ml-1/20 items-center">
        <img src="/icon/5-05.png" alt="icon" className="w-20 h-20" />
        <TypeWriter text="互動遊戲" />
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
          <div className="bg-pink w-full h-80 flex justify-center items-center">
            <Link to="/vote" className="no-underline">
              <div className="relative inline-block">
                <button className="bg-dark-yellow text-nav-blue font-bold p-4 rounded flex items-center gap-2 relative">
                  <span className="text-xl">來去投票GO！</span>
                  <img
                    src={Click}
                    alt="interactive_game"
                    className="absolute right-2 bottom-2 w-10 h-10"
                  />
                </button>
              </div>
            </Link>
          </div>
          <Carousel.Caption>
            <h3>投票</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="bg-pink w-full h-80 flex justify-center items-center">
            <Link to="/iting-is-not-cute" className="no-underline">
              <div className="relative inline-block">
                <button className="bg-dark-yellow text-nav-blue font-bold p-4 rounded flex items-center gap-2 relative">
                  <span className="text-xl">查看投票結果</span>
                  <img
                    src={Rank}
                    alt="vote_results"
                    className="w-10 h-10"
                  />
                </button>
              </div>
            </Link>
          </div>
          <Carousel.Caption>
            <h3>投票結果</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;
