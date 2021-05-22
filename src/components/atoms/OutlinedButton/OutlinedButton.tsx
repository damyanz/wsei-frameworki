import { IconNameType } from "@/types/icons";
import Icon from "@components/atoms/Icon";
import clsx from "clsx";

type OutlinedButtonProps = {
  name?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconName: IconNameType;
};

const OutlinedButton = ({
  name,
  className,
  onClick,
  iconName,
}: OutlinedButtonProps) => {
  return (
    <button
      className={clsx(
        "border-blue-icon border shadow rounded-md px-2 py-1",
        className
      )}
      onClick={onClick}
      aria-label={name}
      name={name}
    >
      <Icon name={iconName} className="w-4 h-4" type="outlined" />
    </button>
  );
};

export default OutlinedButton;
