import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {
  const [image, setImage] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [value, setValue] = useState({
    title: "",
    subTitle: "",
    category: "Startup",
  });
  // const [title, setTitle] = useState("");
  // const [subTitle, setSubTitle] = useState("");
  // const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const generateContent = async () => {};
  useEffect(() => {
    //this will initiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <>
      <form
        className="flex-1  bg-blue-50/50 overflow-scroll "
        onSubmit={onSubmitHandler}
      >
        <div className="p-4 md:p-10 bg-white w-full max-w-4xl sm:m-10 rounded shadow ">
          <p> Upload thumbnail</p>
          <label htmlFor="image" className="inline-block">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              className="mt-2 h-24 rounded cursor-pointer  "
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>

          <p className="mt-4">Blog Title</p>
          <input
            type="text"
            name="title"
            value={value.title}
            onChange={handleOnChange}
            placeholder="Type here..."
            className="w-full max-w-lg mt-2 p-2 rounded outline-none border border-gray-300"
          />

          <p className="mt-4">SubTitle</p>
          <input
            type="text"
            name="subTitle"
            value={value.subTitle}
            onChange={handleOnChange}
            placeholder="Type here..."
            className="w-full max-w-lg mt-2 p-2 rounded outline-none border border-gray-300"
          />

          <p className="mt-4">Blog Description</p>
          <div className="max-w-lg h-52 pt-2 pb-16 sm:pb-10  relative">
            <div ref={editorRef}></div>
            <button
              type="button"
              onClick={generateContent}
              className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1 rounded hover:underline cursor-pointer"
            >
              Generate with AI
            </button>
          </div>

          <p className="mt-4">Category</p>
          <select
            name="category"
            value={value.category}
            onChange={handleOnChange}
            className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
          >
            <option value="">Select Category</option>
            {blogCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div className="flex gap-3 mt-4">
            <p>Publish now</p>
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="scale-125 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="mt-8 max-w-lg w-full  h-10  bg-primary text-white rounded text-sm cursor-pointer"
          >
            Add Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBlog;
