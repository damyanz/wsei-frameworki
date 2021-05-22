import { useState, useEffect } from "react";
import useOutsideClick from "@hooks/useOutsideClick";
import clsx from "clsx";
import IconLabel from "@components/atoms/IconLabel";
import Icon from "@components/atoms/Icon";
import DropdownMenu from "@components/molecules/DropdownMenu";
import { useLocation } from "react-router-dom";

interface LocationState {
  pathname: string;
}

const Dropdown = () => {
  const { pathname } = useLocation<LocationState>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative w-44 md:w-52">
      <div
        className="flex items-center justify-between cursor-pointer"
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
          className="absolute z-50 w-64 bg-white border-t rounded-b-sm rounded-tr-sm shadow-xl border-gray-light top-full"
        >
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
