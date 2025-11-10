import React from "react";

import DashboardScreenshot from "@/assets/img/dashboard.png";
import Image from "next/image";
import LineInterface from "@/assets/icons/LineInterface";
import LineAll from "@/assets/icons/LineAll";

export default function DashboardInterface() {
  return (
    <section className="relative mt-7">
      <div className="absolute left-0 sm:-top-12 -top-13 flex flex-col items-center justify-center sm:gap-1 gap-2">
        <div className="shake shadow-card py-2.5 lg:px-3 sm:px-2 px-1 rounded-lg bg-lime lg:max-w-43 sm:max-w-30 max-w-30 -rotate-5">
          <h2 className="text-center text-foreground font-extrabold lg:text-sm sm:text-xs text-[10px] leading-none">
            Простой и удобный интерфейс
          </h2>
        </div>
        <figure className="arrow-bounce sm:ml-10 -ml-8">
          <LineInterface />
        </figure>
      </div>
      <Image
        className="shadow-report rounded-lg"
        src={DashboardScreenshot}
        alt="dashboard"
      />
      <div className="absolute right-6 -top-7 flex flex-col items-center justify-center gap-1">
        <div className="breathe shadow-card py-2.5 lg:px-3 sm:px-2 px-1 rounded-lg bg-yellow lg:max-w-40 sm:max-w-28 max-w-30">
          <h2 className="text-center text-foreground font-extrabold lg:text-sm sm:text-xs text-[10px] leading-none">
            Все самое важное в одном месте
          </h2>
        </div>
        <figure className="arrow-bounce mr-11">
          <LineAll />
        </figure>
      </div>
    </section>
  );
}
