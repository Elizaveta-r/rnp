"use client";

import React from "react";

export default function Button({
  className,
  onClick,
  title,
  icon,
  iconPosition,
}) {
  return (
    <button
      className={`cursor-pointer duration-300 ease-in flex items-center justify-center gap-4 ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon}
      {title}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
