import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhoWeWorkWithSection = (): JSX.Element => {
  const sections = [
    {
      title: "Who we are",
      content:
        "Records by O3 is a blockchain-powered platform dedicated to transforming the way educational credentials are stored, issued, and verified. We believe in a future where trust is digital, and credentials are truly owned by the individual.",
    },
    {
      title: "Mission",
      content:
        "To democratize access to verifiable education credentials across Africa and the world through secure, decentralized technology.",
    },
    {
      title: "Vision",
      content:
        "To be the global standard for academic record issuance and verification.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] mx-auto">
      <Card className="flex-1 bg-transparent border-none">
        <CardContent className="p-0">
          <div className="w-full aspect-square bg-[rgba(255,255,255,0.05)] rounded-[32px] overflow-hidden">
            {/* Placeholder for the left image/content */}
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="[font-family:'Gellix-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-tight">
              {section.title}
            </h2>
            <p className="[font-family:'Gellix-Regular',Helvetica] font-normal text-white/80 text-base tracking-[0.5px] leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};