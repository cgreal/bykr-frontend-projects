import React from "react";
import Button from "../../components/common/Button/index";
import firstImg from "../../assets/images/blog1.png";
import secondImg from "../../assets/images/blog2.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Blog = () => {
  return (
    <>
      <div class="flex flex-col mx-0 md:mx-40 lg:mx-60">
        <div className="flex mb-10 items-center mx-5 md:mx-0">
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Blog from insights</h1>
        </div>
        <div className="flex-wrap flex-row justify-between mb-10 md:mb-20 hidden md:flex">
          <div className="mb-6 md:mb-10 md:w-1/2 md:pr-5">
            <div className="w-100 mb-5">
              <img src={firstImg} />
            </div>
            <div className="inline-flex text-xs px-3 py-2 bg-white text-black rounded-full mb-5">
              TECHNOLOGY
            </div>
            <div className="text-white mb-5">John Doe • 19 Jan 2022</div>
            <p className="text-xl leading-normal mb-10 font-bold">
              A small business is only as good as its tools and it is totally true.
            </p>
            <div className="mb-10">
              <Button text={"Contact us"} type="ghost" />
            </div>
          </div>
          <div className="mb-6 md:mb-10 md:w-1/2 md:pl-5">
            <div className="w-100 mb-5">
              <img src={firstImg} />
            </div>
            <div className="inline-flex text-xs px-3 py-2 bg-white text-black rounded-full mb-5">
              WEBINER
            </div>
            <div className="text-white mb-5">John Doe • 19 Jan 2022</div>
            <p className="text-xl leading-normal mb-10 font-bold">
              Colaboration with team members that will be grow to business.
            </p>
            <div className="mb-10">
              <Button text={"Contact us"} type="ghost" />
            </div>
          </div>
        </div>
        <div className="m-0 md:hidden">
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
              <div class="text-center">
                <div class="rounded overflow-hidden mb-14">
                  <div className="mb-6 md:mb-10 md:pr-5">
                    <div className="w-100 mb-5">
                      <img src={firstImg} />
                    </div>
                    <div className="inline-flex text-xs px-3 py-2 bg-white text-black rounded-full mb-5">
                      TECHNOLOGY
                    </div>
                    <div className="text-white mb-5">John Doe • 19 Jan 2022</div>
                    <p className="text-xl leading-normal mb-10 font-bold">
                      A small business is only as good as its tools and it is totally true.
                    </p>
                    <div className="mb-5">
                      <Button text={"Contact us"} type="ghost" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text-center lg:flex rounded mx-auto">
                <div class="rounded overflow-hidden mb-14">
                  <div className="mb-6 md:mb-10 md:w-1/2 md:pl-5">
                    <div className="w-100 mb-5">
                      <img src={firstImg} />
                    </div>
                    <div className="inline-flex text-xs px-3 py-2 bg-white text-black rounded-full mb-5">
                      WEBINER
                    </div>
                    <div className="text-white mb-5">John Doe • 19 Jan 2022</div>
                    <p className="text-xl leading-normal mb-10 font-bold">
                      Colaboration with team members that will be grow to business.
                    </p>
                    <div className="mb-5">
                      <Button text={"Contact us"} type="ghost" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blog;
