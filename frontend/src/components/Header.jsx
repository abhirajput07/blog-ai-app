import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <>
      <div className="relative ]">
        <div className="text-center mt-10 mb-8 px-[5%] sm:px-[3%]">
          <div className="inline-flex items-center justify-center gap-4 px-5 py-1.5 bg-primary/10 border border-primary rounded-full text-sm text-primary mb-4">
            <p>New: AI feature integrated</p>
            <img src={assets.star_icon} alt="staricon" className="w-2.5" />
          </div>
          <h1 className="font-semibold text-3xl sm:text-6xl sm:leading-16 text-gray-800">
            Your own <span className="text-primary">blogging</span> <br />
            platform.
          </h1>
          <p className="max-w-2xl my-6 sm:my-8 m-auto text-gray-500 max-sm:text-xs">
            This is your place to think out loud, to share what matters, tp
            write without filter.Whether It's one work one ora thousand, your
            story starts right here.
          </p>
          <form className="flex justify-between max-w-lg border border-gray-300 bg-white overflow-hidden rounded mx-auto max-sm:scale-75">
            <input
              type="text"
              placeholder="Search for blogs"
              required
              className="w-full outline-none pl-5"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer hover:scale-105"
            >
              Search
            </button>
          </form>
        </div>
        <img
          src={assets.gradientBackground}
          alt=""
          className="absolute md:-top-50 -top-20 opacity-50 -z-1 mx-auto object-cover object-center"
        />
      </div>
    </>
  );
};

export default Header;
