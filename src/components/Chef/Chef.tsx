import images from "../../constants/images";

function Chef() {
  return (
    <>
      <section className="flex flex-col bg-main bg-cover bg-fixed bg-center bg-repeat py-16 px-8 lg:px-24 min-[1150px]:flex-row">
        {/* Chef Image */}
        <div className="mb-20 flex w-full items-center justify-start min-[1150px]:mb-0 min-[1150px]:w-1/2">
          <img
            src={images.chef}
            alt=""
            className="w-full min-[1150px]:w-[80%]"
          />
        </div>
        {/* Chef Word */}
        <div className="flex flex-col items-start justify-start min-[1150px]:w-1/2">
          <h2 className="font-base text-xl font-bold tracking-wider text-white sm:text-2xl">
            Chef's Word
          </h2>
          <img src={images.spoon} className="mb-4 w-[45px]" alt="" />
          <h1 className="font-base text-[64px] font-bold leading-[83px] tracking-wider text-golden">
            What We Believe In
          </h1>
          <div className="mt-20 w-full">
            <img
              src={images.quote}
              className="float-left mb-4 mr-4 h-[40px] w-[47px]"
              alt=""
            />
            <p className="text-justify font-alt tracking-wider text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              . Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </p>
          </div>
          <div className="mt-12 w-full">
            <p className="font-base text-[32px] tracking-wider text-golden ">
              Kevin Luo
            </p>
            <p className="font-alt tracking-wider text-white">Chef & Founder</p>
            <img src={images.sign} className="mt-12 w-[250px]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Chef;
