import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[10px]">
      <CircularProgress
        size={30}
        style={{
          color: "white",
        }}
      />
      <h2 className="text-[24px]">Loading...</h2>
    </div>
  );
};

export default Loading;
