"use client";
import styles from "./companies.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { arrow_right, chevron_right_blue } from "@/public/icon";
export default function Companies() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <section>
      <div className={`box ${styles.box}`}>
        <div className={styles.title_section}>
          <p className={`section_title ${styles.title}`}>Наши партнеры</p>
          <div className={styles.navigation}>
            <button
              className={styles.left}
              ref={(node: any) => setPrevEl(node)}
            >
              {chevron_right_blue}
            </button>
            <button
              className={styles.right}
              ref={(node: any) => setNextEl(node)}
            >
              {chevron_right_blue}
            </button>
          </div>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 0,
                centeredSlides: true,
                pagination: true,
              },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4, pagination: false },
              1440: { slidesPerView: 6 },
              // 1300: { pagination: false },
            }}
            spaceBetween={30}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            className={`${styles.mySwiper} mySwiper`}
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner1.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner2.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner3.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner4.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner5.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner6.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner1.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner2.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner3.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner4.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner5.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner6.png"
                  width={218}
                  height={107}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
