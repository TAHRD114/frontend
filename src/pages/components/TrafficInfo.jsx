import { TypeWriter } from "./Animation";

export default function About() {
  return (
    <>
      <div className="flex items-center ml-1/20 mt-12">
        <img src="/icon/6-05.png" alt="icon" className="w-20 h-20" />
        <TypeWriter text="交通資訊" />
      </div>
      <div className="mx-auto w-4/5">
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.8032941111992!2d121.52866186955846!3d25.02683861380221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9844da97d3b%3A0x5bf5f965058e03b9!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a2457ac5ZCI5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1728889763697!5m2!1szh-TW!2stw"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex gap-2">
              <img src="/time.svg" alt="icon" className="w-8 h-8" />
              <h4 className="text-nav-blue font-bold Source-Han-Serif">時間</h4>
            </div>
            <div className="ml-1/10">
              <p className="Source-Han-Serif font-semibold">
                2024年12月06日(五) 13:00 ~ 19:00
              </p>
              <p className="Source-Han-Serif font-semibold">
                2024年12月07日(六) 08:30 ~ 15:30
              </p>
            </div>
            <div className="flex gap-2">
              <img src="/address.svg" alt="icon" className="w-8 h-8" />
              <h4 className="text-nav-blue font-bold Source-Han-Serif">地址</h4>
            </div>
            <p className="Source-Han-Serif ml-1/10 font-semibold">
              台北市大安區和平東路一段129號
              <br />
              綜210 展演廳
            </p>
            <div className="flex gap-2">
              <img src="/car.svg" alt="icon" className="w-8 h-8" />
              <h4 className="text-nav-blue font-bold">交通方式</h4>
            </div>
            <div className="Source-Han-Serif ml-1/10 font-semibold">
              <p>
                1. 由捷運古亭站出發： 中和新蘆線(橘線)、松山新店線(綠線)
                <br />
                出站：5號出口
                <br />
                步行：直行約十分鐘可抵達圖書館校區綜合大樓，入口位於師大路與和平東路交叉口附近，依照指示地貼進入大樓後，前往2樓210會議室。
              </p>
              <p>
                2. 由捷運台電大樓站出發： 松山新店線(綠線) <br />
                出站：3號出口
                <br />
                步行：從師大路直行約十分鐘，可抵達圖書館校區綜合大樓，入口位於師大路與和平東路交叉口附近，依照指示地貼進入大樓後，前往2樓210會議室。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
