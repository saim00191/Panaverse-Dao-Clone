import QuarterBoxes from "../QuaterBoxes/QuarterBoxes";

const quarters = [
  {
    name: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    name: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and CDK for Terraform",
    number: 2,
  },
  {
    name: "Quarter III",
    description: "W2-202: Building Serverless Microservices with AWS Lambda and API Gateway using TypeScript and DynamoDB",
    number: 3,
  },
];

function Boxes() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 my-20">
      {quarters.map((quarter) => (
        <QuarterBoxes
          key={quarter.number}
          name={quarter.name}
          description={quarter.description}
          number={quarter.number}
        />
      ))}
    </div>
  );
}

export default Boxes;
