import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1044px] items-center gap-[30px] mx-auto py-16" id="about">
      <Badge className="rounded-[50px] px-2.5 py-2.5 [background:conic-gradient(from_180deg_at_56%_62%,rgba(140,179,255,1)_6%,rgba(42,109,239,1)_43%)] border-0">
        <span className="[font-family:'Gellix-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[14px]">
          About Records by 03
        </span>
      </Badge>

      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="[font-family:'Etude_Noire-Medium',Helvetica] font-medium text-white text-[50px] text-center tracking-[-1.00px] leading-[60.0px]">
          Empowering Institutions and Individuals Through Technology.
        </h2>

        <p className="max-w-[699px] [font-family:'Gellix-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0.70px] leading-[21px]">
          COMBINING THE POWER OF BLOCKCHAIN AND DECENTRALIZED STORAGE, WE&#39;RE
          REIMAGINING CREDENTIAL MANAGEMENT FOR A DIGITAL WORLD—WHERE
          TRANSPARENCY, OWNERSHIP, AND TRUST ARE NOT JUST PROMISES, BUT BUILT-IN
          FEATURES.
        </p>
      </div>
    </section>
  );
};
