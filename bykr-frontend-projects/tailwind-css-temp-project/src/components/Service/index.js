import { React } from "react";
import Button from "../../components/common/Button/index";
import contentWritingIcon from "../../assets/images/icons/contentWritingIcon.svg";
import brandingIcon from "../../assets/images/icons/brandingIcon.svg";
import researchIcon from "../../assets/images/icons/researchIcon.svg";
import webdesignIcon from "../../assets/images/icons/contentWritingIcon.svg";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Service = () => {
  return (
    <>
      <div className="service-wrapper md:py-20">
        <div className="flex-col mx-10 md:mx-40 lg:mx-60">
          <div className="flex justify-between mb-10 items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">Service We Can</h1>
              <h1 className="text-xl md:text-2xl font-bold">Help You</h1>
            </div>
            <div>
              <Button text="See All" type="ghost" />
            </div>
          </div>
          <div className="flex-wrap md:flex-nowrap md:space-x-10 hidden md:flex">
            <div className="md:w-1/2">
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-custom bg-gray rounded-tl-default px-10 py-20 mb-10">
                    <div class="blockquote-custom-icon bg-info ">
                      <img src={contentWritingIcon} className="mb-10" alt="" />
                    </div>
                    <h2 className="mb-10">Content Writing</h2>
                    <p class="mb-0 mt-2 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                      purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                      pellentesque sem sed platea diam dignissim duis purus.
                    </p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">
                      <Button text="Read More" type="ghost" />
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-custom bg-gray rounded-bl-default px-10 py-20 mb-10">
                    <div class="blockquote-custom-icon bg-info ">
                      <img src={brandingIcon} className="mb-10" alt="" />
                    </div>
                    <h2 className="mb-10">Branding</h2>
                    <p class="mb-0 mt-2 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                      purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                      pellentesque sem sed platea diam dignissim duis purus.
                    </p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">
                      <Button text="Read More" type="ghost" alt="" />
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:mt-10">
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-custom bg-gray rounded-tr-default px-10 py-20 mb-10">
                    <div class="blockquote-custom-icon bg-info ">
                      <img src={researchIcon} className="mb-10" alt="" />
                    </div>
                    <h2 className="mb-10">UX Research</h2>
                    <p class="mb-0 mt-2 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                      purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                      pellentesque sem sed platea diam dignissim duis purus.
                    </p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">
                      <Button text="Read More" />
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote blockquote-custom bg-gray rounded-br-default px-10 py-20 mb-10">
                    <div class="blockquote-custom-icon bg-info ">
                      <img src={webdesignIcon} className="mb-10" alt="" />
                    </div>
                    <h2 className="mb-10">Web Design</h2>
                    <p class="mb-0 mt-2 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                      purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                      pellentesque sem sed platea diam dignissim duis purus.
                    </p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">
                      <Button text="Read More" type="ghost" />
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 md:hidden mb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card pb-10">
              <div class="card-body">
                <blockquote class="blockquote blockquote-custom bg-gray rounded-default px-5 py-20 mb-5">
                  <div class="blockquote-custom-icon bg-info ">
                    <img src={contentWritingIcon} className="mb-3 md:mb-10 object-none" alt="" />
                  </div>
                  <h2 className="mb-2 md:mb-10">Content Writing</h2>
                  <p class="mb-0 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                    purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                    pellentesque sem sed platea diam dignissim duis purus.
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top">
                    <Button text="Read More" type="ghost" />
                  </footer>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card pb-1">
              <div class="card-body">
                <blockquote class="blockquote blockquote-custom bg-gray rounded-default px-5 py-20 mb-5">
                  <div class="blockquote-custom-icon bg-info ">
                    <img src={brandingIcon} className="mb-3 md:mb-10 object-none" alt="" />
                  </div>
                  <h2 className="mb-2 md:mb-10">Branding</h2>
                  <p class="mb-0 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                    purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                    pellentesque sem sed platea diam dignissim duis purus.
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top">
                    <Button text="Read More" type="ghost" alt="" />
                  </footer>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card pb-1">
              <div class="card-body">
                <blockquote class="blockquote blockquote-custom bg-gray rounded-default px-5 py-20 mb-5">
                  <div class="blockquote-custom-icon bg-info ">
                    <img src={researchIcon} className="mb-3 md:mb-10 object-none" alt="" />
                  </div>
                  <h2 className="mb-2 md:mb-10">UX Research</h2>
                  <p class="mb-0 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                    purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                    pellentesque sem sed platea diam dignissim duis purus.
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top">
                    <Button text="Read More" />
                  </footer>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card pb-1">
              <div class="card-body">
                <blockquote class="blockquote blockquote-custom bg-gray rounded-default px-5 py-20 mb-5">
                  <div class="blockquote-custom-icon bg-info ">
                    <img src={webdesignIcon} className="mb-3 md:mb-10 object-none" alt="" />
                  </div>
                  <h2 className="mb-2 md:mb-10">Web Design</h2>
                  <p class="mb-0 mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id
                    purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu
                    pellentesque sem sed platea diam dignissim duis purus.
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top">
                    <Button text="Read More" type="ghost" />
                  </footer>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Service;
