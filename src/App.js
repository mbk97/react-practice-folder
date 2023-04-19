import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./ContextPractice/ContextSetup";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";

const App = () => {
  const [name, setName] = useState("Mubarak");
  return (
    <UserContext.Provider value={{ name, setName }}>
      <div className="bg-[rgba(0,0,0,5)] h-[100vh] text-[white]">
        <ToastContainer />
        <InfiniteScroll />
      </div>
    </UserContext.Provider>
  );
};

export default App;
