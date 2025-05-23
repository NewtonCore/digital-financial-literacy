import React from "react";
import { AttentionSeeker, Fade, Hinge, Slide } from "react-awesome-reveal";

function WhatWeOffer() {
  return (
    <div className="bg-teal-800 text-gray-800 py-16 px-4 md:px-10" id="what-we-offer">
      <div className="bg-teal-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What We Offer
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            Our Digital Entrepreneurship Training program equips women and girls
            from underserved communities with skills to succeed in the digital
            economy.
          </p>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Foundational Digital Literacy",
                subtitle: "Beginner Skills",
                image: "/images/digital_literacy.png",
                text:"Basic computer and internet skills for complete beginners."
              },
              {
                title: "Entrepreneurship Training",
                subtitle: "Business Essentials",
                image: "/images/Entrepreneurship.png",
                text:"Business ideation, branding, pricing, and monetization strategies."
              },
              {
                title: "Practical Digital Tools",
                subtitle: "Hands-on Platforms",
                image: "/images/Practical.png",
                text:"Training in Canva, WhatsApp Business, Instagram marketing, Google Workspace, and more."
              },
              {
                title: "E-Commerce Setup",
                subtitle: "Launch Your Store",
                image: "/images/E-Commerce.png",
                text:"Guidance on starting online shops, freelancing profiles, and creating digital portfolios."
              },
              {
                title: "Mentorship & Community",
                subtitle: "Support Network",
                image: "/images/Mentorship.png",
                text:"Access to female mentors, coaches, and a support network for growth."
              },
              {
                title: "Certification",
                subtitle: "Credentialed Learning",
                image: "/images/Certification.png",
                text:"Recognized certificates to build credibility and unlock opportunities."
              },
            ].map((item, idx) => (
              <Fade direction="" key={idx}>
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* Image Wrapper with Zoom on Hover */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Slide direction="up">
                      <span className="text-teal-400 text-sm font-medium mb-2 block">
                        {item.subtitle}
                      </span>
                    </Slide>

                    <Slide direction="up">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-xs">
                        {item?.text}
                      </p>
                    </Slide>
                  </div>
                </div>
              </Fade>

              //     <div
              //     key={idx}
              //     className="rounded-xl overflow-hidden shadow-lg group h-64 bg-cover bg-center"
              //     style={{ backgroundImage: `url(${item.image})` }}
              //   >
              //     <div className="w-full h-full bg-black bg-opacity-60 p-4 flex flex-col justify-end">
              //       <span className="text-teal-400 text-sm font-medium">{item.subtitle}</span>
              //       <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              //     </div>
              //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
