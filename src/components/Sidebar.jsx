import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        !nav
          ? `absolute top-0 translate-x-[-60%] h-screen  bg-gray-100 transition duration-500 ease-in-out w-[200px] text-end z-50`
          : `absolute transition ease-in-out top-0 left-0 h-screen drop-shadow-2xl z-50 text-end w-[200px] duration-500 bg-gray-100`
      }
    >
      <ul className="p-3 space-y-8">
        <li className={`   transition ease-in-out p-1 rounded`}>
          <div className='flex items-center justify-end'>
            <h2 className="mr-5 font-bold">Menu</h2>

            <button onClick={handleNav}>
              <HiOutlineMenuAlt2 size={"2rem"} />
            </button>
          </div>
        </li>
        <li cla>
          <NavLink className={"flex items-center justify-end"} to="/">
            <p className="mr-5 font-semibold">Home</p>
            <button>
              <HiOutlineHome size={"2rem"} />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink className={"flex items-center justify-end"} to="/cart">
            <p className="mr-5 font-semibold">Car</p>
            <button>
              <CiShoppingCart size={"2rem"} />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink className={"flex items-center justify-end"} to="/favs">
            <p className="mr-5 font-semibold">Favorites</p>
            <button>
              <IoHeartOutline size={"2rem"} />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink className={`flex items-center justify-end` } to="/orders">
            <p className="mr-5">Home</p>
            <button>
              <CiDeliveryTruck size={"2rem"} />
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
