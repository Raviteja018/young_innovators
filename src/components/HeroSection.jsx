import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-pink-500 to-yellow-400 text-white text-center py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Meet the Young Innovator
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Discover how a bright young mind is changing the world with
          creativity, technology, and passion.
        </p>

        <div className="flex flex-col items-center gap-4">
          <img
            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl transition duration-300 hover:scale-105"
            src="https://media.licdn.com/dms/image/v2/D4E03AQGUesF_ycFxog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710427781734?e=1753315200&v=beta&t=4YdWNtr3Xg5epZ-h2XUV_ta_EIt7cppcjAUjqUKe6lg"
            alt="Innovator img"
          />
          <h3 className="text-2xl font-semibold tracking-wide drop-shadow">
            Shubham Bhasin
          </h3>
          <p className="text-sm text-black bg-white bg-opacity-10 px-4 py-1 rounded-full backdrop-blur-md border border-white border-opacity-20">
            Creator of the Student Playbook | Future Entrepreneur
          </p>
        </div>
      </div>
    </section>
  );
}
