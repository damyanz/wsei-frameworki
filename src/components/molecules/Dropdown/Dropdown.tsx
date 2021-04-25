import React, { SetStateAction, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import clsx from "clsx";
import IconLabel from "../../atoms/IconLabel";
import Icon from "../../atoms/Icon";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div className={clsx("relative w-52 bg-red-400")}>
      <div
        className="flex items-center justify-between "
        onClick={() => {
          setIsOpen(true);
          console.log(isOpen);
        }}
      >
        <IconLabel label="Home" iconName="home" iconClassName="w-6 h-6 mr-3" />{" "}
        <Icon
          name="chevron-down"
          className={clsx("w-5 h-5 transform transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div ref={ref} className="absolute w-full bg-red-500 top-full h-96">
          siema
        </div>
      )}
    </div>
  );
};

export default Dropdown;
