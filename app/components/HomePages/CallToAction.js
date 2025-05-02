import React from "react";

function CallToAction() {
  return (
    <div className="bg-white  py-16 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-teal-500">Empower Women </span> Through Digital Skills?
        </h2>
        <p className="text-lg md:text-xl  mb-8 text-slate-600">
          Let’s work together to equip women and girls in Nigeria with the tools they need to succeed in the digital economy.
        </p>
        <a
          href="#contact"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
        >
          Get Involved
        </a>
      </div>
    </div>
  );
}

export default CallToAction;