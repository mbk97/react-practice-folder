import React, { useState } from "react";
import "./style.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { data } from "./data";

const AccordionRender = () => {
  const [clicked, setClicked] = useState(false);

  const handleShow = (index) => {
    if (clicked === index) {
      // this closes the already displayed accordion
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="h-screen bg-gray-dark flex items-center justify-center column flex-col">
      {data.map((d, index) => {
        return (
          <div className="w-[300px] md:w-[40%] bg-yellow p-2 m-5" key={d.id}>
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleShow(index)}
            >
              <p>{d.name}</p>
              <div>
                {clicked === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {clicked === index && <p className="bg-blue">{d.text}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionRender;
