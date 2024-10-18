import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import HeroPosterImage from "../../images/PanaversePoster.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="py-8">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1 md:mr-8 mb-6 md:mb-0">
            <h4 className="text-teal-800 text-lg mb-2 text-center md:text-left">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl font-bold leading-tight">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-2 text-slate-600 text-lg text-center md:text-left">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready For the Next Generation of the Internet
            </p>
            <p className="mt-4 text-slate-600 text-lg text-center md:text-left">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div>
              <Link href='https://www.piaic.org/' target="_blank">
      <button className="bg-[#00616c] font-semibold hover:scale-105 duration-500 rounded-full text-white p-4 w-full lg:w-[30%] shadow-lg mt-4 hover:bg-teal-700">
        Learn More
      </button>
              </Link>
    </div>
          </div>
          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src={HeroPosterImage}
              alt="Hero Poster Image"
              className="object-cover rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
