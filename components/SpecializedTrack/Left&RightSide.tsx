"use client";

import Image from "next/image";
import MetaverseImage from "@/images/metaverse.webp";
import AiImage from "@/images/ai.webp";
import CloudComputingImage from "@/images/cloud.webp";
import AmbientComputingImage from "@/images/ambient.webp";
import GenomicsImage from "@/images/genomics.webp";
import NetworkImage from "@/images/network.webp";
import { useState } from "react";
import QuarterBoxes from "../QuaterBoxes/QuarterBoxes";

const Left_RightSide = () => {
  const [selectedItem, setSelectedItem] = useState<string>("wmd");

  const ProgramsData = [
    {
      slug: "wmd",
      header: "Web 3.0 (Blockchain) and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      image: MetaverseImage,
      quarters: [
        { name: "Quarter IV", description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps", number: 4 },
        { name: "Quarter V", description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences", number: 5 },
      ],
    },
    {
      slug: "ai",
      header: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: AiImage,
      quarters: [
        { name: "Quarter IV", description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming", number: 4 },
        { name: "Quarter V", description: "AI-361: Deep Learning and MLOps", number: 5 },
      ],
    },
    {
      slug: "cnc",
      header: "Cloud-Native Computing Specialization",
      description:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      image: CloudComputingImage,
      quarters: [
        { name: "Quarter IV", description: "CN-351: Certified Kubernetes Application Developer (CKAD)", number: 4 },
        { name: "Quarter V", description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform", number: 5 },
      ],
    },
    {
      slug: "ac",
      header: "Ambient Computing and IoT Specialization",
      description:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      image: AmbientComputingImage,
      quarters: [
        { name: "Quarter IV", description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices", number: 4 },
        { name: "Quarter V", description: "AC-361: Embedded Programming using C and Rust", number: 5 },
      ],
    },
    {
      slug: "gbs",
      header: "Genomics and Bioinformatics Specialization",
      description:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      image: GenomicsImage,
      quarters: [
        { name: "Quarter IV", description: "Bio-351: Python for Biologists", number: 4 },
        { name: "Quarter V", description: "Bio-361: Bioinformatics with Python", number: 5 },
      ],
    },
    {
      slug: "npas",
      header: "Network Programmability and Automation Specialization",
      description:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      image: NetworkImage,
      quarters: [
        { name: "Quarter IV", description: "NPA-351: CCNA 200-301 Certification", number: 4 },
        { name: "Quarter V", description: "NPA-361: Network Programmability and Automation", number: 5 },
      ],
    },
  ];

  const selectedItemData = ProgramsData.find((item) => item.slug === selectedItem);
  
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="p-6 h-[500px] md:sticky md:top-0 md:h-[650px] lg:h-[500px] md:p-8 basis-8/12 border-2 border-slate-200 shadow-xl rounded-xl">
        <h4 className="text-teal-800 text-lg">Specialized Program</h4>
        <h2 className="font-bold text-2xl mt-2 whitespace-pre-line leading-normal">
          {selectedItemData?.header}
        </h2>
        <p className="mt-2 text-slate-600">{selectedItemData?.description}</p>
        <button className="hover:scale-105 duration-500 text-teal-700 mt-4 text-xl underline flex gap-x-1 items-center">
          Learn More{" "}
          <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
          </svg>
        </button>
        <div className="flex flex-col gap-6 py-8 space-y-10 md:space-y-0 md:py-12 md:flex-row">
          {selectedItemData?.quarters.map((item) => (
            <QuarterBoxes
              key={item.number}
              name={item.name}
              description={item.description}
              number={item.number}
              haveBorder={false}
            />
          ))}
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-slate-50 px-4 py-6 basis-4/12 space-y-6">
        {ProgramsData.map((item) => (
          <div
            key={item.slug}
            onClick={() => setSelectedItem(item.slug)}
            className="flex gap-3 items-start cursor-pointer w-full hover:bg-slate-100 p-2 rounded-md transition duration-300"
          >
            <div className="flex-shrink-0 w-36 h-24 hover:scale-105 duration-500">
              <Image
                src={item.image}
                alt={item.header}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-teal-700 font-medium mb-1 text-sm">Specialized Track</h4>
              <h3 className="text-md font-semibold leading-tight">{item.header}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left_RightSide;
