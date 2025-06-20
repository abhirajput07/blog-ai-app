import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [comments, setComments] = useState(null);
  const [value, setValue] = useState({
    name: "",
    comment: "",
  });
  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setBlogData(data);
  };
  const fetchComments = async () => {
    setComments(comments_data);
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return blogData ? (
    <>
      <div className="relative">
        <Navbar />
        <img
          src={assets.gradientBackground}
          alt=""
          className="absolute md:-top-50  opacity-50 -z-1  object-cover object-center"
        />
        <div className="text-center mt-10 text-gray-600">
          <p className="text-primary py-4 font-medium">
            Published on {moment(blogData.createdAt).format("MMMM Do YYYY")}
          </p>
          <h1 className="text-2xl sm:text-5xl mx-auto text-gray-800 max-w-2xl font-semibold">
            {blogData.title}
          </h1>
          <h2 className="my-5 max-w-lg mx-auto ">{blogData.subTitle}</h2>
          <p className="inline-flex items-center justify-center gap-4 px-4 py-1 bg-primary/10 border border-primary rounded-full text-sm text-primary mb-4">
            Abhishek Rajput
          </p>
        </div>

        <div className="mx-5 max-w-5xl md:mx-auto my-10">
          <img src={blogData.image} alt="" className="rounded-3xl mb-5" />
          <div
            className="rich-text max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          ></div>
          <div className="max-w-4xl mx-auto my-10">
            <p className="mb-4 font-semibold">
              {comments.length > 0
                ? `Comments (${comments.length})`
                : "No comments"}
            </p>
            <div className="flex flex-col gap-5">
              {comments.map((comment, index) => (
                <div
                  className=" bg-primary/2 border border-primary/5 max-w-4xl sm:p-4 rounded text-gray-600"
                  key={index}
                >
                  <div className="flex items-center gap-2 ">
                    <img src={assets.user_icon} alt="" className="w-6" />
                    <p>{comment.name}</p>
                  </div>
                  <div className="flex justify-between items-start text-sm">
                    <p className="text-sm max-w-md ml-8">{comment.content}</p>
                    <div className="text-nowrap">
                      {moment(comment.createdAt).fromNow()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto my-10">
            <p className="mb-4 font-semibold">Add your comments</p>
            <form
              className="flex flex-col items-start sm:max-w-xl w-full  gap-4 "
              onSubmit={handleAddComment}
            >
              <input
                type="text"
                name="name"
                value={value.name}
                onChange={handleOnChange}
                placeholder="Name"
                required
                className="border border-gray-300 px-3 py-2 w-full h-full rounded outline-none text-gray-500"
              />
              <textarea
                name="comment"
                value={value.comment}
                onChange={handleOnChange}
                placeholder="Comment"
                className="border border-gray-300 px-3 w-full rounded outline-none text-gray-500 h-40"
              ></textarea>
              <button
                type="submit"
                className="bg-primary rounded text-white px-7 py-2.5 cursor-pointer text-sm"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="max-w-4xl mx-auto my-10">
            <p className="mb-4 font-semibold">
              Share this article on social media
            </p>
            <div className="flex">
              <img src={assets.facebook_icon} width={50} alt="" />
              <img src={assets.twitter_icon} width={50} alt="" />
              <img src={assets.googleplus_icon} width={50} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <Loader />
      <Footer />
    </>
  );
};

export default Blog;
