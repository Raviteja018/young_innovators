import React from 'react';

const ProjectDescription = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-600">
          The Innovation That’s Making Waves
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>SmartBin</strong> is an AI-powered waste management solution built by 16-year-old tech enthusiast Anya Verma. Using object detection and IoT sensors, SmartBin identifies and separates recyclables from non-recyclables in real-time.
        </p>
        <p className="text-lg leading-relaxed">
          The project aims to reduce landfill waste and promote sustainability in urban areas. Anya's innovation has already been piloted in local schools and has shown a 60% improvement in waste segregation efficiency!
        </p>
      </div>
    </section>
  );
};

export default ProjectDescription;
