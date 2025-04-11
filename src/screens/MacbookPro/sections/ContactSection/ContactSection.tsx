import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  const cards = [
    {
      id: 1,
      title: "FOR INSTITUTIONS",
      subtitle: "SECURE AND IMMUTABLE ACADEMIC RECORDS",
      backgroundImage: "/mask-group-1.png",
      content: (
        <div className="relative w-full h-[397px] mt-16">
          <div className="relative h-[375px]">
            <img
              className="absolute w-[373px] h-[375px] top-0 left-0"
              alt="Rectangle"
              src="/rectangle-179.svg"
            />

            <img
              className="absolute w-[155px] h-[313px] top-0 left-[330px]"
              alt="Rectangle"
              src="/rectangle-180.svg"
            />

            <img
              className="absolute w-[231px] h-[155px] top-[25px] left-[88px]"
              alt="Group"
              src="/group-47.png"
            />

            <img
              className="absolute w-[231px] h-[157px] top-[76px] left-[88px]"
              alt="Group"
              src="/group-48.png"
            />

            <img
              className="absolute w-[232px] h-[158px] top-[126px] left-[88px]"
              alt="Group"
              src="/group-49.png"
            />

            <img
              className="absolute w-[230px] h-[117px] top-[183px] left-[88px]"
              alt="Group"
              src="/group-50.png"
            />

            <img
              className="absolute w-[230px] h-[63px] top-[237px] left-[88px]"
              alt="Group"
              src="/group-51.png"
            />

            <div className="flex flex-col w-[138px] h-[291px] items-start gap-3 absolute top-[17px] left-[338px]">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="relative w-[138px] h-[26px]">
                    <div className="absolute w-10 h-[26px] top-0 left-0 bg-[#6b6b6b]" />
                    <div className="absolute w-10 h-[26px] top-0 left-[49px] bg-[#6b6b6b]" />
                    <div className="absolute w-10 h-[26px] top-0 left-[98px] bg-[#6b6b6b]" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "FOR STUDENTS",
      subtitle: "TAKE OWNERSHIP OF YOUR EDUCATION",
      backgroundImage: "/mask-group-2.png",
      content: (
        <div className="relative w-full h-[236px] mt-[171px]">
          <img
            className="absolute w-[476px] h-[145px] top-[90px] left-6"
            alt="Vector"
            src="/vector-29.svg"
          />

          <div className="absolute w-[228px] h-[101px] top-[135px] left-36 bg-[#060606]" />

          <img
            className="absolute w-[501px] h-[194px] top-0 left-0"
            alt="Rectangle"
            src="/rectangle-181.svg"
          />

          <img
            className="absolute w-[31px] h-[106px] top-[87px] left-[470px]"
            alt="Union"
            src="/union.svg"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "FOR VERIFIERS",
      subtitle: "VERIFY WITH CONFIDENCE",
      backgroundImage: "/mask-group-3.png",
      content: null,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-[21px] py-8 md:py-12 w-full px-4 md:px-6">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="relative w-full md:w-[457px] min-h-[400px] md:h-[457px] rounded-[25px] overflow-hidden backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]"
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent className="p-0">
            <div className="text-center mt-8 md:mt-[50px] [font-family:'Gellix-SemiBold',Helvetica] font-semibold text-white text-lg md:text-xl tracking-[1.00px] leading-[30px] px-4">
              {card.title}
            </div>

            <div className="text-center mt-3 md:mt-[14px] [font-family:'Gellix-Regular',Helvetica] font-normal text-white text-sm md:text-base tracking-[0.80px] leading-6 px-4">
              {card.subtitle}
            </div>

            <div className="scale-90 md:scale-100">
              {card.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
