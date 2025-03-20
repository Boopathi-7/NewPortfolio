import React from 'react';
import { Link } from 'react-router-dom';
import boopathi from '../assets/Boopathi.png'

const About = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 bg-white" style={{ padding: '5%' }}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container mx-auto"> 

        {/* About Me Card */}
        <div className="card flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden mt-4">
          <figure className="md:w-1/3">
            <img
              src={boopathi}
              alt="Boopathy"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">About Me</h2>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Web Developer</h4>
            <p className="text-gray-700 mb-6">
            Enthusiastic and detail-oriented Web Developer with a solid foundation in HTML, CSS, and JavaScript, complemented by hands-on experience with frameworks and libraries such as Bootstrap and React. Adept at both front-end and back-end development, with proficiency in Node.js, Java, PHP, and SQL databases including MongoDB and MySQL. Knowledgeable in Spring Boot for building robust, scalable applications. Eager to leverage technical skills and a passion for problem-solving to contribute effectively to a dynamic development team. Adept at learning new technologies quickly and committed to continuous improvement and professional growth.
            </p>
            <div className="card-actions">
              <Link to="/projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Watch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
