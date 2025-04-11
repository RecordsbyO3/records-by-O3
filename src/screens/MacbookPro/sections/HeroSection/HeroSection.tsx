import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[958px] h-[502px] mx-auto rounded-[50px] overflow-hidden backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:linear-gradient(137deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0.04)_100%)]">
      <CardContent className="flex flex-col items-center justify-center h-full p-0">
        <h2 className="w-[382px] [font-family:'Gellix-Medium',Helvetica] font-medium text-white text-[80px] text-center tracking-[-4.80px] leading-[70.4px] mb-[30px]">
          Come work with us
        </h2>

        <Button className="px-[25px] py-5 bg-white text-black rounded-[50px] hover:bg-white/90">
          <span className="[font-family:'Gellix-Medium',Helvetica] font-medium text-xl tracking-[0] leading-5 whitespace-nowrap">
            Get Started
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
