import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const PartneringSection = (): JSX.Element => {
  // Partner types data for mapping
  const partnerTypes = [
    "Universities and Polytechnics",
    "Government Education Boards",
    "Employers and Recruitment Platforms",
    "EdTech Apps and Platforms",
  ];

  return (
    <section className="relative w-full h-[657px] rounded-[50px] overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex flex-col p-14 space-y-10 w-full md:w-1/2">
          <h2 className="text-6xl font-medium text-white leading-[60px] [font-family:'Gellix-Medium',Helvetica]">
            Who we work with
          </h2>

          <div className="mt-6">
            <ul className="text-xl font-medium text-white leading-[30px] [font-family:'Gellix-Medium',Helvetica]">
              {partnerTypes.map((partner, index) => (
                <li key={index}>{partner}</li>
              ))}
            </ul>
          </div>

          <Button className="mt-10 rounded-[50px] bg-white text-black px-[25px] py-5 w-fit">
            <span className="text-xl font-medium [font-family:'Gellix-Medium',Helvetica] leading-5">
              Get Started
            </span>
          </Button>
        </div>

        {/* Right content with gradient background */}
        <Card className="w-full md:w-1/2 h-[627px] my-4 rounded-[50px] overflow-hidden backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,66,193,0.82)_0%,rgba(0,0,0,0)_100%)]">
          <div className="flex items-center justify-center h-full">
            <img
              className="w-full h-auto min-h-[500px] md:h-[322px] object-contain px-4"
              alt="Group"
              src="/group-61.png"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
