import React, { useState } from "react";
import "./style.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { data } from "./data";

const SliderRender = () => {
  const [current, setCurrent] = useState(0);

  const totalImages = data.length;

  const nextImage = () => {
    setCurrent(current === totalImages - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? totalImages - 1 : current - 1);
  };

  return (
    <div>
      <div className="carousel_container">
        <div className="button_wrapper">
          <button className="prev_btn btn" onClick={prevImage}>
            <MdKeyboardArrowLeft />
          </button>
          <button className="next_btn btn" onClick={nextImage}>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="image_wrapper">
          {data.map((image, index) => {
            return (
              <div
                key={image.id}
                className={index === current ? "main" : "item"}
              >
                <img src={image.img} alt="" className="carousel_img" />
                <p className="caption">{image.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderRender;
