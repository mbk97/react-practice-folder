import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import Read from "./Read";
import axios from "axios";

const ClubsRender = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  console.log(data);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchDetails = async () => {
    const res = await axios.get(" http://localhost:5000/club_data");
    setData(res.data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center text-[20px] md:text-[32px] m-3">
        Club captains
      </h1>
      <div className="h-[auto] h-min-[300px] h-max-[auto] p-5 w-[100vw] md:w-[70%] rounded-[10px]">
        <Read data={data} />
        <CustomModal open={open} handleClose={handleClose}></CustomModal>
      </div>
    </div>
  );
};

export default ClubsRender;
