import Icon from "@components/atoms/Icon";
import clsx from "clsx";

const Filter = ({
  label,
  icon,
  bgClassName,
  value,
  checked,
  onChange,
}: any) => {
  return (
    <div
      className={clsx(
        "p-1 px-1.5 text-sm rounded shadow-sm cursor-pointer",
        bgClassName
      )}
    >
      <label
        className="flex items-center justify-center cursor-pointer opacity-40"
        htmlFor={value}
      >
        {icon && (
          <Icon name={icon} type="outlined" className="w-4 h-4 mr-1.5" />
        )}
        {label}
        <Icon
          name="check"
          type="outlined"
          className={clsx("w-0 h-5 ml-2 transition-all duration-300", {
            "w-5": checked,
          })}
        />
        <input
          id={value}
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
          className="invisible w-0 h-0"
        />
      </label>
    </div>
  );
};

export default Filter;
