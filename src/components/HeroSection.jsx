import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-16 px-6 ">
        <div className="max-w-5xl flex flex-col items-center ">
          <h1 className="text-4xl md:text-6xl ">Meet the Young Innovator</h1>
          <p>
            Discover how a bright young mind is changing the world with
            creativity, technology, and passion.
          </p>
          <img src="https://avatars.githubusercontent.com/u/148607218?v=4" alt="innvator img"/>
        </div>
      </section>
    </div>
  )
}

//   <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-6 md:px-16">
//     <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
//       <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
//         Meet the Young Innovator
//       </h1>
//       <p className="text-lg md:text-xl mb-8 max-w-2xl">
//         Discover how a bright young mind is changing the world with
//         creativity, technology, and passion.
//       </p>
//       <img
//         src="https://source.unsplash.com/featured/?young,innovator"
//         alt="Young Innovator"
//         className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg transition duration-300 hover:scale-105"
//       />
//     </div>
//   </section>
