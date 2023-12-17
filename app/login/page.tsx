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
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        let res = await response.json();
        localStorage.setItem("user", JSON.stringify(res));
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
      <Navbar />
      <div className="md:max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        <form
          action={handleSubmit}
          className="grid md:grid-cols-1 gap-2 md:place-items-center md:max-w-7xl md:w-[60rem] mx-auto p-10 bg-white rounded-lg shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-slate-700 pb-5 text-center">
            Log In
          </h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border px-2 py-1 rounded-lg md:w-[25rem]"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            className="border px-2 py-1 rounded-lg md:w-[25rem]"
          />
          <input
            type="submit"
            value="Log In"
            className="border px-2 py-1 rounded-lg  bg-slate-500 hover:bg-slate-600 cursor-pointer md:w-[10rem]"
          />
        </form>
      </div>
    </>
  );
};

export default page;
