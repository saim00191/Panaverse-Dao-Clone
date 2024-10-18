import { QuarterBoxesProps } from "@/types/types"
import { FC } from "react"



const QuarterBoxes :FC <QuarterBoxesProps> = ({name , description , number , haveBorder = true}) => {
  return (
    <div className={`${haveBorder && "border-[3px] px-8 py-12"} border-gray-400 rounded-md w-full relative`}>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="mt-2 text-gray-500">
     {description}
    </p>
      <div className={`absolute ${haveBorder ? "top-10 right-[50px]" : "-top-2 right-[45px]"} -z-10 text-9xl text-gray-300 font-bold`}>
      {number}
    </div>
  </div>
  )
}

export default QuarterBoxes

// /top-10 right-[50px]