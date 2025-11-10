import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

import CreateTask from "@/assets/img/screenshots/create-task.png";
import Deadline from "@/assets/img/screenshots/deadline.png";
import DashboardScreenshot from "@/assets/img/dashboard.png";

// "Руководитель настраивает задачу за минуту: выбирает, кому и когда она приходит — ежедневно, разово, по дням недели или месяца. Указывает тип подтверждения: фото, текст или кнопка “выполнено”."

export default function HowItWorks() {
  return (
    <section className="flex flex-col sm:gap-15 gap-4" id="how-it-works">
      <SectionTitle
        title={"Наш цикл: 3 шага к порядку и дисциплине без вашего участия"}
        description={
          "Вам больше не нужно следить за сотрудниками и дублировать сообщения в чатах. Мы создали автономный цикл, где руководитель только задает стандарты в удобной Web-панели, а система берет на себя все напоминания, сбор фотоотчетов через Telegram и аналитику. Ваше участие требуется только для просмотра готового результата."
        }
        label={"АВТОМАТИЗАЦИЯ КОНТРОЛЯ"}
        labelStyle={"border-[#C9FF85] bg-[rgba(201,255,133,0.15)]"}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
        <Card
          label={"Контроль в деталях"}
          title={"Активация стандарта"}
          text={
            "Руководитель настраивает задачу за минуту: выбирает, кому и когда она приходит — ежедневно, разово, по дням недели или месяца. Указывает тип подтверждения: фото, текст или кнопка “выполнено”."
          }
          img={CreateTask}
          style={"bg-[rgba(153,102,204,0.15)] text-foreground "}
        />
        <Card
          label={"Простота для команды"}
          title={"Уведомление и ответ"}
          text={
            "Мгновенное уведомление в Telegram точно по расписанию. Ответ с фото занимает у сотрудника менее 30 секунд."
          }
          img={Deadline}
          //   style={"bg-[#4ECDC4] text-white"}
          style="bg-[rgba(78,205,196,0.15)] text-foreground"
        />
        <Card
          label={"Мгновенная аналитика"}
          title={"Дашборд: фиксация результата"}
          text={
            "Система автоматически фиксирует время ответа, прикрепляет фото и окрашивает статус в зеленый/красный."
          }
          imgStyle="max-h-full shadow-report"
          img={DashboardScreenshot}
          //   style={"bg-[#FFD97D] col-span-2 text-foreground"}
          style="bg-[rgba(255,217,125,0.15)] lg:col-span-2 text-foreground"
        />
      </div>
    </section>
  );
}

// col-span-2 - полная ширина для грида

const Card = ({ label, title, text, img, style, imgStyle }) => {
  return (
    <div
      className={`p-10 rounded-4xl ${style} flex flex-col gap-7.5 justify-between`}
    >
      <div className="flex flex-col gap-4">
        <div className="py-0.5 px-4 bg-white w-max rounded-full ">
          <p className="font-bold sn:text-sm text-xs leading-[170%] text-foreground">
            {label}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="lg:text-4xl text-xl font-bold leading-[115%]">
            {title}
          </h3>
          <p className="font-normal lg:text-lg text-sm leading-[170%] ">
            {text}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className={`rounded-xl max-h-70 object-cover ${imgStyle}`}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};
