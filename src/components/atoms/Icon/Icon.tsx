import {
  UsersIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  HomeIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  PencilAltIcon,
  ColorSwatchIcon,
} from "@heroicons/react/solid";
import {
  UserAddIcon,
  PlusIcon,
  GlobeAltIcon,
  LockClosedIcon,
  CogIcon,
  LogoutIcon,
  PencilAltIcon as PencilAltIconOutlined,
  UsersIcon as UsersIconOutlined,
} from "@heroicons/react/outline";
import { SVGProps } from "react";

type IconsType = {
  [x: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const solidIcons: IconsType = {
  publications: NewspaperIcon,
  network: UsersIcon,
  home: HomeIcon,
  "office-building": OfficeBuildingIcon,
  "chevron-down": ChevronDownIcon,
  shield: ShieldCheckIcon,
  pencil: PencilAltIcon,
  "color-swatch": ColorSwatchIcon,
};

const outlinedIcons: IconsType = {
  "user-add": UserAddIcon,
  plus: PlusIcon,
  "globe-alt": GlobeAltIcon,
  lock: LockClosedIcon,
  gear: CogIcon,
  logout: LogoutIcon,
  pencil: PencilAltIconOutlined,
  network: UsersIconOutlined,
};

const Icon = ({ name, type = "solid", ...rest }: any) => {
  const IconElement = type === "solid" ? solidIcons[name] : outlinedIcons[name];
  return <IconElement {...rest} />;
};

export default Icon;
