import Image from "next/image";
import shadowFlare from "@/assets/img/shadow-flare.png";
import React from "react";
import { Activity, ArrowRight, CirclePlay } from "lucide-react";
import Button from "@/ui/Button";
import ModalVideo from "@/components/ModalVideo";

export default function MainSection() {
  return (
    <section className="relative z-1 flex w-full flex-col items-center gap-6">
      <ShadowFlare />
      <div className="pt-7 px-3 xl:px-23 flex flex-col justify-center items-center gap-6">
        <div className="flex items-center gap-2">
          <figure className="w-8.5 h-8.5 bg-linear-to-br from-[#C6FC81] to-[#ACE565] rounded-lg flex items-center justify-center">
            <Activity strokeWidth={3} size={16} color="#666" />
          </figure>
          <p className="font-normal sm:text-xl text-xs">
            Рука <b>на пульсе</b> вашего бизнеса. <b>Всегда</b>.
          </p>
        </div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-semibold leading-[125%] text-center wrap-normal">
          Пока вы управляете бизнесом —{" "}
          <span className="font-extrabold inline-block text-transparent bg-linear-to-r from-[#24C367] to-[#0AB7CD] bg-clip-text">
            искусственный интеллект
          </span>
          <br />
          <span className="relative overflow-hidden shimmer-text">
            следит за порядком
          </span>
        </h1>

        <AnimatedBlock />
        <p className="text-foreground md:text-xl text-sm text-center font-normal leading-[170%]">
          ИИ проверяет фото сотрудников, контролирует выполнение задач и
          напоминает о важном. Вы видите только то, что действительно требует
          внимания.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:px-0 px-2 md:gap-6 gap-2 items-center md:w-auto w-full">
        <Button
          title={"ПОПРОБОВАТЬ"}
          icon={<ArrowRight />}
          iconPosition={"right"}
          className={
            "font-extrabold sm:text-base text-xs md:w-auto w-full bg-linear-to-br py-3 px-6 rounded-lg from-[#24C367] to-[#0AB7CD] text-white hover:transform hover:scale-102 hover:opacity-75"
          }
          href={"https://letuchka-delta.vercel.app/auth"}
          target={"_blank"}
          rel={"noopener noreferrer nofollow"}
        />

        <ModalVideo
          buttonStyle={
            "font-extrabold sm:text-base text-xs py-3 px-6 md:w-auto w-full  rounded-lg bg-white border border-[#F3F4F6] text-foreground hover:transform hover:scale-102 hover:bg-[#F3F4F6] "
          }
        />
      </div>
    </section>
  );
}

const ShadowFlare = () => {
  return (
    <figure
      className="absolute xl:w-auto sm:w-full w-77 -z-1 xl:top-9.5 top-15 xl:-right-41.5 right-0 select-none resize-none"
      style={{ userGrad: "none" }}
    >
      <Image draggable={false} src={shadowFlare} alt="shadow-flare" />
    </figure>
  );
};

const AnimatedBlock = () => {
  return (
    <div className="absolute xl:top-40 lg:top-68 lg:visible invisible xl:-right-24 right-0 cursor-default select-none flex flex-col gap-3 animate-float-x">
      <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.776217 6.35582C-1.26426 3.55282 0.984208 -0.341637 4.43191 0.0239706L21.183 1.80032C24.061 2.10552 25.6724 5.2716 24.2253 7.77802L17.3881 19.6204C15.941 22.1268 12.3935 22.3144 10.6901 19.9745L0.776217 6.35582Z"
          fill="#C0F77B"
        />
      </svg>

      <p className="bg-[#C1F87C] py-1.5 px-6 rounded-full rounded-tl-none font-extrabold text-[#666666] text-sm">
        Ценим ваше время
      </p>
    </div>
  );
};
