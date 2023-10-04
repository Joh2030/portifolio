import React from "react";
import logo from "../assets/icons8-source-code-64.png";

function Navbar() {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt 2">
            <img src={logo} alt="" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">
              Home
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Skills
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Projects
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Contact
            </a>
          </div>
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
