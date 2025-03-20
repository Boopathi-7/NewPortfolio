// const Portfolio = () => {
//   return (
//     <>
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item  relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;


import React from 'react';

const Skills = () => {
  return (
    <section className="skills section py-16 bg-red-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* Skills Text Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-500">
            Favorite <span className="text-black">Skills</span>
          </h3>

          <h2 className="text-4xl font-bold text-black">
            My Skills
          </h2>

          <p className="text-lg text-gray-600">
            See fully what skills I have and perform, to develop the projects for you.
          </p>

          {/* <a href="#projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Coding Languages
          </a> */}
        </div>

        {/* Skills List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ol className="space-y-2">
            <li className="skills__item text-lg text-gray-700 font-medium">HTML & CSS</li>
            <li className="skills__item text-lg text-gray-700 font-medium">JavaScript</li>
            <li className="skills__item text-lg text-gray-700 font-medium">Bootstrap</li>
            <li className="skills__item text-lg text-gray-700 font-medium">React</li>
          </ol>

          <ol className="space-y-2">
            <li className="skills__item text-lg text-gray-700 font-medium">Git & GitHub</li>
            <li className="skills__item text-lg text-gray-700 font-medium">Node</li>
            <li className="skills__item text-lg text-gray-700 font-medium">Express JS</li>
            <li className="skills__item text-lg text-gray-700 font-medium">MongoDB</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Skills;




