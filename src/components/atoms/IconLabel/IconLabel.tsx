import Icon from "../Icon";

type IconLabelProps = {
  label: string;
  iconName: string;
  iconType?: "solid" | "outlined";
  iconClassName?: string;
  labelClassName?: string;
};

const IconLabel = ({
  iconName,
  label,
  iconClassName,
  iconType,
  labelClassName,
}: IconLabelProps) => {
  return (
    <div className="flex items-center">
      <Icon name={iconName} className={iconClassName} type={iconType} />
      <span className={labelClassName}>{label}</span>
    </div>
  );
};

export default IconLabel;
