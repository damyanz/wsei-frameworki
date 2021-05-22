export enum IconsEnum {
  publications,
  network,
  home,
  shield,
  pencil,
  search,
  cube,
  calendar,
  mosaic,
  list,
  filter,
  plus,
  lock,
  gear,
  logout,
  user,
  document,
  check,
  fullscreen,
  x,
  share,
  chat,
  hashtag,
  "chevron-down",
  "color-swatch",
  "arrow-down",
  "user-add",
  "globe-alt",
  "office-building",
  "user-group",
  "dots-horizontal",
  "switch-vertical",
}
export type IconNameType = keyof typeof IconsEnum;
export type IconTypeType = "solid" | "outlined";
export type IconsType = {
  [key in keyof typeof IconsEnum]?: (
    props: React.SVGProps<SVGSVGElement>
  ) => JSX.Element;
};
