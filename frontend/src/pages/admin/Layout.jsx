import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full border-b border-gray-200 h-[80px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-[2%] xl:px-0 cursor-pointer ">
          <img
            src={assets.logo}
            alt="logo"
            className="w-44"
            onClick={() => {
              navigate("/");
            }}
          />
          <button
            className="bg-primary flex items-center gap-2 rounded-full text-white px-7 py-2.5 cursor-pointer text-sm"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Logout
            <img src={assets.arrow} className="w-3" alt="" />
          </button>
        </div>
        <div className="flex h-[calc(100vh-80px)] max-w-full mx-auto">
          <Sidebar />
          <Outlet />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Layout;
