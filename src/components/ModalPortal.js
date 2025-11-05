"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  const startY = useRef(null);
  const deltaY = useRef(0);
  const modalRef = useRef(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (startY.current === null) return;
    deltaY.current = e.touches[0].clientY - startY.current;

    // визуальное смещение при свайпе
    if (modalRef.current) {
      modalRef.current.style.transform = `translateY(${deltaY.current}px)`;
      modalRef.current.style.opacity = `${1 - Math.abs(deltaY.current) / 300}`;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(deltaY.current) > 120) {
      onClose(); // свайп вверх или вниз закрывает
    } else if (modalRef.current) {
      // Возвращаем обратно, если свайп короткий
      modalRef.current.style.transform = "translateY(0)";
      modalRef.current.style.opacity = "1";
    }
    startY.current = null;
    deltaY.current = 0;
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl transition-transform duration-200 ease-in-out"
      >
        {children}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-0 right-0 text-white text-4xl bg-black/70 w-12 h-12  rounded-full flex items-center justify-center hover:opacity-75 z-3"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
}
