"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    try {
      console.log("not Hello");
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      let res = await response.json();
      localStorage.setItem("user", JSON.stringify(res));
      if (response.ok) {
        console.log("User registered successfully");
        router.push("/");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className="md:max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        <form
          action={handleSubmit}
          className="grid md:grid-cols-4 gap-2 md:place-items-center mx-auto p-10 bg-white rounded-lg shadow-2xl md:w-[60rem]"
        >
          <h1 className="md:col-span-4 text-3xl font-bold text-slate-700 pb-5 text-center">
            Sign up
          </h1>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="user name"
            className="border px-2 py-1 rounded-lg md:col-span-3 md:w-[25rem]"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border px-2 py-1 rounded-lg md:col-span-3 md:w-[25rem]"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="border px-2 py-1 rounded-lg md:col-span-3 md:w-[25rem]"
          />
          <input
            type="submit"
            value="Register"
            className="md:w-[25rem] border px-2 py-1 rounded-lg md:col-span-4 bg-slate-500 hover:bg-slate-600 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default page;
