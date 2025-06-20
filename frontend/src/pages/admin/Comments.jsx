import React, { useEffect, useState } from "react";
import { assets, comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState([]);
  const fetchComments = async () => {
    setComments(comments_data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
        <div className="flex justify-between items-start max-w-4xl">
          <h1 className="flex gap-3">
            <img src={assets.dashboard_icon_4} alt="" /> Comments
          </h1>
          <div className="flex md:gap-3 gap-1">
            <button
              onClick={() => setFilter("Approved")}
              className={`shadow-sm border text-nowrap rounded-full md:px-4 px-1 py-1 cursor-pointer text-xs ${
                filter === "Approved" ? "text-primary" : "text-gray-700"
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter("Not Approved")}
              className={`shadow-sm border text-nowrap rounded-full md:px-4 px-1 cursor-pointer text-xs ${
                filter === "Not Approved" ? "text-primary" : "text-gray-700"
              }`}
            >
              Not Approved
            </button>
          </div>
        </div>
        <div className="max-w-4xl h-[100%] mt-3 shadow rounded-lg overflow-x-auto  bg-white scrollbar-hide">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-left text-gray-600 uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  Blog Title & Comment
                </th>
                <th scope="col" className="px-2 py-4 xl:px-6 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {comments
                .filter((comment) => {
                  if (filter === "Approved") return comment.isApproved === true;
                  return comment.isApproved === false;
                })
                .map((comment, index) => (
                  <CommentTableItem
                    key={comment._id}
                    index={index + 1}
                    comment={comment}
                    fetchComments={fetchComments}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Comments;
