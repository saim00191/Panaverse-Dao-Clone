'use client';
import Image from "next/image";
import Logo from "../../images/panaverseLogo.png";
import Wrapper from "@/shared/Wrapper";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const ProgramText = [
    'Web 3.0 and Metaverse Developer',
    'Artificial Intelligence',
    'Cloud-Native Computing',
    'Ambient Computing and IoT',
    'Genomics and Bioinformatics',
    'Network Programmability and Automation'
  ];

  return (
    <Wrapper>
      <main className="flex justify-between items-center py-6 mx-auto max-w-screen-xl sticky top-0 z-10">
        {/* Panaverse Image */}
        <Image
          src={Logo}
          alt="Panaverse Dao Logo"
          width={100}
          height={40}
        />
        {/* Navbar Links */}
        <ul className="flex space-x-6 relative">
          <li className="cursor-pointer font-semibold hover:text-teal-600 transition duration-200">
            Home
          </li>
          <li
            onMouseEnter={() => setIsOpen(true)}
            className="cursor-pointer font-semibold flex hover:text-teal-600 transition duration-200 relative"
          >
            Courses 
            <span>
              <RiArrowDropDownLine className="text-[23px] font-semibold mt-0.5" />
            </span>
            {isOpen && (
              <div
                onMouseLeave={() => setIsOpen(false)} // Close dropdown when leaving the dropdown
                className="absolute -left-60 border-gray-500 mt-12 w-[350px] transition-all duration-500 ease-in-out  bg-white shadow-lg p-2 rounded z-10"
              >
                {ProgramText.map((item, i) => (
                  <p key={i} className="cursor-pointer font-medium hover:bg-gray-200 px-3 py-2 text-slate-600 transition duration-200 whitespace-nowrap">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </li>
        </ul>
      </main>
    </Wrapper>
  );
}
