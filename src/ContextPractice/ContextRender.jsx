import React, { useContext } from "react";
import { UserContext } from "./ContextSetup";

const ContextRender = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      ContextRender {name}
      <button onClick={() => setName("Olalekan")}>Change name</button>
    </div>
  );
};

export default ContextRender;
