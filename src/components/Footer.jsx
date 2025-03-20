const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Boopathi's Portfolio. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/revnandhu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <i className="ri-dribbble-line text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="ri-linkedin-box-line text-2xl"></i>
          </a>
        </div>
        <p className="text-xs mt-4 text-gray-500">
          Designed and developed with ❤️ by Boopathi M
        </p>
      </div>
    </footer>
  );
};

export default Footer;
