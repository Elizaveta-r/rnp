"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const renderItemsData = [
  {
    href: "#convenient",
    title: "Почему это удобно",
  },
  {
    href: "#features",
    title: "Возможности",
  },
  {
    href: "#how-it-works",
    title: "Как это работает",
  },
];

const RenderMenuItem = ({ href, title, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    const headerOffset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (onClick) onClick();
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="leading-none font-semibold text-[#666666] duration-300 ease-in hover:text-[#1F2937] cursor-pointer"
      >
        {title}
      </a>
    </li>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white mx-auto w-full xl:px-[100px] lg:px-6 md:px-3 sm:px-3 px-3 shadow-sm">
      <div className="py-4 md:px-0 sm:px-3 px-0 flex items-center justify-between md:gap-4 gap-2">
        <div className="flex items-center gap-8 lg:gap-8 md:gap-6 sm:gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span
                aria-hidden="true"
                className="w-8 h-8 md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 rounded-lg md:rounded-lg rounded-md bg-linear-to-br from-[#C6FC81] to-[#ACE565]"
              />
              <span className="text-xl md:text-xl sm:text-lg text-base font-semibold">
                Название
              </span>
            </Link>
          </div>
          <nav aria-label="Основная навигация" className="md:block hidden">
            <ul className="flex gap-1 md:gap-3 lg:gap-7 m-0 p-0 pt-1 list-none">
              {renderItemsData.map((item) => (
                <RenderMenuItem key={item.href} {...item} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Десктоп кнопки */}
        <div className="md:flex hidden  md:gap-3 sm:gap-4 gap-3">
          <a
            className="font-bold text-[#1F2937] self-center cursor-pointer duration-300 ease-in hover:text-[#24C367] md:text-base sm:text-sm text-xs"
            href="https://letuchka-delta.vercel.app/auth"
            rel="nofollow"
          >
            Войти
          </a>
          <a
            href="https://letuchka-delta.vercel.app/reg"
            rel="nofollow"
            className="px-5 py-3 md:px-5 md:py-3 sm:px-4 sm:py-2 px-3 py-2 rounded-md bg-[#1F2937] text-white font-bold cursor-pointer duration-300 ease-in hover:bg-[#24C367] md:text-base sm:text-sm text-xs whitespace-nowrap"
          >
            Регистрация
          </a>
        </div>

        {/* Бургер кнопка */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          aria-label="Меню"
        >
          {isMenuOpen ? (
            <X size={24} color="#1F2937" />
          ) : (
            <Menu size={24} color="#1F2937" />
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`z-1 md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Мобильная навигация"
          className="px-6 py-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4 m-0 p-0 list-none">
            {renderItemsData.map((item) => (
              <RenderMenuItem key={item.href} {...item} onClick={closeMenu} />
            ))}
          </ul>

          <div className="h-px bg-gray-200"></div>

          <div className="flex flex-col gap-3">
            <a
              className="font-bold text-[#1F2937] text-center py-3 cursor-pointer duration-300 ease-in hover:text-[#24C367]"
              href="https://letuchka-delta.vercel.app/auth"
              rel="nofollow"
              onClick={closeMenu}
            >
              Войти
            </a>
            <a
              href="https://letuchka-delta.vercel.app/reg"
              rel="nofollow"
              className="px-5 py-3 rounded-md bg-[#1F2937] text-white font-bold text-center cursor-pointer duration-300 ease-in hover:bg-[#24C367]"
              onClick={closeMenu}
            >
              Регистрация
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed z-0 inset-0 bg-black/20 backdrop-blur-sm top-[72px]"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
