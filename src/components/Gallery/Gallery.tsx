import { useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import images from "../../constants/images";

const photos = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

function Gallery() {
  const slideContainer = useRef<HTMLDivElement>(null);

  function handleScroll(type: string) {
    if (type === "left") {
      return (slideContainer.current!.scrollLeft -= 300);
    } else if (type === "right") {
      return (slideContainer.current!.scrollLeft += 300);
    }
  }

  return (
    <section className="flex flex-wrap bg-black py-16 px-8 lg:px-24">
      {/* Instagram */}
      <div className="flex w-full flex-col items-start justify-center min-[1150px]:w-1/2 min-[1150px]:pr-8">
        <h2 className="font-base text-xl font-bold text-white sm:text-2xl">
          Instagram
        </h2>
        <img src={images.spoon} className="mb-4 w-[45px]" alt="" />
        <h1 className="font-base text-[64px] font-bold leading-[83px] tracking-wider text-golden">
          Photo Gallery
        </h1>
        <p className=" mt-8 text-justify font-alt tracking-wider text-grey">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button className="mt-4 rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
          View More
        </button>
      </div>
      {/* Food Slide */}
      <div className="relative my-20 w-full min-[1150px]:my-0 min-[1150px]:w-1/2">
        <div
          className="flex snap-x flex-row gap-8 overflow-x-hidden scroll-smooth "
          ref={slideContainer}
        >
          {photos.map((photo, index) => {
            return (
              <div
                className="relative h-[320px] min-w-[240px] snap-center sm:h-[447px] sm:w-[301px]"
                key={index}
              >
                <img
                  src={photo}
                  className=" h-full w-full object-cover "
                  alt=""
                />
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black/[.65] opacity-0 transition-all duration-500 hover:opacity-100">
                  <BsInstagram className="cursor-pointer text-4xl text-white" />
                </div>
              </div>
            );
          })}
        </div>
        {/* Arrow Left & Right */}
        <div className="absolute bottom-[5%] flex w-full justify-between px-4">
          <BsArrowLeftShort
            className="cursor-pointer rounded-md bg-black text-4xl text-golden"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="cursor-pointer rounded-md bg-black text-4xl text-golden"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
