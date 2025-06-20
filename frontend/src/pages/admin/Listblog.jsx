import { useEffect, useState } from "react";
import { assets, blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const Listblog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
        <h1 className="flex gap-3 ">
          <img src={assets.dashboard_icon_4} alt="" /> All Blogs
        </h1>
        <div className="max-w-4xl h-[100%] mt-3 shadow rounded-lg overflow-x-auto  bg-white scrollbar-hide">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-left text-gray-600 uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="">
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </>
  );
};

export default Listblog;
