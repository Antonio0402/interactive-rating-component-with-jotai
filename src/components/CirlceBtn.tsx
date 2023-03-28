import { useAtom } from "jotai";
import React from "react";
import { rateAtom } from "../store";

const CircleBtn: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ title, children, ...rest }) => {
  const [rate, setRate] = useAtom(rateAtom);
  return (
    <li
      className="text-text-base text-number bg-card-fill brightness-125 w-10 sm:w-[50px] h-10 sm:h-[50px] rounded-full hover:bg-primary hover:text-white aria-checked:text-white hover:brightness-100 grid place-items-center aria-checked:bg-card-active aria-checked:brightness-100 relative"
      aria-checked={rate === title}
    >
      <input
        type="radio"
        id={title}
        name="rate"
        value={title}
        className="sr-only"
        checked={rate === title}
        onChange={(e) => setRate(e.target.value)}
        {...rest}
      />
      <label
        className="before:content-[''] before:w-full before:h-full before:absolute before:rounded-full before:z-10 cursor-pointer"
        htmlFor={title}
      >
        {title}
      </label>
    </li>
  );
};

export default CircleBtn;
