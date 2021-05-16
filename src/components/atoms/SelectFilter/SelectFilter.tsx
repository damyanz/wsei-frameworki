import Icon from "../Icon";
import clsx from "clsx";

const SelectFilter = ({ value, onChange, options, variant }: any) => {
  const selectedOption = options.find((option: any) => option.value === value);

  return (
    <div className={clsx("flex items-center")}>
      <Icon
        name={selectedOption.icon}
        type="outlined"
        className="w-6 h-6 mr-1 text-blue-800"
      />
      <select
        onChange={onChange}
        value={value}
        className="relative text-blue-800 bg-transparent"
      >
        {options.map((option: any) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;