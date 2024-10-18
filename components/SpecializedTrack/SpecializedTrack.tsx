import React from "react";
import Wrapper from "@/shared/Wrapper";
import Left_RightSide from "./Left&RightSide";

const SpecializedTrack = () => {

  return (
    <Wrapper>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-screen-sm">
          <h2 className="text-3xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            After completing the first three quarters, participants will select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Left_RightSide/>
        </div>
      </div>
    </Wrapper>
  );
};


export default SpecializedTrack;
