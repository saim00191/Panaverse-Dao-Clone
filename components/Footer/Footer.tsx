import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import Logo from "@/images/panaverseLogo.png"; // Ensure the correct path for the logo
import Link from "next/link";

const Footer = () => {
  const ProgramText = [
    'Web 3.0 and Metaverse Developer',
    'Artificial Intelligence',
    'Cloud-Native Computing',
    'Ambient Computing and IoT',
    'Genomics and Bioinformatics',
    'Network Programmability and Automation'
  ];
  
  const PagesText = ['Home', 'Quarter 1', 'Quarter 2', 'Quarter 3'];

  return (
    <footer className="mt-20">
      <Wrapper>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center py-8 mt-2 ">
          <div className="w-full md:w-[55%] mb-6 md:mb-0 mx-auto ml-0 md:ml-8">
            <div className="mb-2">
              <Image src={Logo} alt="Panaverse DAO Logo" width={120} />
            </div>
            <h3 className="mt-6 text-slate-600 text-[16px] md:text-md">
              Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
            </h3>
            <div className="flex items-center space-x-4 mt-6">
              <Link href="#" className="hover:scale-105 rounded-full bg-[#00E1F0] p-2 text-white transition duration-500 text-lg">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:scale-105 rounded-full bg-[#00E1F0] p-2 text-white transition duration-500 text-lg">
                <FaYoutube />
              </Link>
              <Link href="#" className="hover:scale-105 rounded-full bg-[#00E1F0] p-2 text-white transition duration-500 text-lg">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:scale-105 rounded-full bg-[#00E1F0] p-2 text-white transition duration-500 text-lg">
                <FaGithub />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row w-full md:w-1/2 space-y-4 md:space-y-0 md:space-x-4 md:ml-20">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="font-bold text-xl">Programs</h2>
              {ProgramText.map((item) => (
                <p key={item} className="mt-2 hover:text-teal-700 cursor-pointer text-slate-600">
                  {item}
                </p>
              ))}
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-xl">Pages</h2>
              {PagesText.map((item) => (
                <p key={item} className="mt-2 hover:text-teal-700 cursor-pointer text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
