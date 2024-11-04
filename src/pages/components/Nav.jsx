import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FixedNav({ scrollTo, refs }) {
  return (
    <>
      <div className="flex justify-between">
        <Link to={"/"} className=" ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-20 w-20 opacity-100"
            />
          </div>
        </Link>
        <div className="flex gap-10 items-center mr-1/20">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                首頁
              </div>
            </div>
          </Link>
          <Link
            to="/#blog"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.blogRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                作品集
              </div>
            </div>
          </Link>
          {/* <Link
            to="/#project"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.projectRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                Project
              </div>
            </div>
          </Link> */}
          <Link
            to="/#aboutUs"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.trafficRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                交通資訊
              </div>
            </div>
          </Link>
          <Link
            to="/#aboutUs"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.aboutRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                關於科技系
              </div>
            </div>
          </Link>
          <Link
            to="/#game"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.gameRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                互動遊戲
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function MainNav({ scrollTo, refs }) {
  const backgroundImageUrl = "url(/keyVisual.png)";
  const style = {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  };

  const backgroundStyle = {
    content: '""',
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
  };
  return (
    <div style={style}>
      <div style={backgroundStyle}></div>
      <div className="flex justify-between">
        <Link to={"/"} className="pt-4 ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-28 w-28 opacity-100"
            />
            <div className="flex flex-col items-start">
              <h3 className="nanum-myeongjo-regular">114 TAHRD</h3>
              <h3 className="nanum-myeongjo-regular">CAPSTONE PROJECT</h3>
            </div>
          </div>
        </Link>
        <div className="w-40 flex items-center">
          {/* <button className="w-36 h-11 rounded-3xl border border-black">
            CONTACT US
          </button> */}
          <div className="flex mt-4 gap-6">
            <a
              href="https://www.instagram.com/ntnutahrd114_thyj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="ms-3 text-black"
            >
              <img src="/instagram.svg" alt="instagram" className="w-8 h-8" />
              <span className="sr-only">instagram page</span>
            </a>
            <a
              href="https://www.facebook.com/tahrdgraduationexhibition"
              className=""
            >
              <img src="/facebook.svg" alt="facebook" className="w-8 h-8" />
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-10 w-4/5 h-10 ml-1/20 mt-10 border-y border-black items-center">
        <Link
          to="/#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              首頁
            </div>
          </div>
        </Link>
        <Link
          to="/#blog"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.blogRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              作品集
            </div>
          </div>
        </Link>
        {/* <Link
          to="/#project"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.projectRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              Project
            </div>
          </div>
        </Link> */}
        <Link
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.trafficRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              交通資訊
            </div>
          </div>
        </Link>
        <Link
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.aboutRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              關於科技系
            </div>
          </div>
        </Link>
        <Link
          to="/#game"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.gameRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              互動遊戲
            </div>
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="relative w-full pb-[75%]">
            <img
              src="/word.png"
              alt="title"
              className="absolute top-4 -left-10 w-full h-5/6 object-contain"
            />
          </div>
        </div>
        <div className="w-1/2 mt-1/8 text-indigo-700">
          <div className="w-2/3 flex flex-col justify-start items-start">
            <h4 className="font-bold">TAHRD</h4>
            <p className="text-2xl font-bold text-left">
              "Technology is not just a tool. It can give learners a voice that
              they may not have had before." - George Couros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav({ scrollTo, refs }) {
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNav(window.scrollY > 200); // 當滾動超過 200px 時顯示固定導航欄
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 ${
          showFixedNav ? "fade-in" : "fade-out"
        }`}
        style={{ backgroundColor: "#02434F" }}
      >
        <FixedNav scrollTo={scrollTo} refs={refs} />
      </div>
      <MainNav scrollTo={scrollTo} refs={refs} />
    </div>
  );
}