import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FB from "../../assets/icon/facebook.svg";
import IG from "../../assets/icon/instagram.svg";
import Menu from "../../assets/icon/menu.svg";

function ToggleMenu({ scrollTo, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative mr-2 md:hidden block">
      <button onClick={handleClick} className="flex items-center">
        <img alt="menu" src={Menu} className="w-8 h-8" />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-nav-blue text-white rounded-lg shadow-lg z-10"
          onMouseLeave={handleClose}
        >
          <div className="py-1">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  首頁
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#introduction"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.introRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  專展介紹
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#blog"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.blogRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  作品集
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#aboutUs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.trafficRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  交通資訊
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#aboutUs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.aboutRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  關於科技系
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#game"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.gameRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  互動遊戲
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/faq"
              className="no-underline h-full"
              onClick={handleClose}
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  FAQ
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link to="/vote" className="no-underline h-full">
              <div className="flex items-center h-full justify-center">
                <div className="text-white noto-serif-tc-regular text-lg">
                  來去投票
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function FixedNav({ scrollTo, refs }) {
  return (
    <>
      <div className="flex justify-between w-full items-center">
        <Link to={"/"} className=" ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-20 w-20 opacity-100"
            />
          </div>
        </Link>
        <ToggleMenu scrollTo={scrollTo} refs={refs} />
        <div className="hidden md:flex md:gap-10 md:items-center md:mr-1/20">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white noto-serif-tc-regular text-lg">
                首頁
              </div>
            </div>
          </Link>
          <Link
            to="/#introduction"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.introRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white noto-serif-tc-regular text-lg">
                專展介紹
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
              <div className="text-white noto-serif-tc-regular text-lg">
                作品集
              </div>
            </div>
          </Link>
          <Link
            to="/#aboutUs"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.trafficRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white noto-serif-tc-regular text-lg">
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
              <div className="text-white noto-serif-tc-regular text-lg">
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
              <div className="text-white noto-serif-tc-regular text-lg">
                互動遊戲
              </div>
            </div>
          </Link>
          <Link
            to="/faq"
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white noto-serif-tc-regular text-lg">
                FAQ
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function MainNav({ scrollTo, refs }) {
  const backgroundImageUrl = "url(/keyVisual.webp)";
  const style = {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  };

  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: -1,
  };
  return (
    <div style={style} className="w-full">
      <div style={backgroundStyle} className="h-screen"></div>
      <div className="flex justify-between items-center w-full">
        <Link to={"/"} className="pt-4 ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-12 w-12 md:h-28 md:w-28 opacity-100"
            />
            <div className="flex flex-col items-start">
              <h3 className="nanum-myeongjo-regular text-xl md:text-2xl">
                114 TAHRD
              </h3>
              <h3 className="nanum-myeongjo-regular text-xl md:text-2xl">
                CAPSTONE PROJECT
              </h3>
            </div>
          </div>
        </Link>
        <ToggleMenu scrollTo={scrollTo} refs={refs} />
        <div className="hidden md:w-40 md:flex md:items-center">
          <div className="flex mt-4 gap-6">
            <a
              href="https://www.instagram.com/ntnutahrd114_thyj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="ms-3 text-black"
            >
              <img src={IG} alt="instagram" className="w-8 h-8" />
              <span className="sr-only">instagram page</span>
            </a>
            <a
              href="https://www.facebook.com/tahrdgraduationexhibition"
              className=""
            >
              <img src={FB} alt="facebook" className="w-8 h-8" />
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:gap-10 md:w-4/5 md:h-10 md:ml-1/20 md:mt-10 md:border-y md:border-black md:items-center">
        <Link
          to="/#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black noto-serif-tc-regular text-lg">首頁</div>
          </div>
        </Link>
        <Link
          to="/#introduction"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.introRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black noto-serif-tc-regular text-lg">
              專展介紹
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
            <div className="text-black noto-serif-tc-regular text-lg">
              作品集
            </div>
          </div>
        </Link>
        <Link
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.trafficRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black noto-serif-tc-regular text-lg">
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
            <div className="text-black noto-serif-tc-regular text-lg">
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
            <div className="text-black noto-serif-tc-regular text-lg">
              互動遊戲
            </div>
          </div>
        </Link>
        <Link
          to="/faq"
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black noto-serif-tc-regular text-lg">
              FAQ
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-3/4 mx-auto  md:w-1/2">
          <div className="relative w-full pb-[100%] md:pb-[75%]">
            <img
              src="/word.png"
              alt="title"
              className="absolute top-12  w-full h-full md:h-5/6 md:top-4 md:-left-10 object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-1/8">
          <div className="w-full md:w-2/3 flex flex-col justify-start items-start mt-16 ml-1/5">
            <p className="text-xl md:text-3xl font-extrabold text-left text-nav-blue noto-serif-tc-regular ">
              2024
              <br />
              國立臺灣師範大學
              <br />
              科技應用與人力資源發展學系
            </p>
            <p className="text-2xl md:text-4xl font-extrabold text-left text-nav-blue noto-serif-tc-regular">
              114級畢業專題展覽
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
