import React, { useState } from "react";
import Icon from "../Icon";
import clsx from "clsx";

export type ViewType = "mosaic" | "list";

const Switch = ({ label, value, onClick, selected }: any) => {
  return (
    <button
      value={value}
      onClick={onClick}
      type="button"
      className={clsx(
        "flex items-center bg-blue-200 bg-opacity-0 transition-all duration-300 p-1.5 overflow-hidden",
        {
          "w-8": !selected,
          "bg-opacity-100 text-blue-900 w-24": selected,
        }
      )}
    >
      <Icon
        name={value}
        className={clsx("w-5 h-5 flex-shrink-0", {
          "text-gray-icon": !selected,
          "text-blue-900": selected,
        })}
      />
      <span className="ml-1.5 text-sm">{label}</span>
    </button>
  );
};

const ViewSwitch = ({ onTypeSelect, initialType = "mosaic" }: any) => {
  const [viewType, setViewType] = useState<ViewType>(initialType);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setViewType(value as ViewType);
    onTypeSelect(value as ViewType);
  };

  return (
    <div className="flex items-center border rounded">
      <Switch
        label="Mosaic"
        value="mosaic"
        onClick={handleClick}
        selected={viewType === "mosaic"}
      />
      <Switch
        label="List"
        value="list"
        onClick={handleClick}
        selected={viewType === "list"}
      />
    </div>
  );
};
export default ViewSwitch;
