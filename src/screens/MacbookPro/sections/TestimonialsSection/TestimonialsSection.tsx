import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {/* Background glow effect */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-468px] bg-[#2b71f8ad] w-full md:w-[1428px] h-[1015px] rounded-[714px/507.5px] blur-[250px]" />

        {/* Main content */}
        <div className="relative w-full md:w-[1074px] mx-auto mt-32 md:mt-48 px-4 md:px-0">
          <h1 className="[font-family:'Etude_Noire-Medium',Helvetica] font-medium text-white text-4xl md:text-[80px] text-center tracking-[-1.60px] leading-tight md:leading-[80px]">
            Revolutionizing Academic Records with Blockchain Technology
          </h1>

          <p className="w-full md:w-[699px] mx-auto mt-6 md:mt-[35px] [font-family:'Gellix-Regular',Helvetica] font-normal text-white text-sm md:text-base text-center tracking-[0.70px] leading-[21px]">
            RECORDS BY O3 ENABLES EDUCATIONAL INSTITUTIONS TO ISSUE
            TAMPER-PROOF, VERIFIABLE DIGITAL CREDENTIALS USING BLOCKCHAIN AND
            DECENTRALIZED STORAGE.
          </p>
        </div>

        {/* Background image */}
        <div className="relative w-full h-[400px] md:h-[748px] mt-8 md:mt-12">
          <img
            className="w-full h-full object-cover"
            alt="Mask group"
            src="/mask-group-4.png"
          />

          {/* CTA Buttons */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 px-4">
            <button className="w-full md:w-auto px-[25px] py-5 bg-white text-black rounded-[50px] hover:bg-white/90">
              <span className="[font-family:'Gellix-Medium',Helvetica] font-medium text-xl leading-5">
                Join the waitlist
              </span>
            </button>

            <button
              className="w-full md:w-auto px-[25px] py-5 text-white rounded-[50px] hover:bg-white/10 border border-white/20"
            >
              <span className="[font-family:'Gellix-Medium',Helvetica] font-medium text-xl leading-5">
                How it works
              </span>
            </button>
          </div>
        </div>

        {/* Decorative icons - Hidden on mobile */}
        <div className="hidden md:block">
          <img
            className="absolute w-[90px] h-[90px] top-[200px] left-[317px] object-cover"
            alt="Folder dynamic color"
            src="/folder-dynamic-color.png"
          />

          <img
            className="absolute w-[73px] h-[73px] top-[-50px] left-[719px] object-cover"
            alt="Sheild dynamic color"
            src="/sheild-dynamic-color.png"
          />

          <img
            className="absolute w-[77px] h-[77px] top-[200px] left-[1138px] object-cover"
            alt="Lock dynamic color"
            src="/lock-dynamic-color.png"
          />
        </div>
      </div>
    </section>
  );
};