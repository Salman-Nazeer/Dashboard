// import { TbSettings2 } from "react-icons/tb";
// import { FaAngleRight } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
// import Dashboard from "../assets/key-square.svg";
// import Products from "../assets/3d-square1.svg";
// import Customers from "../assets/user-square1.svg";
// import Income from "../assets/wallet-money2.svg";
// import Promote from "../assets/discount-shape1.svg";
// import Help from "../assets/message-question1.svg";
// import User from "../assets/Ellipse8.svg";

// export default function Sidebar() {
//   const menuItems = [
//     { name: "Products", img: Products, activate: false },
//     { name: "Customers", img: Customers, activate: true },
//     { name: "Income", img: Income, activate: false },
//     { name: "Promote", img: Promote, activate: false },
//     { name: "Help", img: Help, activate: false },
//   ];

//   return (
//     <div className="w-[300px] h-full bg-[#FFFFFF] text[#000000] py-4 px-2 pt-5 shadow-[0px_10px_60px_0px_#E2ECF980]">
//       <div className="flex items-center">
//         <div className="text-[#000000] font-bold py-2 px-3 rounded">
//           <TbSettings2 size={35} />
//         </div>
//         <h1 className="text-3xl font-bold leading-[39px]">Dashboard</h1>
//         <span className="text-[#838383] flex font-normal text-[10px] leading-[15px] h-[30px] items-end ms-2">
//           v.01
//         </span>
//       </div>

//       <div className="">
//         <ul className="py-4 px-3 flex flex-col gap-2">
//           <li className="flex p-3 items-center gap-2 text-[#9197B3]">
//             <img src={Dashboard} className="w-6 h-6" />
//             <span>Dashboard</span>
//           </li>
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center p-3 gap-2 rounded-lg ${
//                 item.activate
//                   ? "bg-[#5932EA] text-[#FFFFFF] font-semibold"
//                   : "text-[#9197B3]"
//               }`}
//             >
//               <img src={item.img} alt={item.name} className="w-6 h-6" />
//               <span>{item.name}</span>
//               <span className="ml-auto">
//                 <FaAngleRight />
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="px-7">
//         <div className="p-4 flex flex-col gap-3 rounded-3xl items-center justify-center text-center bg-custom-gradient">
//           <h1 className="px-6 font-semibold text-[14px] leading-[21px] text-[#FFFFFF]">
//             Upgrade to PRO to get access all Features!
//           </h1>
//           <button className="py-2 px-5 font-semibold text-[14px] leading-[21px] bg-[#FFFFFF] text-[#4925E9] rounded-full">
//             Get Pro Now!
//           </button>
//         </div>
//       </div>

//       <div className="p-4 mt-3">
//         <div className="flex items-center gap-4">
//           <img src={User} alt="" width={50}/>
//           <div className=" ">
//             <h1 className="text-black font-normal text-[14px] leading-[21px]">Evano</h1>
//             <p className="text-[#757575] font-normal text-[12px] leading-[18px]">Project Manager</p>
//           </div>
//           <FaAngleDown className="ml-auto text-[#757575]" size={0}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// BY Active
import { TbSettings2 } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Dashboard from "../assets/key-square.svg";
import Products from "../assets/3d-square1.svg";
import Customers from "../assets/user-square1.svg";
import Income from "../assets/wallet-money2.svg";
import Promote from "../assets/discount-shape1.svg";
import Help from "../assets/message-question1.svg";
import User from "../assets/Ellipse8.svg";

export default function Sidebar() {
  const menuItems = [
    { name: "Products", img: Products, activate: false },
    { name: "Customers", img: Customers, activate: true },
    { name: "Income", img: Income, activate: false },
    { name: "Promote", img: Promote, activate: false },
    { name: "Help", img: Help, activate: false },
  ];

  return (
    <div className="w-full lg:w-[300px] h-full bg-[#FFFFFF] text[#000000] py-4 px-2 pt-5 shadow-[0px_10px_60px_0px_#E2ECF980]">
      <div className="flex items-center">
        <div className="text-[#000000] font-bold py-2 px-3 rounded">
          <TbSettings2 size={35} />
        </div>
        <h1 className="text-3xl font-bold leading-[39px]">Dashboard</h1>
        <span className="text-[#838383] flex font-normal text-[10px] leading-[15px] h-[30px] items-end ms-2">
          v.01
        </span>
      </div>

      <div className="">
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
                  ? "bg-[#5932EA] text-[#FFFFFF] font-semibold"
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
      </div>

      <div className="px-7">
        <div className="p-4 flex flex-col gap-3 rounded-3xl items-center justify-center text-center bg-custom-gradient">
          <h1 className="px-6 font-semibold text-[14px] leading-[21px] text-[#FFFFFF]">
            Upgrade to PRO to get access all Features!
          </h1>
          <button className="py-2 px-5 font-semibold text-[14px] leading-[21px] bg-[#FFFFFF] text-[#4925E9] rounded-full">
            Get Pro Now!
          </button>
        </div>
      </div>

      <div className="p-4 mt-3">
        <div className="flex items-center gap-4">
          <img src={User} alt="" width={50} />
          <div className=" ">
            <h1 className="text-black font-normal text-[14px] leading-[21px]">
              Evano
            </h1>
            <p className="text-[#757575] font-normal text-[12px] leading-[18px]">
              Project Manager
            </p>
          </div>
          <FaAngleDown className="ml-auto text-[#757575]" size={0} />
        </div>
      </div>
    </div>
  );
}
