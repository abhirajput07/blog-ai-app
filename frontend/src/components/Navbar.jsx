import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5  px-[2%] xl:px-0  cursor-pointer ">
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
              navigate("/admin");
            }}
          >
            Login
            <img src={assets.arrow} className="w-3" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
