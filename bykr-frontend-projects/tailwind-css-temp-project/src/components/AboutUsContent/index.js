import React from "react";
import aboutUs from "../../assets/images/aboutUs.png";
import Button from "../common/Button/index";
import "./style.scss";

const AboutUsComponent = () => {
  return (
    <>
      <div class="flex flex-col mx-20 md:mx-40 lg:mx-60">
        <div className="flex flex-wrap flex-row justify-between mb-10 md:mb-20">
          <div className="mb-6 md:mb-10 w-100 md:w-1/2">
            <div className="text-xl font-bold md:text-2xl leading-relax mb-6">
              We are a creative digital agency
            </div>
            <p className="leading-loose mb-3 text-sm">
              Dalio started with a vision for building an agency to solve the business problems of
              the future, and that requires a different model. We’re not a branding agency that
              dabbles in tech, and we’re not a development shop that leaves you hanging when it’s
              time to go to market.
            </p>
            <p className="leading-loose text-sm mb-8 md:mb-12">
              We start with human experience and layer in technology and marketing to deliver truly
              integrated digital solutions. This unique set of capabilities sets us apart from other
              agencies and positions DIG to help you attack your goals.
            </p>
            <div className="mb-10">
              <Button text={"Contact us"} />
            </div>
          </div>
          <div className="w-100 md:w-1/2 md:pl-16">
            <img src={aboutUs} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:mb-16">
          <div className="text-center w-full md:w-1/3 mb-16">
            <div className="text-xl font-bold md:text-2xl leading-relax">4.8k</div>
            <div>Job Completed</div>
          </div>
          <div className="text-center w-full md:w-1/3 mb-16">
            <div className="text-xl font-bold md:text-2xl leading-relax">12+</div>
            <div>Industry Experience</div>
          </div>
          <div className="text-center w-full md:w-1/3 mb-16">
            <div className="text-xl font-bold md:text-2xl leading-relax">2.5k+</div>
            <div>World wide clients</div>
          </div>
          <div className="text-center w-full md:w-1/3 mb-16">
            <div className="text-xl font-bold md:text-2xl leading-relax">120+</div>
            <div>Won Awards</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
