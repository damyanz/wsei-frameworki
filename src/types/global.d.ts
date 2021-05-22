import React from "react";
import { IconNameType } from "./icons";

export type UserType = {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  location: {
    city: string;
    country: string;
    state: string;
    street: string;
    timezone: string;
  };
  phone: string;
  picture?: string;
  registerDate: string;
  title: string;
};

export type UserStateType = UserType | null;

export type PublicationType = {
  id: string;
  image?: string;
  likes: number;
  link: string;
  owner: Partial<UserType>;
  publishDate: string;
  tags: string[];
  title: string;
  text: string;
};

export type WorkspaceType = {
  id: number;
  label: string;
  slug?: string;
  icon: IconNameType;
  iconClassName?: string;
  picture: string;
};

export type PlatformType = {
  label: string;
  icon: IconNameType;
  iconClassName?: string;
  slug?: string;
};

export type BannerType = {
  id: string;
  icon: IconNameType;
  title: React.ReactNode;
  link: string;
  description: string;
};

export type FilterType = {
  label: string;
  value?: string;
  icon?: IconNameType;
  bgClassName: string;
};

export type SelectOptionType = {
  id?: number | string;
  value: string;
  label: string;
  icon?: IconNameType;
};

export type TableType = {
  legend: string[];
  records: {
    fields: string[];
  }[];
};
