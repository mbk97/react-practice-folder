import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  console.log(loginWithRedirect);
  return (
    <div className="flex justify-center items-center flex-col gap-[20px] h-[300px] bg-[rgba(76,76,225,0.43)] text-[white] w-[300px] rounded-[10px]">
      <div>
        <h1 className="text-xl">Sign-in</h1>
      </div>
      <button
        className="bg-[white] rounded-[5px] w-[130px] text-[rgba(76,76,225,0.43)] font-bold"
        type="submit"
        onClick={loginWithRedirect}
      >
        Submit
      </button>
    </div>
  );
};

export default SignIn;
