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
      <a href="/newAdmin">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10">
          Admin Signup
        </button>
      </a>
      <a href="/newBlog">
        <button class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded my-10">
          New Blog
        </button>
      </a>
    </div>
  );
};
