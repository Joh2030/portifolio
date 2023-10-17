import React from "react";
import rightImage from "../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";

function HeroSection() {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <p className="max-w-md text-center font-bold text-center md:text-5xl md:text-center">
              My name is Joram and I am a Fullstack web developer.
            </p>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-center">
              I am a passionate individual who thrives on learning new things.
              {/* <br /> I recently graduated from a 17 week bootcamp and now I am
              working on personal projects while searching for an entry level in
              web development. */}
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                About
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="rounded-lg" src={rightImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
