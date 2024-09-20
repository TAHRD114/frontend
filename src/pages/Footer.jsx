export default function Footer() {
  const backgroundImageUrl = "url(/keyVisual.png)";
  const style = {
    position: "relative",
    height: "100%",
    width: "100%",
  };

  const backgroundStyle = {
    content: '""',
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
  };

  return (
    <footer class="" style={style}>
      <div style={backgroundStyle}></div>
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div className="w-1/3">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Resources
            </h2>
          </div>
          <div className="w-1/3">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Follow us
            </h2>
          </div>
          <div className="w-1/3">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
          </div>
        </div>
        <hr class="my-6 border-gray-200 w-2/5 mx-auto" />
        <span className="noto-serif-sc">
          2024 國立臺灣師範大學 科技應用與人力資源發展學系
          <br />
          114級畢業專題成果展網站
        </span>
        <hr class="my-6 border-gray-200 w-2/5 mx-auto" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-600 text-center">© Copyright</span>
          <div class="flex mt-4 gap-6">
            <a
              href="https://www.instagram.com/ntnutahrd114_thyj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="ms-3 text-black"
            >
              <img src="/instagram.svg" alt="instagram" className="w-8 h-8" />
              <span className="sr-only">instagram page</span>
            </a>
            <a
              href="https://www.facebook.com/tahrdgraduationexhibition"
              class=""
            >
              <img src="/facebook.svg" alt="facebook" className="w-8 h-8" />
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
