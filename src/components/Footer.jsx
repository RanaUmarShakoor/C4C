import user from "./../assets/user_icon.png";
import logo from "./../assets/logo.png";
import insta_logo from "./../assets/insta_logo.png";
import fb_logo from "./../assets/fb_logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  let h3class = "font-medium text-xl";
  let textclass = "text-base text-center lg:text-left text-[#33333380]";

  return (
    <footer
      style={{ fontFamily: "Prompt" }}
      className="flex flex-col py-5 lg:p-24"
    >
      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        <div className="order-2 lg:order-1 w-full lg:w-auto flex-1 flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-medium text-xl">Quick Links</h3>
          <Link to="/four" className={textclass}>I am looking for cleaning</Link>
          <Link to="/three" className={textclass}>I offer cleaning</Link>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-auto flex-1 flex flex-col items-center lg:items-start gap-2">
          <h3 className={h3class}>Informations:</h3>
          <div className={textclass}>
            <p>Company:</p>
            <p className="underline">
              Click4clenarer s.r.o.
              <br />
              Karpatské námestie 7770/10A
              <br />
              83106 Bratislava
            </p>
            <p className="underline">IČO: 56119585</p>
            <p className="underline">DIČ: 123456</p>
          </div>
        </div>
        <div className="order-4 lg:order-3 w-full lg:w-auto flex-1 flex flex-col items-center lg:items-start gap-2">
          <h3 className={h3class}>Contact us</h3>
          <p className={textclass}>
            Mobile number
            <br />
            <a href="tel:0900998000" className="underline text-[#0094FF] lg:text-[#33333380]">
              0900 998 000
            </a>
          </p>
          <p className={textclass}>
            E-mail
            <br />
            <a href="mailto:info@click4cleaner.sk" className="underline text-[#0094FF] lg:text-[#33333380]">
              info@click4cleaner.sk
            </a>
          </p>
        </div>
        <div className="order-3 lg:order-4 w-full lg:w-[27%] flex flex-col items-center lg:items-start gap-3 p-8 bg-[#F4F9FF]">
          <h3 className={h3class}>Registration</h3>
          <button className="px-2 xl:px-4 py-2 rounded-lg bg-[#0094FF]">
            <div className="flex items-center justify-center gap-2 xl:gap-3 text-white">
              <img
                src={user}
                alt=""
                className="w-[14px] lg:w-[12px] xl:w-[14px] h-[14px] lg:h-[12px] xl:h-[14px] object-contain"
              />
              <p className=" text-base lg:text-sm xl:text-base">I want to register</p>
            </div>
          </button>
          <p className="w-1/2 lg:w-full text-[12px] text-[#33333380] text-center lg:text-start">
            Registration is free and will allow you to fully use the
            Click4cleaner portal!
          </p>
        </div>
      </section>

      <section className="mt-20 py-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-t-[1px] border-[#33333350]">
        <div className="order-3 lg:order-1 flex-1">
          <img src={logo} alt="" className="w-14 object-contain" />
        </div>
        <div className="order-2 w-[52%] flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
          <a href="/" className="text-sm text-black">
            General terms and conditions
          </a>
          <a href="/" className="text-sm text-black">
            Personal data protection policy
          </a>
          <a href="/" className="text-sm text-black">
            Cookies
          </a>
        </div>
        <div className="order-1 lg:order-3 w-full lg:w-[27%] flex justify-center lg:justify-start gap-4">
          <a href="/">
            <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-[#33333340] rounded-full">
              <img src={insta_logo} alt="" className="h-5 object-contain" />
            </div>
          </a>
          <a href="/">
            <div className="w-10 h-10 flex items-center justify-center border-[1.5px] border-[#33333340] rounded-full">
              <img src={fb_logo} alt="" className="h-5 object-contain" />
            </div>
          </a>
        </div>
      </section>
    </footer>
  );
}
