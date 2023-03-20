import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import {
  imageSliderOne,
  imageSliderTwo,
  imageSliderThree,
  imageSlideFive,
  imageSliderFour,
  imageSliderSix,
} from "../../../public/images";

const SwipeSlider = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    let w = window.innerWidth;
    w < 786 ? setSlide(1.2) : setSlide(1.5);
  }, []);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={slide}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[65vh] relative mt-[40vh] md:mt-[33vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSliderOne}
              alt="slider image"
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>MULTIPLE PROJECTS</p>
              <p>(01)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              HEINIKEN
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSliderTwo}
              alt="slider image"
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">G-STAR RAW</span>
                <br /> 1:00
              </p>
              <p>(02)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl leading-none">
              G-STAR
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSliderThree}
              alt="slider image"
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className=" text-red-700">$KODA</span>
                <br /> 2:01
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              SKODA
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSliderFour}
              alt="slider image"
              className="w-full md:w-[60%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">PUBLICIS MILAN</span>
                <br /> 1:10
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              DIESEL
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSlideFive}
              alt="slider image"
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className=" text-red-700">BARBARA BOLOGNA</span>
                <br /> 14:14
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              EMBODIMENT
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              src={imageSliderSix}
              alt="slider image"
              className="w-full md:w-[60%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">PUBLICIS</span>
                <br /> 1:17
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              MERCEDES
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipeSlider;
