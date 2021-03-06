import { useState } from "react";
import Input from "@components/atoms/Input";
import IconLabel from "@components/atoms/IconLabel";
import { filterByText } from "@helpers/common";
import ProfileCard from "@components/molecules/ProfileCard";
import clsx from "clsx";
import { workspaces, platforms } from "@/constants";
import { Link } from "react-router-dom";
import { WorkspaceType, PlatformType } from "@/types/global";

enum GroupTypeEnum {
  platform,
  workspaces,
}

type MenuItemType = Omit<WorkspaceType, "id" | "picture"> | PlatformType;

type MenuGroupType = {
  title: string;
  type: keyof typeof GroupTypeEnum;
  items: MenuItemType[];
};

const DropdownMenu = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItemType[]>([]);

  const menuGroups: MenuGroupType[] = [
    {
      title: "Platform",
      type: "platform",
      items: platforms.map((platform) => ({
        ...platform,
        iconClassName: "text-blue-icon",
      })),
    },
    {
      title: "Workspaces",
      type: "workspaces",
      items: workspaces.map((workspace) => ({
        ...workspace,
        iconClassName: "text-gray-icon",
      })),
    },
  ];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchPhrase(e.currentTarget.value);
    const foundItems: MenuItemType[] = filterByText(
      e.currentTarget.value,
      menuGroups.flatMap(({ items }) => items),
      "label"
    );
    setFilteredItems(foundItems);
  };

  return (
    <div className="flex flex-col flex-1 pl-3 pt-1.5">
      <Input
        placeholder="Filter..."
        onChange={handleInput}
        className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
        wrapperClassName="mr-3"
      />
      <div className="flex flex-1 overflow-y-scroll border-b border-gray-light">
        <div className="w-full">
          {menuGroups.map(({ title, type, items: _items }) => {
            const items =
              searchPhrase.length > 0
                ? _items.filter((item) =>
                    filteredItems.map(({ label }) => label).includes(item.label)
                  )
                : _items;
            const basePaths: { [key in keyof typeof GroupTypeEnum]: string } = {
              platform: "",
              workspaces: "/workspace",
            };
            if (items.length === 0) return null;
            return (
              <div key={`menuGroup-${title}`} className="flex flex-col mt-1">
                <label className="text-xs font-semibold text-gray-400">
                  {title}
                </label>
                {items.map(({ label, iconClassName, icon, slug }) => (
                  <Link
                    key={`menuItem-${slug}`}
                    to={`${basePaths[type]}/${slug}`}
                  >
                    <IconLabel
                      label={label}
                      iconName={icon}
                      className="py-1"
                      iconClassName={clsx("w-6 h-6 mr-4", iconClassName)}
                      labelClassName="text-base"
                    />
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col pb-1 pt-1.5 border-b border-gray-light">
        <label className="mb-1.5 text-xs font-semibold text-gray-400">
          Account
        </label>
        <Link to="/me">
          <ProfileCard type="small" />
        </Link>
        <Link to="/privacy">
          <IconLabel
            label="Privacy"
            iconType="outlined"
            iconName="lock"
            className="py-1"
            iconClassName={clsx("w-6 h-6 mr-4")}
            labelClassName="text-base"
          />
        </Link>
        <Link to="settings">
          <IconLabel
            label="Settings"
            iconType="outlined"
            iconName="gear"
            className="py-1"
            iconClassName={clsx("w-6 h-6 mr-4")}
            labelClassName="text-base"
          />
        </Link>
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
