import React, { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm p-6 max-md:m-6  border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full py-6 text-center">
              <h1 className="text-3xl font-bold">
                <span className="text-primary">Admin</span> Login
              </h1>
              <p className="font-light">
                Enter your credential to access admin panel
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col ">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={value.email}
                  onChange={handleChange}
                  required
                  className="border-b-2 border-gray-300 p-2 outline-none mb-6 w-full"
                  placeholder="enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  type="password"
                  required
                  className="border-b-2 border-gray-300 p-2 outline-none mb-6 w-full"
                  placeholder="enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium bg-primary text-white  rounded cursor-pointer hover:bg-primary/90 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
