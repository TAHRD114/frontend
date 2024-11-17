import { Link } from "react-router-dom";

export default function GameNav() {
  return (
    <>
      <div className="flex justify-between bg-nav-blue">
        <Link to={"/"} className="ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-20 w-20 opacity-100"
            />
          </div>
        </Link>
        <div className="flex gap-10 items-center mr-1/20">
          <Link to={"/"} className="no-underline h-full">
            <div className="flex items-center h-full justify-center">
              <div className="text-white noto-serif-tc-regular text-lg">
                回首頁
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
