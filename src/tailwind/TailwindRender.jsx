import React from "react";
import imageThree from "../Slider/images/image-2.jpg";

const TailwindRender = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={imageThree}
        className="rounded-full h-[100px] w-[100px]"
        alt=""
      />
    </div>
  );
};

export default TailwindRender;
