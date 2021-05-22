import clsx from "clsx";
import Icon from "@components/atoms/Icon";
import { IconNameType, IconTypeType } from "@/types/icons";

type IconLabelProps = {
  label: string;
  iconName: IconNameType;
  iconType?: IconTypeType;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  title?: string;
};

const IconLabel = ({
  label,
  iconName,
  iconType,
  iconClassName,
  className,
  labelClassName,
  title,
}: IconLabelProps) => {
  return (
    <div title={title} className={clsx("flex items-center", className)}>
      <Icon name={iconName} className={iconClassName} type={iconType} />
      <span className={labelClassName}>{label}</span>
    </div>
  );
};

export default IconLabel;
