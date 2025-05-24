import React from 'react';

const ProjectDescription = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-purple-600 drop-shadow-sm">
          🚀 The Student Playbook: A Guide to Empower Future Entrepreneurs
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
          <span className="font-semibold text-purple-700">Shubham</span>, a passionate student innovator, created the <span className="font-semibold text-pink-600">Student Playbook</span> — a practical guide designed to inspire and empower students who aspire to become future entrepreneurs and changemakers.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Born out of his own entrepreneurial struggles while still in school, this playbook simplifies the startup journey. It walks students through crucial steps such as <span className="font-medium">defining a problem, crafting a solution, marketing, building revenue models</span>, and <span className="font-medium">networking</span> — all tailored for the youth.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
          Though the book has just launched in limited hard copy, a digital version is on the way — ensuring accessibility for digitally-savvy students everywhere. Shubham’s initiative not only reflects his resilience but also lights the way for countless student innovators to follow.
        </p>
      </div>
    </section>
  );
};

export default ProjectDescription;
