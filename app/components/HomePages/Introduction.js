import React from "react";

function Introduction() {
  return (
    <div className="w-full bg-white text-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
        {/* Right: Image */}
        <div className="w-full">
          <img
            src="/images/women_grad.png"
            alt="Digital Entrepreneurship for Women"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        {/* Left: Introduction Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Introduction</h2>
          <p className="text-lg leading-relaxed mb-4">
            In Africa, millions of girls and young women remain trapped in a
            cycle of poverty—not because they lack potential, but because they
            lack opportunity. Many were denied the chance to complete school.
            Others were forced into early marriages, became mothers too soon, or
            found themselves stuck in low-income or unpaid labor.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            They have dreams, but no direction. They see others earning online,
            building businesses, and gaining global recognition—but they don’t
            know where to start.
          </p>
          <p className="text-lg leading-relaxed">
            At Newton Academy, we believe it’s not too late. Through Digital
            Entrepreneurship Training, we are helping underserved girls and
            women develop the skills and confidence to transform their lives.
            Our mission is simple: Equip them with relevant digital knowledge so
            they can build income-generating ventures and become financially
            independent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
