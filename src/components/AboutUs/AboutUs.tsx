import images from "../../constants/images";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-main bg-cover bg-fixed bg-center bg-repeat py-16 px-8 lg:px-24 "
    >
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-16">
        {/* About Us */}
        <div className=" z-10 flex flex-1 flex-col items-end justify-end text-right">
          <h1 className="font-base text-[64px] font-bold text-golden ">
            About Us
          </h1>
          <img src={images.spoon} className="w-[45px]" alt="" />
          <p className="my-8 text-right font-alt leading-7 tracking-wider text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
            Explore Menu
          </button>
        </div>
        {/* Knife */}
        <img src={images.knife} className=" z-10 my-16 h-[910px]" alt="" />
        {/* G Image */}
        <img
          src={images.G}
          className="absolute top-1/2 left-1/2 h-[320px] w-[80%] -translate-x-1/2 -translate-y-1/2 sm:h-[415px] sm:w-[391px]"
          alt=""
        />
        {/* Our History */}
        <div className=" z-10 flex flex-1 flex-col items-start justify-start">
          <h1 className="font-base text-[64px] font-bold text-golden">
            Our History
          </h1>
          <img src={images.spoon} className="w-[45px]" alt="" />
          <p className="my-8 font-alt leading-7 tracking-wider text-grey">
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>
          <button className="rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
