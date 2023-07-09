import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();

  console.log(user, "user here");
  return (
    <div>
      <p>Welcome to the Dashboard page</p>
    </div>
  );
};

export default Dashboard;
