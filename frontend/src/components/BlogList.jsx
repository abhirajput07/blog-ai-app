import { useState } from "react";
import { motion } from "motion/react";
import { blog_data, blogCategories } from "../assets/assets.js";
import BlogCard from "./BlogCard.jsx";
const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-[3%]">
        <div className="flex justify-center gap-4 sm:gap-8 my-10 relative ">
          {blogCategories.map((item) => (
            <div key={item} className="relative">
              <button
                className={`text-gray-500 cursor-pointer ${
                  menu === item && "text-white px-3 pt-0.5"
                }`}
                onClick={() => {
                  setMenu(item);
                }}
              >
                {item}
              </button>
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0 left-0 right-0 h-7 -z-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {blog_data
            .filter((blog) => (menu === "All" ? true : blog.category === menu))
            .map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
