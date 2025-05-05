import React from "react";
import { Slide } from "react-awesome-reveal";

function WhyDigitalEntrepreneurship() {
  const points = [
    {
      title: "No Degree Needed",
      text: "Only relevant skills and access are required, not a university degree.",
      delay:50
    },
    {
      title: "Work from Home",
      text: "Women can balance business with family responsibilities while working remotely.",
      delay:100
    },
    {
      title: "Global Opportunities",
      text: "E-commerce and freelancing platforms allow women to earn globally.",
      delay:150

    },
    {
      title: "Confidence & Leadership",
      text: "Digital ventures build self-confidence and leadership in marginalized women.",
      delay:200

    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-4 md:px-10" id="why-digital-entrepreneurship">
      <div className="max-w-7xl mx-auto text-center">
        <Slide direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            WHY DIGITAL <span className="text-teal-500">ENTREPRENEURSHIP?</span>
          </h2>
        </Slide>
        <Slide direction="up">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Digital entrepreneurship is a game changer for women because it:
          </p>
        </Slide>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
  {points.map((point, index) => (
    <Slide direction="up" key={index} delay={point.delay}>
      <div className="bg-[#F1F5F9] p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-left h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-[#0A122A]">
          {point.title}
        </h3>
        <p className="text-gray-700 text-sm flex-grow">{point.text}</p>
      </div>
    </Slide>
  ))}
</div>

        <p className="mt-12 text-base md:text-lg text-gray-800 max-w-4xl mx-auto">
          Nigerian women are already earning{" "}
          <span className="font-semibold text-[#0A122A]">$300–$3,000</span>{" "}
          monthly through freelancing, virtual assistance, content creation, and
          online coaching. Our goal is to help thousands more join them.
        </p>
      </div>
    </section>
  );
}

export default WhyDigitalEntrepreneurship;
