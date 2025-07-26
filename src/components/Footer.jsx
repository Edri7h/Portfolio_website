import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

// Extended social icons for a fuller "connect" presence
const SOCIALS = [
  {
    href: "https://github.com/Edri7h",
    icon: <FaGithub size={22} />,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/ehtesham-nawaz-471ab1220/",
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn"
  },
  {
    href: "mailto:nawazehtesham04@gmail.com",
    icon: <FaEnvelope size={22} />,
    label: "Email"
  },
  // You can add more socials as needed:
  // {
  //   href: "https://twitter.com/yourhandle",
  //   icon: <FaTwitter size={22} />,
  //   label: "Twitter"
  // }
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full  py-10 px-6 text-gray-900 font-mono "
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h3 className="text-xl font-semibold tracking-tight mb-2 drop-shadow-sm">
          Let’s connect!
        </h3>

        {/* Social Links */}
        <nav aria-label="Social links" className="flex gap-6 items-center mb-2">
          {SOCIALS.map(({ href, icon, label }, idx) => (
            <FooterIcon key={idx} href={href} icon={icon} label={label} />
          ))}
        </nav>

        {/* Footer Text */}
        <p className="text-xs text-gray-500 tracking-wide select-none">
          © {new Date().getFullYear()} <span className="font-light text-gray-700">developed by <span className="font-extrabold">Ehtesham Nawaz</span>.</span> 
        </p>
      </div>
    </footer>
  );
};

// Animated ring, focus states, aria-label for better a11y
const FooterIcon = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group p-3 rounded-full border border-gray-200 bg-white
      hover:bg-blue-50 hover:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-300
      shadow-md hover:shadow-xl transition-all duration-200
      text-gray-700 hover:text-blue-600 focus:outline-none
      flex items-center justify-center
      transform hover:-translate-y-1 active:scale-95"
  >
    <span className="sr-only">{label}</span>
    {icon}
  </a>
);

export default Footer;
