import React from 'react';

function OurSolutionsIntro() {
  return (
    <div className="bg-slate-100 py-16 px-6 md:px-20" id='our-solution'>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text content on the left */}
        <div className="md:w-1/2 text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OUR SOLUTION: <br />
            DIGITAL ENTREPRENEURSHIP TRAINING FOR WOMEN
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Newton Academy is launching a comprehensive course in Digital Entrepreneurship designed specifically for women and girls from low-income and marginalized backgrounds.
            <br /><br />
            This program bridges the gender digital divide by teaching skills that enable participants to create, market, and sell digital products and services online.
          </p>
        </div>

        {/* Image on the right */}
        <div className="md:w-1/2">
          <img
            src="/images/empowered_women.png"
            alt="Empowered Women Learning"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default OurSolutionsIntro;