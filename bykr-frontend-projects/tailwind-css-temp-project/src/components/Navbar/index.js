import React from "react";
import logo from "../../assets/images/Dalio.png";
import toggleIcon from "../../assets/images/hamburger.png";
import "./style.scss";
function NavBar() {
  return (
    <>
      <nav>
        <div className="container m-auto flex flex-wrap items-center justify-between p-7">
          <a href="#" className="flex">
            <img src={logo} alt="" className="logo" />
          </a>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="block pl-3 pr-4 py-2" aria-current="page">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="block pl-3 pr-4 py-2">
                  What We do
                </a>
              </li>
              <li>
                <a href="#" className="block pl-3 pr-4 py-2">
                  Our work
                </a>
              </li>
              <li>
                <a href="#" className="block pl-3 pr-4 py-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block pl-3 pr-4 py-2">
                  Say hi
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <img src={toggleIcon} width="16" height="12" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
