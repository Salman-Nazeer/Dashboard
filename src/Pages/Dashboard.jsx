// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { GoPeople } from "react-icons/go";
// import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
// import { LuUserRoundCheck } from "react-icons/lu";
// import { CgScreen } from "react-icons/cg";
// import { FaChevronDown } from "react-icons/fa";
// import Input from "../Components/ui/input.jsx";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from "../Components/ui/table.jsx";
// import Badge from "../Components/ui/badge.jsx";
// import Sidebar from "../Components/Sidebar.jsx";

// export default function Dashboard() {
//   const [search, setSearch] = useState("");

//   const [selected, setSelected] = useState("Sort by");
//   const [isOpen, setIsOpen] = useState(false);

//   const options = ["Newest", "Oldest"];

//   const customers = [
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Floyd Miles",
//       company: "Yahoo",
//       phone: "(205) 555-0100",
//       email: "floyd@yahoo.com",
//       country: "Kiribati",
//       status: "Inactive",
//     },
//     {
//       name: "Ronald Richards",
//       company: "Adobe",
//       phone: "(302) 555-0107",
//       email: "ronald@adobe.com",
//       country: "Israel",
//       status: "Inactive",
//     },
//     {
//       name: "Marvin McKinney",
//       company: "Google",
//       phone: "(225) 555-0186",
//       email: "marvin@google.com",
//       country: "Iran",
//       status: "Active",
//     },
//     {
//       name: "Jerome Bell",
//       company: "Google",
//       phone: "(629) 555-0126",
//       email: "jerome@google.com",
//       country: "Reunion",
//       status: "Active",
//     },
//     {
//       name: "Kathryn Murphy",
//       company: "Microsoft",
//       phone: "(406) 555-0120",
//       email: "kathryn@microsoft.com",
//       country: "Curacao",
//       status: "Active",
//     },
//     {
//       name: "Jacob Jones",
//       company: "Yahoo",
//       phone: "(208) 555-0112",
//       email: "jacob@yahoo.com",
//       country: "Brazil",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 p-10">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-semibold">Hello Evano 👋</h1>
//           <div className="flex items-center justify-between bg-gray-100 px-2 rounded-lg">
//             <CiSearch size={30} className="text-gray-500" />
//             <Input
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="bg-transparent-0 w-full ml-2"
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-between px-6 py-8 bg-[#F0F0F0] mt-5 rounded-4xl">
//           <div className="flex gap-3  items-center">
//             <span className="bg-[#EFFFF6] p-2  rounded-full text-[#52dc8e]">
//               <GoPeople size={60} />
//             </span>
//             <div className="flex flex-col gap-1">
//               <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
//                 Total Customers
//               </p>
//               <h1 className="text-[#333333] font-semibold text-[32px] leading-[32px]">
//                 5,423
//               </h1>
//               <p className="flex items-center gap-1 text-[#292D32] font-normal text-[12px] leading-[18px]">
//                 <span className="text-[#00AC4F]">
//                   <IoMdArrowUp size={18} />
//                 </span>
//                 <span className="text-[#00AC4F] font-bold text-[12px] leading-[18px]">
//                   {" "}
//                   16%
//                 </span>{" "}
//                 this month
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3  items-center">
//             <span className="bg-[#EFFFF6] p-2  rounded-full text-[#52dc8e]">
//               <LuUserRoundCheck size={60} />
//             </span>
//             <div className="flex flex-col gap-1">
//               <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
//                 Members
//               </p>
//               <h1 className="text-[#333333] font-semibold text-[32px] leading-[32px]">
//                 1,893
//               </h1>
//               <p className="flex items-center gap-1 text-[#292D32] font-normal text-[12px] leading-[18px]">
//                 <span className="text-[#D0004B]">
//                   <IoMdArrowDown size={18} />
//                 </span>
//                 <span className="text-[#D0004B] font-bold text-[12px] leading-[18px]">
//                   {" "}
//                   1%
//                 </span>{" "}
//                 this month
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3  items-center">
//             <span className="bg-[#EFFFF6] p-2  rounded-full text-[#52dc8e]">
//               <CgScreen size={60} />
//             </span>
//             <div className="flex flex-col gap-1">
//               <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
//                 Active Now
//               </p>
//               <h1 className="text-[#333333] font-semibold text-[32px] leading-[32px]">
//                 189
//               </h1>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 mt-3 rounded-lg h-[56vh] overflow-hidden shadow">
//           <div className="flex justify-between mb-4">
//             <h2 className="text-2xl font-semibold">All Customers</h2>
//             <div className="flex items-center justify-between bg-gray-100 px-2 rounded-lg">
//               <CiSearch size={25} className="text-gray-500" />
//               <Input
//                 placeholder="Search..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="bg-transparent-0 w-full ml-2 overflow-hidden"
//               />
//             </div>

//             <div className="relative w-48">
//               {/* Dropdown Button */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition"
//               >
//                 {selected}
//                 <FaChevronDown
//                   className={`text-gray-500 transition ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Dropdown Menu */}
//               {isOpen && (
//                 <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-10">
//                   {options.map((option, index) => (
//                     <li
//                       key={index}
//                       onClick={() => {
//                         setSelected(option);
//                         setIsOpen(false);
//                       }}
//                       className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition"
//                     >
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>

//           {/* Table Section */}
//           <div className="overflow-y-auto max-h-[calc(56vh_-_80px)] scrollable-table">
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Company</TableCell>
//                   <TableCell>Phone</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Country</TableCell>
//                   <TableCell>Status</TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {customers
//                   .filter((c) =>
//                     c.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((customer, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{customer.name}</TableCell>
//                       <TableCell>{customer.company}</TableCell>
//                       <TableCell>{customer.phone}</TableCell>
//                       <TableCell>{customer.email}</TableCell>
//                       <TableCell>{customer.country}</TableCell>
//                       <TableCell>
//                         <Badge
//                           className={
//                             customer.status === "Active"
//                               ? "bg-green-500"
//                               : "bg-red-500"
//                           }
//                         >
//                           {customer.status}
//                         </Badge>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//BY Active

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import { LuUserRoundCheck } from "react-icons/lu";
import { CgScreen } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import Input from "../Components/ui/input.jsx";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "../Components/ui/table.jsx";
import Badge from "../Components/ui/badge.jsx";
import Sidebar from "../Components/Sidebar.jsx";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState("Sort by");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Newest", "Oldest"];

  const customers = [
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Google",
      phone: "(225) 555-0186",
      email: "marvin@google.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0126",
      email: "jerome@google.com",
      country: "Reunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curacao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 lg:p-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Greeting */}
          <h1 className="text-3xl font-semibold text-center lg:text-left">
            Hello Evano 👋
          </h1>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-full lg:w-auto">
            <CiSearch size={24} className="text-gray-500" />
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full ml-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-6 bg-[#F0F0F0] mt-5 p-4 lg:p-8 rounded-4xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Customers */}
          <div className="flex gap-3 items-center">
            <span className="bg-[#EFFFF6] p-2 rounded-full text-[#52dc8e]">
              <GoPeople size={50} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
                Total Customers
              </p>
              <h1 className="text-[#333333] font-semibold text-[28px] lg:text-[32px] leading-[32px]">
                5,423
              </h1>
              <p className="flex items-center gap-1 text-[#292D32] font-normal text-[12px] leading-[18px]">
                <span className="text-[#00AC4F]">
                  <IoMdArrowUp size={16} />
                </span>
                <span className="text-[#00AC4F] font-bold text-[12px] leading-[18px]">
                  16%
                </span>{" "}
                this month
              </p>
            </div>
          </div>

          {/* Members */}
          <div className="flex gap-3 items-center">
            <span className="bg-[#EFFFF6] p-2 rounded-full text-[#52dc8e]">
              <LuUserRoundCheck size={50} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
                Members
              </p>
              <h1 className="text-[#333333] font-semibold text-[28px] lg:text-[32px] leading-[32px]">
                1,893
              </h1>
              <p className="flex items-center gap-1 text-[#292D32] font-normal text-[12px] leading-[18px]">
                <span className="text-[#D0004B]">
                  <IoMdArrowDown size={16} />
                </span>
                <span className="text-[#D0004B] font-bold text-[12px] leading-[18px]">
                  1%
                </span>{" "}
                this month
              </p>
            </div>
          </div>

          {/* Active Now */}
          <div className="flex gap-3 items-center">
            <span className="bg-[#EFFFF6] p-2 rounded-full text-[#52dc8e]">
              <CgScreen size={50} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[#ACACAC] font-normal text-[14px] leading-[21px]">
                Active Now
              </p>
              <h1 className="text-[#333333] font-semibold text-[28px] lg:text-[32px] leading-[32px]">
                189
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 sm:p-4 mt-3 rounded-lg min-h-[400px] lg:h-[56vh] overflow-hidden shadow">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
            {/* Header Section */}
            <h2 className="text-xl sm:text-2xl font-semibold">All Customers</h2>

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 px-2 py-1 sm:py-2 rounded-lg flex-grow md:flex-grow-0 md:w-[300px] lg:w-[400px] mx-2">
              <CiSearch
                size={20}
                className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
              />
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent w-full ml-2 text-sm sm:text-base"
              />
            </div>

            {/* Dropdown */}
            <div className="relative w-full md:w-48">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center bg-gray-100 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-200 transition"
              >
                {selected}
                <FaChevronDown
                  className={`text-gray-500 transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="absolute left-0 right-0 md:left-auto mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-10">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 cursor-pointer transition"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh_-_320px)] lg:max-h-[calc(56vh_-_80px)] scrollable-table">
            <Table className="min-w-[800px] md:min-w-full">
              <TableHead>
                <TableRow>
                  <TableCell className="text-sm sm:text-base">Name</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Company
                  </TableCell>
                  <TableCell className="hidden md:table-cell">Phone</TableCell>
                  <TableCell className="text-sm sm:text-base">Email</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    Country
                  </TableCell>
                  <TableCell className="text-sm sm:text-base">Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {customers
                  .filter((c) =>
                    c.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((customer, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-sm sm:text-base">
                        {customer.name}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {customer.company}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {customer.phone}
                      </TableCell>
                      <TableCell className="text-sm sm:text-base break-all">
                        {customer.email}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {customer.country}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`text-xs sm:text-sm ${
                            customer.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
