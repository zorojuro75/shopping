"use client";
import exp from "constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCartPlus, FaUserCircle } from "react-icons/fa";
type Props = {};
const Navbar = (props: Props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [expand, setExpand] = useState(false);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  function expanded() {
    setExpand(!expand);
    console.log(user);
  }
  return (
    <div className="bg-white shadow-lg p-5 flex justify-between items-center md:block">
      <div className="flex justify-between items-center text-2xl md:text-4xl md:max-w-7xl md:mx-auto">
        <Link href={"/"} className="text-purple-500 font-semibold">
          Shopping
        </Link>
        <div className="text-xl hidden md:flex gap-2">
          <Link href={"/"} className="border-r px-2">
            Men&apos;s
          </Link>
          <Link href={"/"} className="border-r px-2">
            Women&apos;s
          </Link>
          <Link href={"/"}>Kid&apos;s</Link>
        </div>
        <div className="text-xl hidden md:flex gap-2">
          {loggedIn ? (
            <>
              <FaCartPlus className="text-2xl mr-2" />
              <button onClick={expanded}>
                <FaUserCircle className="text-2xl ml-2" />
              </button>
              {expand ? <div className="absolute z-50 bg-white top-[55px] right-10 text-lg flex flex-col items-center p-5 border rounded-sm">
              {user?.userName}
              <button className="border-t" onClick={expanded}>Log Out</button>
              </div> : <></>}
            </>
          ) : (
            <>
              <Link href={"/"} className="border-r px-2">
                Log in
              </Link>
              <Link href={"/signin"}>Sign up</Link>
            </>
          )}
        </div>
      </div>
      <div>
        <CiMenuBurger className="md:hidden text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
