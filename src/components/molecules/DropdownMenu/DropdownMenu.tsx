import { useState } from "react";
import Input from "../../atoms/Input";
import IconLabel from "../../atoms/IconLabel";
import { ProfileCard } from "../Sidebar/Sidebar";
import clsx from "clsx";

const DropdownMenu = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const menuGroups = [
    {
      title: "Platform",
      items: [
        {
          label: "Home",
          icon: "home",
          iconClassName: "text-blue-icon",
        },
        {
          label: "Publications",
          icon: "publications",
          iconClassName: "text-gray-icon",
        },
        {
          label: "People",
          icon: "network",
          iconClassName: "text-blue-icon",
        },
        {
          label: "Entities",
          icon: "office-building",
          iconClassName: "text-gray-icon",
        },
        {
          label: "Administration",
          icon: "shield",
          iconClassName: "text-blue-icon",
        },
      ],
    },
    {
      title: "Workspaces",
      items: [
        {
          label: "Client contract",
          icon: "pencil",
          iconClassName: "text-gray-icon",
        },
        {
          label: "Supplier contract",
          icon: "pencil",
          iconClassName: "text-gray-icon",
        },
        {
          label: "Corporate",
          icon: "office-building",
          iconClassName: "text-gray-icon",
        },
        {
          label: "Group Norms",
          icon: "color-swatch",
          iconClassName: "text-gray-icon",
        },
        {
          label: "Real estate contracts",
          icon: "pencil",
          iconClassName: "text-gray-icon",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col flex-1 pl-3 pt-1.5">
      <Input
        placeholder="Filter..."
        onChange={(e) => setSearchPhrase(e.currentTarget.value)}
        className="flex flex-1 px-2 py-1.5 mr-3 text-sm border rounded border-gray-light"
      />
      <div className="flex flex-1 overflow-y-scroll border-b border-gray-light">
        <div className="w-full">
          {menuGroups.map(({ title, items }) => (
            <div key={`menuGroup-${title}`} className="flex flex-col mt-1">
              <label className="text-xs font-semibold text-gray-400">
                {title}
              </label>
              {items.map(({ label, iconClassName, icon }) => (
                <IconLabel
                  label={label}
                  iconName={icon}
                  className="py-1"
                  iconClassName={clsx("w-6 h-6 mr-4", iconClassName)}
                  labelClassName="text-base"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pb-1 pt-1.5 border-b border-gray-light">
        <label className="mb-1.5 text-xs font-semibold text-gray-400">
          Account
        </label>
        <ProfileCard type="small" />
        <IconLabel
          label="Privacy"
          iconType="outlined"
          iconName="lock"
          className="py-1"
          iconClassName={clsx("w-6 h-6 mr-4")}
          labelClassName="text-base"
        />
        <IconLabel
          label="Settings"
          iconType="outlined"
          iconName="gear"
          className="py-1"
          iconClassName={clsx("w-6 h-6 mr-4")}
          labelClassName="text-base"
        />
      </div>
      <div className="flex justify-center py-2">
        <IconLabel
          label="Logout"
          iconType="outlined"
          iconName="logout"
          className="transform -translate-x-2"
          iconClassName="w-6 h-5 text-gray-icon-light mr-2"
          labelClassName="font-light text-sm text-gray-icon"
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
