import React from "react";
import firstImg from "../../assets/images/cat1.png";
import secondImg from "../../assets/images/cat2.png";
import thirdImg from "../../assets/images/cat3.png";
import forthImg from "../../assets/images/cat4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <div className="flex flex-col m-0 hidden xl:flex md:mx-40 lg:mx-60 mb-20 ">
      <div className="flex mb-10 items-center mx-5 md:mx-0">
        <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Categories</h1>
      </div>
      <div className="mb-20">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          centeredSlides={false}
          navigation={true}
          modules={[]}
          className="categoriesSwiper"
        >
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={firstImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Games</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={secondImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Sports</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={thirdImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Metaverse</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={forthImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Art</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={firstImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Games</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={secondImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Sports</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={thirdImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Metaverse</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="text-center bg-gray justify-center rounded-default p-2">
              <div class="overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <img src={forthImg} className="rounded-default" />
                  <div className="text-xl leading-normal font-bold my-10">Art</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        centeredSlides={false}
        navigation={true}
        modules={[]}
        className="categoriesSwiper"
      >
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={firstImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Games</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={secondImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Sports</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={thirdImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Metaverse</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={forthImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Art</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={firstImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Games</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={secondImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Sports</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={thirdImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Metaverse</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center bg-gray justify-center rounded-default p-2">
            <div class="overflow-hidden">
              <div className="flex flex-col justify-center items-center">
                <img src={forthImg} className="rounded-default" />
                <div className="text-xl leading-normal font-bold my-10">Art</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
