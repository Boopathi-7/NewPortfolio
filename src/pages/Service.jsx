import React from 'react'

const posts = [
  {
    id: 1,
    title: 'Kgisl Microcollege',
    href: '#',
    course: 'Full-stack Developer',
    year: 'May 2024 - Nov 2024',
    description:
      'Completed an intensive Full-Stack Development program, gaining expertise in MERN stack technologies including React, Node.js, Express.js, and MongoDB. Developed multiple projects to enhance practical skills.',
  },
  {
    id: 2,
    title: 'Government Arts College Coimbatore',
    href: '#',
    course: 'B.Sc. Mathematics',
    year: '2017 - 2020',
    description:
      'Earned a Bachelor’s degree in Mathematics, focusing on analytical problem-solving, logical reasoning, and quantitative techniques, which form a strong foundation for technical and programming skills.',
  },
  {
    id: 3,
    title: 'Ramakrishna Mission Vidyalaya Higher Secondary School',
    href: '#',
    course: 'Bio-Maths',
    year: '2015 - 2017',
    description:
      'Completed higher secondary education with a focus on Biology and Mathematics, developing strong analytical and problem-solving abilities essential for a career in technology and software development.',
  },
]

const Service = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-6 relative isolate px-6 pt-14 lg:px-6x">
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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Education</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.year} className="text-gray-500 ">
                    {post.year}
                  </time>
                  <a
                    href={post.course}
                    className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.course}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.title}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
