import clsx from "clsx";
import Icon from "../Icon";

type IconLabelProps = {
  label: string;
  iconName: string;
  iconType?: "solid" | "outlined";
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
};

const IconLabel = ({
  label,
  iconName,
  iconType,
  iconClassName,
  className,
  labelClassName,
}: IconLabelProps) => {
  return (
    <div className={clsx("flex items-center", className)}>
      <Icon name={iconName} className={iconClassName} type={iconType} />
      <span className={labelClassName}>{label}</span>
    </div>
  );
};

export default IconLabel;
