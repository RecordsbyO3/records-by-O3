import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const WhatMakesUsDifferentSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Secure & Immutable Records",
      description:
        "All academic credentials are securely stored on the blockchain, ensuring they are tamper-proof and verifiable.",
      image: "/padlock.png",
    },
    {
      id: 2,
      title: "Instant Credential Verification",
      description:
        "Quickly and easily verify educational credentials with zero delays.",
      image: "/lightning-file.png",
    },
    {
      id: 3,
      title: "Decentralized Storage",
      description:
        "All academic credentials are securely stored on the blockchain, ensuring they are tamper-proof and verifiable.",
      image: "/key.png",
    },
    {
      id: 4,
      title: "Built on Blockchain",
      description:
        "All academic credentials are securely stored on the blockchain, ensuring they are tamper-proof and verifiable.",
      image: "/chain.png",
    },
  ];

  return (
    <section className="w-full py-8 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 gap-6">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-[32px] overflow-hidden min-h-[500px] md:h-[400px]">
              <CardContent className="p-0 h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="flex-1 p-6 md:p-12 flex flex-col justify-center bg-white">
                    <h3 className="text-2xl md:text-[32px] font-medium mb-3 md:mb-4 [font-family:'Gellix-Medium',Helvetica]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 [font-family:'Gellix-Regular',Helvetica] max-w-[90%] md:max-w-[80%]">
                      {feature.description}
                    </p>
                    <a href="#" className="bg-black text-white rounded-full px-6 md:px-8 py-2.5 md:py-3 hover:bg-gray-800 w-[130px] md:w-[150px] text-center text-sm md:text-base">
                      Get Started
                    </a>
                  </div>
                  <div className="w-full h-[300px] md:w-1/2 md:h-full bg-[#000000]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};