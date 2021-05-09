import { useState } from "react";
import { HomeIcon, BellIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import SearchBar from "../../atoms/SearchBar";
import clsx from "clsx";
import Dropdown from "../Dropdown";
import Input from "../../atoms/Input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex w-screen bg-white shadow-md">
      <div className="relative flex items-center justify-between flex-1 max-w-screen-xl py-1 mx-auto">
        <div className="flex items-center space-x-5">
          <img src="/logo.png" alt="Company" className="h-8" />
          <Dropdown />
        </div>
        <Input
          onChange={() => null}
          placeholder="Search Legalcluster"
          className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
          icon="search"
          iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
          wrapperClassName="flex flex-1 max-w-lg"
        />
        <Cockpit />
      </div>
    </header>
  );
};

const Cockpit = () => {
  return (
    <div className="flex items-center">
      <HomeIcon className="h-5 mr-4 text-gray-icon" />
      <Control name="messages" className="mr-2" />
      <Control name="notifications" count={3} />
    </div>
  );
};

type ControlProps = {
  readonly name: "messages" | "notifications";
  readonly className?: string;
  count?: number;
};

const Control = ({ name, className, count }: ControlProps) => {
  const icon = {
    messages: <ChatAlt2Icon className="h-5 text-gray-icon" />,
    notifications: <BellIcon className="h-5 text-gray-icon" />,
  };

  return (
    <div
      className={clsx(
        "flex relative items-center justify-center w-10 h-10 rounded-full bg-gray-light",
        className
      )}
    >
      {icon[name]}
      {count && (
        <div className="absolute top-0 right-0 px-1.5 rounded-xl text-white text-10 bg-blue-badge">
          {count}
        </div>
      )}
    </div>
  );
};

export default Header;
