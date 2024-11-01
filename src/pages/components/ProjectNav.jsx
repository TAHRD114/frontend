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
                回到首頁
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
                專題組員
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
              <div className="text-white nanum-myeongjo-regular text-lg">
                製作動機
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
                專題介紹
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
                照片紀錄
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
                相關連結
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function MainNav({ scrollTo, refs }) {
  return (
    <div>
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
          to="/"
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
              專題組員
            </div>
          </div>
        </Link>
        <Link
          to="/#project"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.projectRef);
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
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.trafficRef);
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
          to="/#aboutUs"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(refs.aboutRef);
          }}
          className="no-underline h-full"
        >
          <div className="flex items-center h-full justify-center">
            <div className="text-black nanum-myeongjo-regular text-lg">
              照片紀錄
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
              相關連結
            </div>
          </div>
        </Link>
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
