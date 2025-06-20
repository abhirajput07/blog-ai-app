import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 10,
    comments: 5,
    drafts: 0,
    recentBlogs: [],
  });
  const fetchDashboard = () => {
    setDashboardData(dashboard_data);
  };
  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <>
      <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
        <div className="flex flex-wrap gap-4 ">
          <div className="flex  items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all flex-wrap">
            <img
              src={assets.dashboard_icon_1}
              alt=""
              className="md:w-16 w-12"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.blogs}
              </p>
              <p className="text-gray-400 font-light">Blogs</p>
            </div>
          </div>
          <div className="flex  items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all">
            <img
              src={assets.dashboard_icon_2}
              alt=""
              className="md:w-16 w-12"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.comments}
              </p>
              <p className="text-gray-400 font-light">Comments</p>
            </div>
          </div>
          <div className="flex  items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all">
            <img
              src={assets.dashboard_icon_3}
              alt=""
              className="md:w-16 w-12"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.drafts}
              </p>
              <p className="text-gray-400 font-light">Drafts</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mt-6 gap-3 text-gray-600 my-4">
            <img src={assets.dashboard_icon_4} alt="" />
            <p>Latest blogs</p>
          </div>
          <div className="max-w-4xl shadow rounded-lg overflow-x-auto overflow-y-auto bg-white scrollbar-hide h-96">
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
                {dashboardData.recentBlogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
