import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center space-y-2 my-10 px-[2%] xl:px-0">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form className="flex justify-between items-center max-w-2xl w-full h-12 md:h-13 ">
        <input
          type="text"
          placeholder="Enter your email id"
          required
          className="border border-gray-300 px-3 w-full h-full rounded-md border-r-0 outline-none text-gray-500 rounded-r-none"
        />
        <button
          type="submit"
          className="bg-primary/80 hover:bg-primary text-white md:px-12 px-8 py-2 rounded-md transition-all cursor-pointer h-full rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
