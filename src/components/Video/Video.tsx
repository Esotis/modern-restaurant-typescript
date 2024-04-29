import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

function Video() {
  const [click, setClick] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen w-full">
      <video
        src={meal}
        className="h-full w-full object-cover"
        ref={videoRef}
        loop
        controls={false}
        muted
      ></video>
      {/* Play / Pause Button */}
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black/[.65]">
        <div
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-[50%] border-[1px] border-golden"
          onClick={() => {
            setClick(!click);
            if (!click) {
              return videoRef.current!.play();
            }
            videoRef.current!.pause();
          }}
        >
          {click ? (
            <BsPauseFill className="text-[30px] text-white" />
          ) : (
            <BsFillPlayFill className="text-[30px] text-white" />
          )}
        </div>
      </div>
    </section>
  );
}

export default Video;
