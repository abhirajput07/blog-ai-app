import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const fetchData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setBlogData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return blogData ? (
    <>
      <div className="relative">
        <Navbar />
        <img
          src={assets.gradientBackground}
          alt=""
          className="absolute md:-top-50 -top-20 opacity-50 -z-1  object-cover object-center"
        />
        <div className="text-center mt-10 text-gray-600">
          <p className="text-primary py-4 font-medium">
            Published on {moment(blogData.createdAt).format("MMMM Do YYYY")}
          </p>
          <h1 className="text-2xl sm:text-5xl mx-auto text-gray-800 max-w-2xl font-semibold">
            {blogData.title}
          </h1>
          <h2 className="my-5 max-w-lg mx-auto truncate">
            {blogData.subTitle}
          </h2>
          <p className="inline-flex items-center justify-center gap-4 px-4 py-1 bg-primary/10 border border-primary rounded-full text-sm text-primary mb-4">
            Abhishek Rajput
          </p>
        </div>

        <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
          <img src={blogData.image} alt="" className="rounded-3xl mb-5" />
          <div
            className="rich-text max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          ></div>
        </div>
      </div>
    </>
  ) : (
    <div>loading</div>
  );
};

export default Blog;
