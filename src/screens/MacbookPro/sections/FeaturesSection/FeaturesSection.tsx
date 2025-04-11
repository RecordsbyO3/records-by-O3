import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[848px] items-center gap-[30px] mx-auto py-16">
      <Badge className="rounded-[50px] px-2.5 py-2.5 [background:conic-gradient(from_180deg_at_56%_62%,rgba(140,179,255,1)_6%,rgba(42,109,239,1)_43%)]">
        <span className="[font-family:'Gellix-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[14px]">
          FAQS
        </span>
      </Badge>

      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="[font-family:'Etude_Noire-Medium',Helvetica] font-medium text-white text-[50px] text-center tracking-[-1.00px] leading-[60.0px]">
          Partnering for a Trustless, Tamper-Proof Future
        </h2>

        <p className="max-w-[699px] [font-family:'Gellix-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0.70px] leading-[21px]">
          PARTNERING WITH US MEANS JOINING A TRUSTED NETWORK THAT PUTS DATA
          INTEGRITY, OWNERSHIP, AND INNOVATION AT THE CENTER OF CREDENTIAL
          MANAGEMENT.
        </p>
      </div>
    </section>
  );
};
