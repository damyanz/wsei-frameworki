import {
  UsersIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  HomeIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  PencilAltIcon,
  ColorSwatchIcon,
  SearchIcon,
  CubeTransparentIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import {
  UserAddIcon,
  PlusIcon,
  GlobeAltIcon,
  LockClosedIcon,
  CogIcon,
  LogoutIcon,
  UserIcon,
  DocumentTextIcon,
  CheckIcon,
  PencilAltIcon as PencilAltIconOutlined,
  UsersIcon as UsersIconOutlined,
  ColorSwatchIcon as ColorSwatchIconOutlined,
  OfficeBuildingIcon as OfficeBuildingIconOutlined,
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
  search: SearchIcon,
  cube: CubeTransparentIcon,
  calendar: CalendarIcon,
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
  "color-swatch": ColorSwatchIconOutlined,
  "office-building": OfficeBuildingIconOutlined,
  user: UserIcon,
  document: DocumentTextIcon,
  check: CheckIcon,
};

const Icon = ({ name, type = "solid", ...rest }: any) => {
  const IconElement = type === "solid" ? solidIcons[name] : outlinedIcons[name];
  return <IconElement {...rest} />;
};

export default Icon;
