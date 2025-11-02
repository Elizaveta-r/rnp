import SectionTitle from "@/components/SectionTitle";
import React from "react";

const renderData = [
  {
    title: "1. Всё работает прямо в Telegram",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Не нужно устанавливать никаких приложений. <br /> Вы создаёте{" "}
        <b>собственного Telegram-бота</b> для компании - всего за пару минут.{" "}
        <br />
        Просто отправьте ссылку на бота своим сотрудникам - и{" "}
        <b>половина дела уже сделана</b>.
      </p>
    ),
  },

  {
    title: "2. Умный личный кабинет руководителя",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Войдите в личный кабинет и вставьте <b>код вашего бота</b>. <br />
        Сотрудники появятся в списке после того, как{" "}
        <b>отправят команду /start</b> в чате с ботом. <br />
        Укажите их <b>должности и подразделения</b> - и начинайте создавать
        задачи с нужными сроками исполнения. <br />
        Остальное возьмёт на себя <b>искусственный интеллект</b>.
      </p>
    ),
  },
  {
    title: "3. Для сотрудника всё просто",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Пришёл на работу — нажал <b>Check in</b>. <br /> Дальше бот сам
        отправляет задачи в нужное время, а сотрудник подтверждает выполнение
        фото. <br /> Если фото не соответствует стандарту - ИИ сразу покажет,
        что нужно исправить.
      </p>
    ),
  },
  {
    title: "4. Контроль без стресса",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Руководитель может получать: <br /> - уведомления в Telegram о ходе
        выполнения задач, <br /> - или ежедневный <b>единый отчёт</b> по всем
        сотрудникам. <br /> Подробности - в <b>интерактивном личном кабинете</b>
        : наглядно, удобно, без перегрузки.
      </p>
    ),
  },
];

export default function ComfortablySection() {
  return (
    <section className="flex flex-col sm:gap-15 gap-4" id="convenient">
      <SectionTitle
        title={"4 шага к порядку без усилий"}
        description={
          "Простая система, которая не требует обучения и работает сразу."
        }
        label={"ПОЧЕМУ ЭТО УДОБНО?"}
        labelStyle={"border-[#9966CC] bg-[rgba(153,102,204,0.15)]"}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        {renderData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col sm:gap-8 gap-3 sm:p-10.5 p-6 bg-white rounded-4xl shadow-[0px_0px_14px_rgba(255,217,125,0.28)]">
      <h3 className="lg:text-4xl text-xl font-bold leading-[120%] text-foreground">
        {title}
      </h3>
      {description}
    </div>
  );
};
