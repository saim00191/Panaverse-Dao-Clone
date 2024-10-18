
import Wrapper from "@/shared/Wrapper";
import React from "react";
import Boxes from "./Boxes";
import Link from "next/link";

export default function CoreTracks() {
  const header = "Core Courses \n (Common in All Specializations):";

  return (
    <section className="mt-16 lg:mt-24 px-4">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h3 className="text-teal-800 text-lg mb-2">Program of Studies</h3>
          <h2 className="text-3xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-2 text-slate-600 text-base md:text-lg">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <Link href='https://portal.piaic.org/signup' target="_blank">
          <button className="bg-[#00616c] font-semibold hover:scale-105 duration-500 rounded-full text-white p-4 w-full lg:w-[30%] shadow-lg mt-4 hover:bg-teal-700">
            Enroll Now
            </button>
          </Link>
        </div>
        <div className="mt-8">
          <Boxes />
        </div>
      </Wrapper>
    </section>
  );
}
