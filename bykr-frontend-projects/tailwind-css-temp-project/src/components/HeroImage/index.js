import React from "react";
import wordClass from "../../assets/images/backgrounds/wordClass.png";
import hero1 from "../../assets/images/hero/hero1.png";
import hero2 from "../../assets/images/hero/hero2.png";
import Button from "../../components/common/Button/index";
import "./style.scss";

const HeroImage = () => {
  return (
    <div class="hero auto-cols-max md:grid md:grid-cols-4 md:grid-rows-1 md:gap-5 overflow-hidden  justify-items-center px-10 md:px-0 mb-16">
      <div className="bg-left-corner"></div>
      <div class="box row-start-1 row-end-2 col-start-2 col-span-2 mb-10">
        <div className="hero-text justify-center">
          <div className="flex items-center text-3xl md:text-4xl">
            <div className="word-class-img">
              <img src={wordClass} />
            </div>
            Digital
          </div>
          <div className="text-3xl md:text-4xl">Agency</div>
        </div>
      </div>
      <div class="box row-start-2 row-end-2 col-start-2 col-span-2">
        <div className="hero-main-text mb-10 leading-loose justify-center">
          <div className="mb-10 text-lg md:text-xl">
            Full-service design support that growing B2B companies need. World leading agency.
          </div>
          <Button text="Our Projects" />
        </div>
      </div>
      <div class="box row-start-2 row-end-3 col-start-4 col-end-4 mb-10  lg:mb-0">
        <img src={hero2} className="hero-right-img m-md-right-img xl:m-lg-right-img  " />
      </div>
      <div class="box row-start-2 row-end-3 col-start-1 md:xl:col-end-3 lg:col-end-2 relative">
        <div className="left-image-box pr-20 pb-20">
          <div className="flex justify-start md:justify-end">
            <img src={hero1} className="hero-left-img xl:-m-up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
