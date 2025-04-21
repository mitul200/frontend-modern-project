import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const Navber = () => {
  const [isManuOpen, setManuOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState("#home");
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#service", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="w-full mx-auto container flex items-center justify-between px-4 lg:px-8 md:h-20 h-16">
          {/* logo - now vertically centered */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="bg-blue-600 h-4 w-4 rounded-full opacity-75 hover:opacity-100"></div>
            <div className="bg-red-600 h-4 w-4 -ml-2 rounded-full opacity-100 hover:opacity-75"></div>
          </div>

          {/* mobile device icons */}
          <button
            className="md:hidden P-2"
            onClick={() => setManuOpen(!isManuOpen)}
          >
            {isManuOpen ? (
              <IoMdClose className=" size-6" />
            ) : (
              <IoMenu className=" size-6" />
            )}
          </button>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                onClick={() => setActiveLinks(link.href)}
                key={index}
                to={link.href.replace("#", "")} // removes '#' for react-scroll
                smooth={true}
                duration={500}
                className={`
                  text-xl font-medium relative 
                  after:absolute after:bottom-0 after:left-0 
                  after:h-[2px] after:w-0 after:bg-blue-500 
                  after:content-[''] after:transition-all after:duration-300
                  hover:after:w-full ${
                    activeLinks == link.href
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* btn  */}

          <button className=" hidden  md:block bg-blue-600 px-6 py-2.5 cursor-pointer text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
            Get in touch
          </button>
        </div>
        {/* mobile manu items  */}
        {isManuOpen && (
          <div className="md:hidden bg-w  border-t border-gray-100 py-4">
            <div className=" container mx-auto px-4 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  onClick={() => {setActiveLinks(link.href)
                    setManuOpen(false)}
                  }
                  className={`block text-sm font-medium py-2 ${
                    activeLinks === link.href
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                  key={index}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-blue-600 px-6 py-2.5 cursor-pointer text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;
