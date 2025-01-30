import Dashboard from "../assets/key-square.svg";
import Products from "../assets/3d-square1.svg";
import Customers from "../assets/user-square1.svg";
import Income from "../assets/wallet-money2.svg";
import Promote from "../assets/discount-shape1.svg";
import Help from "../assets/message-question1.svg";
import User from "../assets/Ellipse8.svg";

import { useState } from "react";
import { TbSettings2 } from "react-icons/tb";
import { FaAngleRight, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Products", img: Products, activate: false },
    { name: "Customers", img: Customers, activate: true },
    { name: "Income", img: Income, activate: false },
    { name: "Promote", img: Promote, activate: false },
    { name: "Help", img: Help, activate: false },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className={`lg:hidden fixed top-4 left-4 z-50 ${
          isOpen ? "" : "bg-[#5932EA] text-white p-2 rounded-md shadow-md"
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "" : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen bg-white text-black py-4 px-2 pt-5 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[300px] w-64 z-40 pt-10`}
      >
        {/* Close Icon - Positioned to Right */}
        <button
          className="absolute top-4 right-4 text-gray-600 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>

        {/* Sidebar Header */}
        <div className="flex items-center">
          <TbSettings2 size={35} className="text-black" />
          <h1 className="text-3xl font-bold leading-[39px] ml-2">Dashboard</h1>
          <span className="text-[#838383] text-[10px] leading-[15px] h-[30px] flex items-end ml-2">
            v.01
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="py-4 px-3 flex flex-col gap-2">
          <li className="flex p-3 items-center gap-2 text-[#9197B3]">
            <img src={Dashboard} className="w-6 h-6" />
            <span>Dashboard</span>
          </li>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-3 gap-2 rounded-lg ${
                item.activate
                  ? "bg-[#5932EA] text-white font-semibold"
                  : "text-[#9197B3]"
              }`}
            >
              <img src={item.img} alt={item.name} className="w-6 h-6" />
              <span>{item.name}</span>
              <span className="ml-auto">
                <FaAngleRight />
              </span>
            </li>
          ))}
        </ul>

        {/* Upgrade to Pro Box */}
        <div className="px-7 hidden xl:block">
          <div className="p-4 flex flex-col gap-3 rounded-3xl items-center justify-center text-center bg-gradient-to-r from-[#EAABF0] to-[#4623E9]">
            <h1 className="px-6 font-semibold text-[14px] leading-[21px] text-white">
              Upgrade to PRO to get access to all Features!
            </h1>
            <button className="py-2 px-5 font-semibold text-[14px] leading-[21px] bg-white text-[#4925E9] rounded-full">
              Get Pro Now!
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 mt-3">
          <div className="flex items-center gap-4">
            <img src={User} alt="User" width={50} />
            <div>
              <h1 className="text-black font-normal text-[14px] leading-[21px]">
                Evano
              </h1>
              <p className="text-[#757575] font-normal text-[12px] leading-[18px]">
                Project Manager
              </p>
            </div>
            <FaAngleDown className="ml-auto text-[#757575]" />
          </div>
        </div>
      </div>

      {/* Background Overlay when Sidebar is Open on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
