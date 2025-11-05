"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CirclePlay } from "lucide-react";
import Button from "@/ui/Button";

export default function ModalVideo({ buttonStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Блокируем скролл фона при открытии
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <Button
        title={"СМОТРЕТЬ ДЕМО"}
        icon={<CirclePlay />}
        iconPosition={"left"}
        onClick={() => setIsOpen(true)}
        className={buttonStyle}
      />

      {/* Модалка через портал */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-[90vw] max-w-[900px] aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/video/letuchka.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
              <button
                onClick={() => setIsOpen(false)}
                className="
                    absolute top-3 right-4
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    text-2xl font-light
                    bg-black/60 text-white
                    backdrop-blur-sm
                    hover:bg-black/80
                    transition
                "
                aria-label="Закрыть видео"
              >
                &times;
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
