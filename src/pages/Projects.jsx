import React from 'react';
import coding_academy from '../assets/coding academy.png';
import authentication from '../assets/authentication.png';
import portfolio from '../assets/portfolio.png';
import swiggy from '../assets/swiggy.png';
import stone from '../assets/stonepaperscissor.jpg';
import movie from '../assets/movie.png';
import Elephant from '../assets/elephant.jpg'

const Projects = () => {
  const projectData = [
    {
      imgSrc: coding_academy ,
      alt: 'Coding Academy',
      subtitle: 'Web',
      title: 'Coding Academy',
      link: 'https://coding-academy-eosin.vercel.app/',
    },
    {
      imgSrc: swiggy,
      alt: 'Swiggy Clone',
      subtitle: 'Web',
      title: 'Swiggy Clone',
      link: 'https://swiggycss.netlify.app',
    },
    {
      imgSrc: portfolio ,
      alt: 'My Portfolio ',
      subtitle: 'Web',
      title: 'My Portfolio',
      link: 'https://portfoliokitkatboi.netlify.app',
    },
    {
      imgSrc: authentication,
      alt: 'User Authentication System',
      subtitle: 'Web',
      title: 'User Authentication System',
      link: 'https://task-six-rose.vercel.app',
    },
    {
      imgSrc: stone,
      alt: 'Stone paper scissor',
      subtitle: 'Web',
      title: 'Stone paper scissor',
      link: 'https://gamestonepaperscissor.netlify.app/',
    },
    {
      imgSrc: movie,
      alt: 'Movie Rating App',
      subtitle: 'Web',
      title: 'Movie Rating App',
      link: 'https://movie-rating-app-ruddy.vercel.app/',
    },
    {
      imgSrc: Elephant ,
      alt: 'Elephant Article',
      subtitle: 'Web',
      title: 'Elephant Article',
      link: 'https://unique-cat-6d5f61.netlify.app/',
    },
  ];

  return (
    <section className="projects section py-16  bg-white text-gray-700" id="projects">
      <div className="container mx-auto relative isolate px-6 pt-14 lg:px-8">
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* <h3 className="text-xl font-semibold text-gray-500 text-center mb-4">
          My <span className="text-black">Jobs</span>
        </h3> */}

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Recent Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <article key={index} className="projects__card bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.imgSrc} alt={project.alt} className="projects__img w-full h-56 object-cover" />

              <div className="p-6 text-center">
                <span className="projects__subtitle text-blue-500 text-sm uppercase tracking-wide">{project.subtitle}</span>

                <h2 className="projects__title text-lg font-bold text-gray-900 my-2">{project.title}</h2>

                <a
                  href={project.link}
                  className="projects__button inline-flex items-center text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <i className="ri-external-link-line ml-1"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
