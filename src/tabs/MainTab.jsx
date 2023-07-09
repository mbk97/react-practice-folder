import React, { useState } from "react";
import "./style.css";

const MainTab = ({ activeTab, setActiveTab, data }) => {
  const activeItem = data?.find(({ id }) => id === activeTab);
  return (
    <div>
      <div className="flex">
        {data.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={activeTab === id ? "active_tab_btn" : "tab_btn"}
          >
            {name}
          </button>
        ))}
      </div>
      <div
        className={
          activeTab === activeItem.id
            ? "component_wrapper active"
            : "component_wrapper"
        }
      >
        <activeItem.Component />
      </div>
    </div>
  );
};

export default MainTab;
