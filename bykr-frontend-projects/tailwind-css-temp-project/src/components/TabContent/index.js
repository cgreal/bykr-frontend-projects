import React from "react";
import Button from "../../components/common/Button/index";
import firstImg from "../../assets/images/project1.png";
import secondImg from "../../assets/images/project2.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex justify-between mb-10 items-center mx-5 md:mx-40 lg:mx-60">
        <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Our latest Projects</h1>
        <Button text="See All" type="ghost" />
      </div>
      <div className="flex flex-wrap justify-center md:mx-40 lg:mx-60">
        <ul className="flex mb-5 list-none flex-wrap flex-row" role="tablist">
          <li className="text-center">
            <a
              className={
                "text-xs font-bold uppercase px-1 sm:px-5 py-3  block leading-normal " +
                (openTab === 1 ? "text-yellow bg-" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              All
            </a>
          </li>
          <li className="text-center">
            <a
              className={
                "text-xs font-bold uppercase px-1 sm:px-5 py-3  block leading-normal " +
                (openTab === 2 ? "text-yellow" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              UI/Ux
            </a>
          </li>
          <li className="text-center">
            <a
              className={
                "text-xs font-bold uppercase px-1 sm:px-5 py-3  block leading-normal " +
                (openTab === 3 ? "text-yellow" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Web Design
            </a>
          </li>
          <li className="text-center">
            <a
              className={
                "text-xs font-bold uppercase px-1 sm:px-5 py-3  block leading-normal " +
                (openTab === 4 ? "text-yellow" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              Branding
            </a>
          </li>
          <li className="text-center">
            <a
              className={
                "text-xs font-bold uppercase px-1 sm:px-5 py-3  block leading-normal" +
                (openTab === 5 ? "text-yellow" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link5"
              role="tablist"
            >
              Interaction
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  ">
          <div className="py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div class="mb-4  mx-auto hidden lg:flex">
                  <div class="w-full md:w-1/2  overflow-hidden  md:pr-5">
                    <img class="w-full" src={firstImg} alt="" />
                    <div class="py-4 h-full">
                      <div class="font-bold text-xl mb-2">
                        Talent.com - Logo, Full Redesign and Branding
                      </div>
                      <p class="text-gray-700 text-base">
                        Talent.com a new brand identity using their core values of optimism,
                        transparency and approachability as inspiration. As a result, we were able
                        to create the most streamlined
                      </p>
                    </div>
                  </div>

                  <div class="w-full md:w-1/2  overflow-hidden  md:pl-5">
                    <img class="w-full" src={secondImg} alt="" />
                    <div class="py-4">
                      <div class="font-bold text-xl mb-2">
                        Bonfire - Landing Page Design Webby Awards Nomination
                      </div>
                      <p class="text-gray-700 text-base">
                        Pretty excited to announce that we just got nominated at the Webby Awards!
                        easy to understand and to use should be essential for every business owner
                        who uses their website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-0 lg:hidden">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="tabSwiper"
                  >
                    <SwiperSlide>
                      <div class="">
                        <div class=" overflow-hidden mb-14">
                          <img src={firstImg} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="lg:flex  mx-auto">
                        <div class=" overflow-hidden mb-14">
                          <img src={secondImg} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p className="px-5">
                  2- Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  <br />
                  <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p className="px-5">
                  3- Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  <br />
                  <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <p className="px-5">
                  4- Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  <br />
                  <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                <p className="px-5">
                  5- Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  <br />
                  <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mb-20">
          <Button text="Load More" />
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />
    </>
  );
}
