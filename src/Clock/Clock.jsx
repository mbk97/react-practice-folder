import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  //  Without passing any parameter into the toLocaleTimeString function, it be default uses the 12hour format
  const formated_time = time.toLocaleTimeString("en-us", { hour12: false });

  const refreshClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const runTime = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(runTime);
    };
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className=" bg-gray-dark w-[500px] h-[200px] flex items-center justify-center rounded-[10px]">
        <h1 className="text-[32px] md:text-[62px] text-[aqua]">
          {formated_time}
        </h1>
      </div>
    </div>
  );
};

export default Clock;
