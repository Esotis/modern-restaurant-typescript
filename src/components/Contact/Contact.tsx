import images from "../../constants/images";

function Contact() {
  return (
    <>
      <section id="contact" className=" flex flex-wrap bg-main bg-cover bg-fixed bg-center bg-repeat py-16 px-8 lg:px-24">
        {/* Find Us */}
        <div className=" flex w-full flex-col items-start justify-center min-[1150px]:w-1/2">
          <h2 className=" font-base text-xl font-bold text-white sm:text-2xl">
            Contact
          </h2>
          <img src={images.spoon} className="mb-4 w-[45px]" alt="" />
          <h1 className=" mb-10 font-base text-[64px] font-bold leading-[83px] tracking-wider text-golden">
            Find Us
          </h1>
          <p className=" font-alt text-white">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <h3 className=" my-8 text-xl font-bold tracking-wider text-golden sm:text-2xl">
            Opening Hours
          </h3>
          <p className=" font-alt tracking-wider text-white">
            Mon - Fri: 10:00 Am - 02:00 Am
          </p>
          <p className=" font-alt tracking-wider text-white">
            Sat - Sun: 10:00 Am - 03:00 Am
          </p>
          <button className="mt-8 rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
            Visit Us
          </button>
        </div>
        {/* Image */}
        <div className=" mt-20 flex w-full items-center justify-center min-[1150px]:mt-0 min-[1150px]:w-1/2 ">
          <img
            src={images.findus}
            className="w-full min-[1150px]:w-[80%]"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Contact;
