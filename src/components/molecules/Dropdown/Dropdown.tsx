import React, { SetStateAction, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import clsx from "clsx";
import IconLabel from "../../atoms/IconLabel";
import Icon from "../../atoms/Icon";
import DropdownMenu from "../DropdownMenu";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div className={clsx("relative w-52")}>
      <div
        className="flex items-center justify-between "
        onClick={() => {
          setIsOpen(true);
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
        <div
          ref={ref}
          className="absolute z-10 w-64 bg-white border-t rounded-b-sm rounded-tr-sm shadow-xl border-gray-light top-full"
        >
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
