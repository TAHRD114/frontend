import { TypeWriter } from "./Animation";

export default function Intro() {
  const backgroundImageUrl = "url(/introBg.webp)";
  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <div className="flex items-center ml-1/20 mt-8 relative z-10">
          <img src="/icon/6-05.png" alt="icon" className="w-20 h-20" />
          <TypeWriter text="專展介紹" />
        </div>
        <div style={backgroundStyle}>
          <div className="mx-auto w-4/5 relative z-10 mt-1/6 md:mt-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 md:mt-1/3">
                <div className="bg-light-gray p-4 rounded-lg bg-opacity-50">
                  <h4 className="text-nav-blue font-bold">關於專展</h4>
                  <p>
                    這次的專題展覽是本系學生四年學習成果的結晶，展示了學生在專業技術、創意發想和團隊合作上的豐富成就。展覽中的每一件作品，不僅體現了學生對理論的掌握與應用，更呈現了從構想到實踐過程中的努力與成長。希望藉由這次展覽，向社會各界介紹本系的教學特色與發展方向，提升系上的知名度，並提供師生與外界交流學習的機會，共同追求自我突破與成長。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:mt-1/8 ">
                <div className="bg-light-gray p-4 rounded-lg bg-opacity-50">
                  <h4 className="text-nav-blue font-bold">專展理念</h4>
                  <p>
                    「桃花源技」是我們這次畢業專題展覽的主題，融合了傳統文化與現代科技，展現出結合創新與實踐的未來世界。參觀者將置身其中，如同《桃花源記》中的人物般探索這個融合科技與人文的空間，體驗數位及互動展示，感受科技如何為生活增添新的可能性。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
