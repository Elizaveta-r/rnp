import Image from "next/image";
import React from "react";

import Screenshot1 from "@/assets/img/screenshots/1.webp";
import Screenshot2 from "@/assets/img/screenshots/2.webp";
import Screenshot3 from "@/assets/img/screenshots/3.webp";

const images = [Screenshot1, Screenshot2, Screenshot3];

export default function SectionScreenshots() {
  return (
    <section className="grid grid-cols-3 sm:gap-8 gap-1 sm:p-0 px-3 max-w-[1100px] z-1 items-center justify-center">
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Screenshot ${index + 1}`} />
      ))}
    </section>
  );
}
