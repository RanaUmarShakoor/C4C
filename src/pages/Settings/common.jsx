import clsx from "clsx";
import React from "react";

export function Input({
  label,
  className,
  containerClass,
  right = null,
  ...rest
}) {
  return (
    <div className={containerClass}>
      <h1 className="mb-1">{label}</h1>
      <div
        className={clsx(
          "flex border items-center border-[#0094FF] w-full rounded-md overflow-hidden",
          className
        )}
      >
        <input
          {...rest}
          className="flex-1 outline-none py-1.5 px-2.5"
          size={1}
        />
        {right}
      </div>
    </div>
  );
}
export function TextArea({ label, className, containerClass, ...rest }) {
  return (
    <div className={containerClass}>
      <h1 className="mb-1">{label}</h1>
      <textarea
        {...rest}
        className={clsx(
          "border border-[#0094FF] w-full py-1.5 px-2.5 rounded-md h-28",
          className
        )}
        size={1}
      />
    </div>
  );
}
