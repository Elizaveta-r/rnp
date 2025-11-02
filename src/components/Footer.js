"use client";
import Link from "next/link";
import React from "react";

const footerLinks = {
  product: [
    { href: "#convenient", title: "Почему это удобно" },
    { href: "#features", title: "Возможности" },
    { href: "#how-it-works", title: "Как это работает" },
  ],
  company: [
    { href: "/about", title: "О нас" },
    { href: "/blog", title: "Блог" },
    { href: "/contacts", title: "Контакты" },
  ],
  legal: [
    { href: "/privacy", title: "Политика конфиденциальности" },
    { href: "/terms", title: "Условия использования" },
  ],
};

export default function Footer() {
  const handleScroll = (e, href) => {
    if (!href.startsWith("#")) return; // для обычных ссылок — не перехватываем

    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 100; // высота шапки
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-linear-to-br from-[#1F2937] to-[#111827] text-white mt-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-linear-to-br from-[#24C367] to-[#0AB7CD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-linear-to-tl from-[#C6FC81] to-[#ACE565] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 xl:px-[100px] md:px-7 sm:px-6 px-4 py-16">
        {/* Верхняя часть */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-12 gap-6 mb-16">
          {/* Логотип и описание */}
          <div className="lg:col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline mb-4"
            >
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-lg bg-linear-to-br from-[#C6FC81] to-[#ACE565]"
              />
              <span className="text-2xl font-bold text-white">Название</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              ИИ-помощник для управления бизнесом. Автоматизируйте рутину и
              сосредоточьтесь на важном.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r hover:from-[#24C367] hover:to-[#0AB7CD] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r hover:from-[#24C367] hover:to-[#0AB7CD] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Продукт */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Продукт</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base cursor-pointer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Поддержка */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>

          {/* Компания */}
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Разделитель */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Нижняя часть */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Название. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Конфиденциальность
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Условия
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
