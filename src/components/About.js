import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About NCLEX Prep Pro
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Your Path to Nursing Success
          </h2>
          <p className="text-gray-700 mb-4">
            NCLEX Prep Pro is dedicated to helping nursing students pass the NCLEX exam 
            with confidence. Our platform offers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Unlimited access to 2,000+ practice questions</li>
            <li>Detailed rationales for every answer</li>
            <li>Customizable practice tests</li>
            <li>Progress tracking and performance analytics</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Our Expert Team
          </h2>
          <p className="text-gray-700 mb-4">
            Developed by experienced nurses and nurse educators, our content is 
            regularly updated to reflect the latest NCLEX test plans and clinical guidelines.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Subscription Plans
          </h2>
          <p className="text-gray-700">
            Choose from flexible subscription options to get full access to all features:
          </p>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;