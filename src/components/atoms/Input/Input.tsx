import clsx from "clsx";

type InputType = {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  type = "text",
  placeholder,
  onChange,
  className,
}: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx("", className)}
    />
  );
};

export default Input;
