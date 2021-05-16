import clsx from "clsx";
import Icon from "../../atoms/Icon";

type InputType = {
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: "search";
  iconClassName?: string;
  wrapperClassName?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const Input = ({
  type = "text",
  placeholder,
  onChange,
  className,
  icon,
  iconClassName,
  wrapperClassName,
  disabled,
}: InputType) => {
  return (
    <div className={clsx("relative", wrapperClassName)}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx("w-full", className)}
        disabled={disabled}
      />
      {icon && <Icon name={icon} className={clsx("absolute", iconClassName)} />}
    </div>
  );
};

export default Input;
