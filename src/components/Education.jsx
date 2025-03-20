import React from 'react';

const Education = () => {
  return (
    <section className="services section py-16" id="services">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold text-gray-500 text-center mb-8">
          My <span className="text-black">EDUCATION</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full-stack Developer */}
          <article className="services__card bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa-brands fa-react services__icon text-4xl text-blue-500 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Full-stack Developer</h2>
            <p className="text-lg text-gray-600">Kgisl Microcollege</p>
          </article>

          {/* BCA */}
          <article className="services__card bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa-solid fa-graduation-cap services__icon text-4xl text-blue-500 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">BCA</h2>
            <p className="text-lg text-gray-600">Madras University</p>
          </article>

          {/* HSC */}
          <article className="services__card bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa-solid fa-school services__icon text-4xl text-blue-500 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">HSC</h2>
            <p className="text-lg text-gray-600">
              Ramakrishna Vidya Niketan Higher Secondary School
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
