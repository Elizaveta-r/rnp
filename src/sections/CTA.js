import ModalVideo from "@/components/ModalVideo";
import Button from "@/ui/Button";
import { ArrowRight, CirclePlay } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F1FBF5] via-[#E8F9ED] to-[#F1FBF5] lg:py-24 py-8 px-2 sm:px-12 text-center rounded-3xl border border-[#D5F5D0]/30">
      <div className="w-full mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#C6FC81] to-[#ACE565] text-[#1F2937] font-bold sm:text-sm text-[10px] px-5 py-2.5 rounded-full mb-6 shadow-lg shadow-green-200/50 animate-pulse">
          <span className="w-2 h-2 bg-[#1F2937] rounded-full animate-ping absolute"></span>
          <span className="w-2 h-2 bg-[#1F2937] rounded-full"></span>
          <span>Умный помощник уже готов</span>
        </div>

        <h2 className="text-2xl sm:text-6xl font-bold text-[#1F2937] leading-[120%] mb-6">
          Искусственный интеллект берёт на себя рутину
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#24C367] to-[#0AB7CD]">
              Вы — управляете
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-[#24C367]/20 to-[#0AB7CD]/20 blur-sm"></span>
          </span>
        </h2>

        <p className="text-[#666666] text-base sm:text-2xl mb-10 leading-[170%] font-medium">
          <span className="inline-block mr-2">🎯</span>
          Рука на пульсе — это когда всё работает само
          <br />
          <span className="font-semibold text-[#1F2937]">
            Вы видите только результат и принимаете решения
          </span>
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Button
            title={"Попробовать"}
            icon={<ArrowRight />}
            iconPosition={"right"}
            className={
              "font-extrabold bg-linear-to-br py-4 px-6 rounded-full from-[#24C367] to-[#0AB7CD] text-white hover:from-[#1FA855] hover:to-[#0896AD] hover:transform hover:scale-102 hover:opacity-75"
            }
            href={"https://letuchka-delta.vercel.app/auth"}
            target={"_blank"}
            rel={"noopener noreferrer nofollow"}
          />

          <ModalVideo
            buttonStyle={
              "font-extrabold py-4 px-6 rounded-full bg-white border border-[#F3F4F6] text-foreground hover:transform hover:scale-102 hover:text-[#24C367] hover:border-[#24C367] hover:bg-[#F3F4F6] "
            }
          />
        </div>
      </div>

      {/* Улучшенные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-linear-to-tr from-[#24C367]/20 to-[#0AB7CD]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-linear-to-bl from-[#ACE565]/30 to-[#C6FC81]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-[#24C367]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Геометрические акценты */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#24C367]/20 rounded-lg rotate-12 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-16 h-16 bg-linear-to-br from-[#C6FC81] to-[#ACE565] rounded-lg -rotate-12 opacity-40 animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  );
}
