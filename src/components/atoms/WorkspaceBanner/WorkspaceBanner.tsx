import Icon from "@components/atoms/Icon";
import { BannerType } from "@/types/global";

const WorkspaceBanner = ({
  icon,
  title,
  description,
}: Pick<BannerType, "icon" | "title" | "description">) => {
  return (
    <div className="relative flex flex-col py-4 pl-3 pr-8 space-y-3 bg-white rounded shadow">
      <Icon
        name={icon}
        className="absolute top-0 right-0 w-48 h-48 text-blue-800 opacity-10"
      />
      <Icon name={icon} className="w-10 h-10 text-blue-800" />
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WorkspaceBanner;
