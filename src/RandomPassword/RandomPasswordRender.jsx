import React, { useState } from "react";
import { toast } from "react-toastify";
import "./style.css";
import { passwordCharacters } from "./character";

const RandomPasswordRender = () => {
  const [password, setPassword] = useState("*******");
  const [copied, setCopied] = useState(false);
  const passwordLength = 15;
  let letters = "";
  const generatePassword = () => {
    for (let i = 0; i <= passwordLength; i++) {
      const randomNumbers = Math.floor(
        Math.random() * passwordCharacters.length,
      );
      letters += passwordCharacters.substring(randomNumbers, randomNumbers + 1);
      setPassword(letters);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        toast.success("Password copied");
        setCopied(true);
      },
      () => {
        toast.error("Generate your password");
        setCopied(false);
      },
    );
  };

  return (
    <div className="wrapper flex justify-center items-center h-screen flex-col">
      <h1 className="text-[#ffffff] text-[24px] font-semibold ">
        Generate Random Password
      </h1>
      <div className="content_card mt-7 rounded-[10px] p-[100px]">
        <h1 className="border w-[250px] p-5 border-[white] rounded-[10px] text-center font-semibold">
          {password}
        </h1>
        <button
          className="mt-5 bg-blue p-[10px] w-[250px] rounded-[10px] font-bold"
          onClick={generatePassword}
        >
          Generate password
        </button>

        <button
          className="mt-5 block bg-blue p-[10px] w-[250px] rounded-[10px] font-bold"
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy to clipboard"}
        </button>
      </div>
    </div>
  );
};

export default RandomPasswordRender;
