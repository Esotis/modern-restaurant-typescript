import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import images from "../../constants/images";
import FooterLayout from "./FooterLayout";

function Footer() {
  return (
    <>
      <section className=" relative bg-black py-16 px-8 lg:px-24">
        {/* container */}
        <div className=" relative z-10 flex flex-col items-center justify-center">
          {/* Newsletter */}
          <div className="flex max-w-[920px] flex-col items-center justify-center rounded-md bg-black py-8 px-2 sm:border-[1px] sm:border-golden sm:px-8 sm:py-16">
            <h2 className=" font-base text-xl font-bold text-white sm:text-2xl">
              Newsletter
            </h2>
            <img src={images.spoon} className="mb-4 w-[45px]" alt="" />
            <h1 className=" text-center font-base text-[64px] font-bold leading-[83px] tracking-wider text-golden">
              Subscribe To Our Newsletter
            </h1>
            <p className="font-alt text-white ">
              And Never Miss Latest Updates!
            </p>

            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-8">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full rounded-lg border-[1px] border-golden bg-black px-4 py-[.75rem] font-base text-lg text-white lg:w-[620px]"
              />
              <button className="rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
                Subscribe
              </button>
            </div>
          </div>
          {/* Contact */}
          <div className=" mt-20 flex w-full flex-col items-center justify-center gap-12 min-[1150px]:flex-row min-[1150px]:gap-0">
            <div className="flex-1 text-center">
              <h2 className=" mb-4 font-base text-[32px] font-semibold tracking-wider text-white ">
                Contact Us
              </h2>
              <p className="font-alt tracking-wider text-white">
                9 W 53rd St, New York, NY 10019, USA
              </p>
              <p className="font-alt tracking-wider text-white">
                +1 212-344-1230
              </p>
              <p className="font-alt tracking-wider text-white">
                +1 212-555-1230
              </p>
            </div>
            {/* Gerich */}
            <div className="flex-1 text-center">
              <img
                src={images.gericht}
                className="mx-auto mb-3 w-[210px]"
                alt=""
              />
              <p className="font-alt tracking-wider text-white">
                "The Best Way To Find Yourself Is To Lose Yourself In The
                Service Of Others."
              </p>
              <img
                src={images.spoon}
                className=" mx-auto mt-4 w-[45px]"
                alt=""
              />
              <div className=" mt-4 flex items-center justify-center gap-4">
                <FiFacebook className=" cursor-pointer text-3xl text-white transition duration-500 hover:text-golden" />
                <FiTwitter className=" cursor-pointer text-3xl text-white transition duration-500 hover:text-golden" />
                <FiInstagram className=" cursor-pointer text-3xl text-white transition duration-500 hover:text-golden" />
              </div>
            </div>
            {/* Working Hours */}
            <div className=" flex-1 text-center">
              <h2 className=" mb-4 font-base text-[32px] font-semibold tracking-wider text-white ">
                Working Hours
              </h2>
              <p className="font-alt tracking-wider text-white">
                Monday-Friday:
              </p>
              <p className="mb-4 font-alt tracking-wider text-white">
                08:00 Am - 12:00 Am
              </p>
              <p className="font-alt tracking-wider text-white">
                Saturday-Sunday:
              </p>
              <p className="font-alt tracking-wider text-white">
                07:00 Am - 11:00 Pm
              </p>
            </div>
          </div>
          {/* 2022 Gericht */}
          <p className="mt-24 font-alt tracking-wider text-white ">
            2022 Gericht. All Rights reserved.
          </p>
        </div>
        <FooterLayout />
      </section>
    </>
  );
}

export default Footer;
