import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./ContextPractice/ContextSetup";
import { Auth0Provider } from "@auth0/auth0-react";
import FilterRender from "./filterTable/FilterRender";
import FramerMotion from "./FramerMotion/FramerMotion";
import MainTab from "./tabs/MainTab";
import { data } from "./tabs/data";
import ToolkitPractice from "./toolkit-practice/ToolkitPractice";
import UseReducerPractice from "./UseReducerPractice/UseReducerPractice";

const App = () => {
  const [name, setName] = useState("Mubarak");
  const [activeTab, setActiveTab] = useState(1);

  return (
    <UserContext.Provider value={{ name, setName }}>
      <div className="bg-[white] h-[100vh] ">
        {/* <ToastContainer />
          <FilterRender /> */}
        {/* <FramerMotion /> */}
        {/* <MainTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={data}
        /> */}
        <UseReducerPractice />
      </div>
    </UserContext.Provider>
  );
};

export default App;
