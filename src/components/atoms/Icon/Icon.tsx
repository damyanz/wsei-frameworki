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
  ViewGridIcon,
  ViewListIcon,
  ArrowDownIcon,
  FilterIcon,
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
  UserGroupIcon,
  DotsHorizontalIcon,
  SwitchVerticalIcon,
  ArrowsExpandIcon,
  XIcon,
  ShareIcon,
  ChatIcon,
  HashtagIcon,
  FilterIcon as FilterIconOutlined,
  PencilAltIcon as PencilAltIconOutlined,
  UsersIcon as UsersIconOutlined,
  ColorSwatchIcon as ColorSwatchIconOutlined,
  OfficeBuildingIcon as OfficeBuildingIconOutlined,
} from "@heroicons/react/outline";
import { IconsType, IconNameType, IconTypeType } from "@/types/icons";

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
  mosaic: ViewGridIcon,
  list: ViewListIcon,
  "arrow-down": ArrowDownIcon,
  filter: FilterIcon,
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
  "user-group": UserGroupIcon,
  "dots-horizontal": DotsHorizontalIcon,
  "switch-vertical": SwitchVerticalIcon,
  filter: FilterIconOutlined,
  fullscreen: ArrowsExpandIcon,
  x: XIcon,
  share: ShareIcon,
  chat: ChatIcon,
  hashtag: HashtagIcon,
};

interface IconProps {
  name: IconNameType;
  type?: IconTypeType;
  [x: string]: any;
}

const Icon = ({ name, type = "solid", ...rest }: IconProps) => {
  const IconElement = type === "solid" ? solidIcons[name] : outlinedIcons[name];
  if (!IconElement) return <></>;
  return <IconElement {...rest} />;
};

export default Icon;
