export default function About() {
  return (
    <>
      <div className="flex items-center ml-1/20 mt-12">
        <img src="/icon/6-05.png" alt="icon" className="w-20 h-20" />
        <h3 className="nanum-myeongjo-regular">交通資訊</h3>
      </div>
      <div className="mx-auto w-4/5">
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.8032941111992!2d121.52866186955846!3d25.02683861380221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9844da97d3b%3A0x5bf5f965058e03b9!2z5ZyL56uL6Ie654Gj5bir56-E5aSn5a2457ac5ZCI5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1728889763697!5m2!1szh-TW!2stw"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex gap-2">
              <img src="/time.svg" alt="icon" className="w-8 h-8" />
              <h4 className="text-nav-blue font-bold Source-Han-Serif">時間</h4>
            </div>
            <div className="ml-1/10">
              <p className="Source-Han-Serif font-semibold">
                2024年12月06日(五) 12:30 ~ 18:00
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
              台北市大安區和平東路一段135號
            </p>
            <div className="flex gap-2">
              <img src="/car.svg" alt="icon" className="w-8 h-8" />
              <h4 className="text-nav-blue font-bold">交通方式</h4>
            </div>
            <div className="Source-Han-Serif ml-1/10 font-semibold">
              <p>
                1. 捷運古亭站:
                中和新蘆線(橘線)、松山新店線(綠線)於『古亭站』5號出口直行約八分鐘可抵達校區大門。
              </p>
              <p>
                2. 捷運台電大樓站:
                松山新店線(綠線)於『台電大樓站』3號出口，師大路直行約十分鐘後在和平東路一段左轉即可抵達校區大門。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
