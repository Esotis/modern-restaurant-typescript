import data from "../../constants/data";
import images from "../../constants/images";

function Awards() {
  return (
    <>
      <section
        id="awards"
        className=" flex flex-wrap bg-main bg-cover bg-fixed bg-center bg-repeat py-16 px-8 lg:px-24"
      >
        {/* Awards and Recognition */}
        <div className="flex w-full flex-col  items-start justify-start min-[1150px]:w-1/2">
          <h2 className="font-base text-xl font-bold tracking-wider text-white sm:text-2xl">
            Awards & Recognition
          </h2>
          <img src={images.spoon} className="mb-4 w-[45px]" alt="" />
          <h1 className="mb-12 font-base text-[64px] font-bold tracking-wider text-golden">
            Our Laurels
          </h1>
          <div className="flex flex-wrap items-center justify-start">
            {data.awards.map((award) => {
              return (
                <div
                  className="m-4 flex min-w-[230px] flex-1 "
                  key={award.title}
                >
                  <img
                    src={award.imgUrl}
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                  <div className="ml-4">
                    <h2 className="font-base text-xl font-bold tracking-wider text-golden sm:text-2xl">
                      {award.title}
                    </h2>
                    <p className="font-alt tracking-wider text-white">
                      {award.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Image  */}
        <div className="mt-20 flex w-full items-center justify-center min-[1150px]:mt-0 min-[1150px]:w-1/2">
          <img
            src={images.laurels}
            className="w-full min-[1150px]:w-[80%]"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Awards;
