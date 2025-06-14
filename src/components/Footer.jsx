import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Edri7h"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ehtesham-nawaz-471ab1220/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full text-lg"
          >
            <FaLinkedin />
          </a>
         
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ehtesham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
