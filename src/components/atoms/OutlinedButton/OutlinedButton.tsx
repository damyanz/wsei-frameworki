import Icon from "@components/atoms/Icon";
import clsx from "clsx";

const OutlinedButton = ({ className, onClick, iconName }: any) => {
  return (
    <button
      className={clsx(
        "border-blue-icon border shadow rounded-md px-2 py-1",
        className
      )}
      onClick={onClick}
    >
      <Icon name={iconName} className="w-4 h-4" type="outlined" />
    </button>
  );
};

export default OutlinedButton;
