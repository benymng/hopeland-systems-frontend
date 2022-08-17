import React from "react";
import AdminLogin from "../components/AdminLogin";

export const Admin = () => {
  const admin = sessionStorage.getItem("admin");
  console.log(admin);
  if (admin != "loggedIn") {
    return <AdminLogin />;
  }

  return (
    <div>
      <h1>Logged In</h1>
    </div>
  );
};
