import ProgramOutcomeImage from "@/images/outcome-poster.webp";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import React from "react";

const ProgramOutCome = () => {
  const outComePoints = [
    "Product Ownership",
    "Freelancing",
    "Global Marketing",
    "Boosting Economy",
  ];

  return (
    <section className="mt-12">
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row gap-x-8 px-2">
          <div className="flex-1 mt-12 md:mt-0">
            <Image 
              src={ProgramOutcomeImage} 
              alt="Program Outcome Image" 
              layout="responsive" 
              width={500} 
              height={500} 
            />
          </div>
          <div className="flex-1 mt-12">
            <h3 className="font-bold text-[28px] md:text-[35px]">
              The Outcome for Participants of the Program
            </h3>
            <h5 className="mt-3 font-semibold text-slate-600">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan&apos;s software exports.
            </h5>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
              {outComePoints.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-x-4">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z"
                        fill="url(#paint0_radial_1_48)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z"
                        fill="white"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_48"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)"
                        >
                          <stop offset="0.125" stopColor="#00E1F0" />
                          <stop offset="1" stopColor="#00616C" />
                        </radialGradient>
                      </defs>
                    </svg>

                    <h3 className="font-medium text-lg whitespace-normal break-words">{item}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutCome;
