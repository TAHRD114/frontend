import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ToggleMenu({ scrollTo, refs, id }) {
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
        <img alt="menu" src="/menu.svg" className="w-8 h-8" />
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
                <div className="text-white nanum-myeongjo-regular text-lg">
                  首頁
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to={`/projects/${id}/#member`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.memberRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white nanum-myeongjo-regular text-lg">
                  專題組員
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to={`/projects/${id}/#motive`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.motiveRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white nanum-myeongjo-regular text-lg">
                  製作動機
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to={`/projects/${id}/#intro`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.introRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white nanum-myeongjo-regular text-lg">
                  專題介紹
                </div>
              </div>
            </Link>
            <hr className="my-1" />
            <Link
              to="/#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(refs.aboutRef);
              }}
              className="no-underline h-full"
            >
              <div className="flex items-center h-full justify-center">
                <div className="text-white nanum-myeongjo-regular text-lg">
                  照片紀錄
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function FixedNav({ scrollTo, refs, id }) {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <Link to={"/"} className=" ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-20 w-20 opacity-100"
            />
          </div>
        </Link>
        <ToggleMenu scrollTo={scrollTo} refs={refs} id={id} />
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
              <div className="text-white nanum-myeongjo-regular text-lg">
                首頁
              </div>
            </div>
          </Link>
          <Link
            to={`/projects/${id}/#member`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.memberRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                專題組員
              </div>
            </div>
          </Link>
          <Link
            to={`/projects/${id}/#motive`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.motiveRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                製作動機
              </div>
            </div>
          </Link>
          <Link
            to={`/projects/${id}/#intro`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.introRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                專題介紹
              </div>
            </div>
          </Link>
          <Link
            to="/#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.aboutRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                照片紀錄
              </div>
            </div>
          </Link>
          {/* <Link
            to="/#blog"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.blogRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                回作品集
              </div>
            </div>
          </Link> */}
          {/* <Link
            to="/#aboutUs"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(refs.aboutRef);
            }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                相關連結
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
}

function MainNav({ scrollTo, refs, id, blogRef }) {
  return (
    <div>
      <div className="flex justify-between items-center">
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
        <ToggleMenu scrollTo={scrollTo} refs={refs} id={id} />
        <div className="hidden md:w-40 md:flex md:items-center">
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
      <div className="hidden md:flex md:gap-10 md:w-4/5 md:h-10 md:ml-1/20 md:mt-10 md:border-y md:border-black md:items-center">
        <Link
          to={`/projects/${id}`}
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
          to={`/projects/${id}/#member`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.memberRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              專題組員
            </div>
          </div>
        </Link>
        <Link
          to={`/projects/${id}/#motive`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.motiveRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              製作動機
            </div>
          </div>
        </Link>
        <Link
          to={`/projects/${id}/#intro`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.introRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              專題介紹
            </div>
          </div>
        </Link>
        <Link
          to="/#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.introRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              照片紀錄
            </div>
          </div>
        </Link>
        {/* <Link
          to="/#blog"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.blogRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              回作品集
            </div>
          </div>
        </Link> */}
        {/* <Link
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.aboutRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              相關連結
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default function Nav({ scrollTo, refs, id }) {
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
        <FixedNav scrollTo={scrollTo} refs={refs} id={id} />
      </div>
      <MainNav scrollTo={scrollTo} refs={refs} id={id} />
    </div>
  );
}
