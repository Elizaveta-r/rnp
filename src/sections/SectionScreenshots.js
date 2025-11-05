// import Image from "next/image";
// import React from "react";

// import Screenshot1 from "@/assets/img/screenshots/1.webp";
// import Screenshot2 from "@/assets/img/screenshots/2.webp";
// import Screenshot3 from "@/assets/img/screenshots/3.webp";

// const images = [Screenshot1, Screenshot2, Screenshot3];

// export default function SectionScreenshots() {
//   return (
//     <section className="grid grid-cols-3 sm:gap-8 gap-1 sm:p-0 px-3 max-w-[1100px] z-1 items-center justify-center">
//       {images.map((image, index) => (
//         <Image key={index} src={image} alt={`Screenshot ${index + 1}`} />
//       ))}
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Screenshot1 from "@/assets/img/screenshots/1.webp";
import Screenshot2 from "@/assets/img/screenshots/2.webp";
import Screenshot3 from "@/assets/img/screenshots/3.webp";

import ModalPortal from "@/components/ModalPortal"; // скорректируй путь

const images = [Screenshot1, Screenshot2, Screenshot3];

export default function SectionScreenshots() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  return (
    <>
      {/* ГАЛЕРЕЯ */}
      <section className="grid grid-cols-3 sm:gap-8 gap-1 sm:p-0 px-3 max-w-[1100px] items-center justify-center z-1">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              setInitialIndex(index);
              setIsOpen(true);
            }}
            className="cursor-pointer transition hover:opacity-80"
          >
            <Image src={image} alt={`Screenshot ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* МОДАЛКА С SWIPER */}
      <ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Swiper
          modules={[Navigation, Keyboard]}
          navigation
          keyboard={{ enabled: true }}
          initialSlide={initialIndex}
          spaceBetween={50}
          slidesPerView={1}
          className="flex w-[90vw] h-[90vh] items-center"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex! items-center justify-center ">
              <Image
                src={img}
                alt={`Screenshot ${i + 1}`}
                width={900}
                height={600}
                className="object-contain max-h-[90vh] max-w-[90vw]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ModalPortal>
    </>
  );
}
