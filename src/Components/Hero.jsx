import React from "react";

const Hero = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row justify-evenly md:flex md:flex-col mt-40 mb-40">
        <div className="flex flex-col w-4/12 p-2  text-blue-800 gap-4">
          <h1 className="text-3xl">Welcome</h1>
          <h3 className="text-xl">To the largest model</h3>
          <p className="text-sm">
            Forget chat GPT: Chat GPT, Bard, blackBox and claude is old school
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-blue-800">
          <img
            src="https://th.bing.com/th/id/OIP.7XgKG6Er_dYRDOrUSrSenwAAAA?pid=ImgDet&w=120&h=120&c=7"
            alt="image"
          />
          <h2>Try code. GPT</h2>
        </div>
      </div>
      <div className="flex flex-col justify-evenly mb-60">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.7XgKG6Er_dYRDOrUSrSenwAAAA?pid=ImgDet&w=120&h=120&c=7"
              alt="image"
            />
            <h3>LLM</h3>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.7XgKG6Er_dYRDOrUSrSenwAAAA?pid=ImgDet&w=120&h=120&c=7"
              alt="image"
            />
            <h3>KNN</h3>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.7XgKG6Er_dYRDOrUSrSenwAAAA?pid=ImgDet&w=120&h=120&c=7"
              alt="image"
            />
            <h3>CNN</h3>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.7XgKG6Er_dYRDOrUSrSenwAAAA?pid=ImgDet&w=120&h=120&c=7"
              alt="image"
            />
            <h3>Neural</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
