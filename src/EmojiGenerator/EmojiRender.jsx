import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./style.css";

const api_key = "cf80e7f937350a860721a2e2d7a35f4567dad6a4";

const EmojiRender = () => {
  const [param, setParam] = useState("");
  const [enabled, setEnabled] = useState(false);

  const handleChange = (e) => {
    setParam(e.target.value);
  };

  const fetchUsers = async () => {
    const res = await axios.get(
      `https://emoji-api.com/emojis?search=${param}&access_key=${api_key}`,
    );
    return res.data;
  };

  const { data: userData, isFetching: loading } = useQuery(
    ["repo"],
    fetchUsers,
    {
      enabled: enabled,
    },
  );

  const emojiData = userData?.slice(0, 10);
  console.log(loading);

  return (
    <div className="wrapper  flex items-center justify-center flex-col">
      <div className="flex items-center justify-center h-[200px]">
        <h2 className="text-xl text-center text-[white] text-[24px] md:text-[43px]">
          Emoji Search{" "}
          <span role="img" aria-label="smile">
            &#x1f92f;
          </span>
        </h2>
      </div>
      <div className="bg-[white] h-[auto] w-[90%] md:w-[600px] rounded-[10px] flex items-center  flex-col mb-5 p-3">
        {loading && <p className="text-[red] text-2xl">Loading...</p>}
        <div className="w-[300px] md:w-[400px] flex items-center  flex-col ">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:border-blue-500 block w-[80%]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mt-10 outline-none"
            placeholder="Search for an emoji..."
            onChange={handleChange}
          />
          <button
            type="submit"
            className="block bg-[#5555e15b] p-[10px] mt-5 w-[120px] rounded-[10px] text-[white]"
            onClick={() => setEnabled(true)}
            disabled={param === ""}
          >
            Search
          </button>
        </div>
        {/* render */}
        <div className="mt-10">
          {emojiData ? (
            emojiData?.map((emoji, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-5">
                    <p className="text-[16px] font-semibold">Name:</p>
                    <p>{emoji?.unicodeName}</p>
                  </div>

                  <div className="flex gap-5">
                    <p className="text-[16px] font-semibold">Emoji:</p>
                    <p>{emoji?.character}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-[16px] font-semibold">No emoji found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmojiRender;
