import React from "react";

function TargetImpact() {
  return (
    <section className="bg-slate-100 py-16 px-4 md:px-20" id="target-impact">
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="w-full">
          <img
            src="/images/TargetImpact.png" // Replace with your image path
            alt="Target Impact"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A122A] mb-6">
            TARGET IMPACT
          </h2>
          <p className="text-gray-700 mb-6">
            Newton Academy is committed to training 5,000 underserved women and girls annually, with a focus on:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>School dropouts due to pregnancy, marriage, or poverty.</li>
            <li>Women in rural and urban slums with no access to formal education.</li>
            <li>Young mothers and unemployed women eager to become financially independent.</li>
          </ul>

          <p className="text-gray-700 font-semibold mb-3">Expected Outcomes:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>70% of participants will begin earning online or launch digital businesses within 6 months.</li>
            <li>Women will gain confidence, reduce economic dependence, and challenge harmful gender norms.</li>
            <li>Graduates will create micro-businesses that contribute to local and national economies.</li>
          </ul>
        </div>

        {/* Right: Image */}
        
      </div>
    </section>
  );
}

export default TargetImpact;