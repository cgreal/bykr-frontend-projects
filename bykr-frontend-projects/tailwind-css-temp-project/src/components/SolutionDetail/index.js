import React from "react";
import solutionImg from "../../assets/images/solution.png";
import "./style.scss";

const SolutionDetail = () => {
  return (
    <div className="solution relative flex flex-col flex-col-reverse lg:flex-row w-full mb-10">
      <div className="image-wrapper flex lg:w-1/3 bg-yellow p-10 md:p-20 relative">
        <div className="lg:absolute">
          <img src={solutionImg} className="solution-img w-full xl:w-auto -mt-32 md:-m-0" />
        </div>
      </div>
      <div className="flex md:bg-gray w-full px-10 pb-20 md:py-20 md:p-20">
        <div className="solution-wrapper flex-col m-auto">
          <div className="mb-6 md:mb-12 text-2xl font-bold">Our Solution Approach</div>
          <div className="solution-title text-xl font-bold mb-4">
            Data Analysis with problem factor
          </div>
          <div className="solution-text mb-10 text-sm">
            Delivering the spatial expertise of the largest, most sophisticated performance
            marketing agencies, while providing intimate, boutique-like support.
          </div>
          <div className="solution-title  text-xl font-bold mb-4">
            Data Analysis with problem factor
          </div>
          <div className="solution-text mb-10 text-sm">
            Delivering the spatial expertise of the largest, most sophisticated performance
            marketing agencies, while providing intimate, boutique-like support.
          </div>
          <div className="solution-title  text-xl font-bold mb-4">
            Data Analysis with problem factor
          </div>
          <div className="solution-text mb-10 text-sm">
            Delivering the spatial expertise of the largest, most sophisticated performance
            marketing agencies, while providing intimate, boutique-like support.
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolutionDetail;
