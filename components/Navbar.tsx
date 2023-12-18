"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiLogin, CiMenuBurger, CiSearch } from "react-icons/ci";
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
  }, [logout]);
  function logout() {
    localStorage.clear();
    expanded();
  }
  function expanded() {
    setExpand(!expand);
    console.log(user);
  }
  return (
    <div className="bg-white shadow-lg p-5 flex justify-between items-center md:block">
      <div className="grid grid-cols-3 text-2xl md:text-4xl md:max-w-7xl md:mx-auto place-items-center">
        <Link href={"/"} className="text-purple-500 font-semibold">
          Shopping
        </Link>
        <div className="text-base hidden md:flex gap-2">
          <Link href={"/"} className="border-r px-2">
            Men&apos;s
          </Link>
          <Link href={"/"} className="border-r px-2">
            Women&apos;s
          </Link>
          <Link href={"/"}>Kid&apos;s</Link>
        </div>
        <div className="text-xl hidden md:flex gap-2">
          <div className="group relative flex transform">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-xl px-2 w-0 transition duration-[1000ms] ease-in text-sm bg-none outline-none hidden searchInput group-hover:block text-black group-hover:w-48"
            />

            <button className="float-right rounded-full flex justify-center items-center transition duration-400  searchButton">
              <CiSearch className="text-2xl" />
            </button>
          </div>

          {loggedIn ? (
            <>
              <FaCartPlus className="text-2xl mx-4" />
              <button onClick={expanded}>
                <FaUserCircle className="text-2xl" />
              </button>
              {expand ? (
                <div className="absolute z-50 bg-white top-[55px] right-10 text-lg flex flex-col items-center p-5 border rounded-sm">
                  {user?.userName}
                  <button className="border-t" onClick={logout}>
                    Log Out
                  </button>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <CiLogin className="text-2xl" />
              </Link>
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
