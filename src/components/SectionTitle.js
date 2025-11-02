import React from "react";

export default function SectionTitle({
  label,
  labelStyle,
  title,
  description,
}) {
  return (
    <div className="relative flex flex-col items-center gap-4 text-center mt-10">
      {label && (
        <figure
          className={`${labelStyle} swing absolute left-1/2 -translate-x-1/2 -top-7.5 py-2 px-4 rounded-full border -rotate-6`}
        >
          <p className="font-bold sm:text-xs text-[10px] leading-none text-foreground">
            {label}
          </p>
        </figure>
      )}

      <h2 className="font-bold sm:text-[56px] text-3xl text-foreground leading-[120%]">
        {title}
      </h2>
      <p className="font-normal sm:text-lg text-base text-foreground leading-[170%]">
        {description}
      </p>
    </div>
  );
}
