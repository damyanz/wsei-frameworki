import IconLabel from "@components/atoms/IconLabel";
import Input from "@components/atoms/Input";
import SelectFilter from "@components/atoms/SelectFilter";

const Filters = () => {
  return (
    <div className="absolute z-10 flex flex-col flex-1 w-auto px-4 py-3 mt-1 bg-white rounded shadow top-full">
      <span className="text-sm text-gray-icon">
        Rows are filtered by the following conditions starting from the top.
      </span>
      <div className="flex flex-col py-3 space-y-2">
        <Filter />
        <Filter />
        <Filter />
      </div>
      <div className="flex items-center">
        <IconLabel
          label="Add filter"
          labelClassName="text-blue-800 text-sm mr-7"
          iconName="plus"
          iconType="outlined"
          iconClassName="w-6 h-6 text-blue-800"
        />
        <SelectFilter
          value="choose"
          options={[{ label: "choose property", value: "choose" }]}
          className="text-sm text-blue-800"
        />
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="flex items-center text-sm">
      <IconLabel
        label="Where"
        labelClassName="text-gray-700 ml-2"
        iconName="x"
        iconType="outlined"
        iconClassName="w-6 h-6 text-gray-700"
        className="w-20 mr-8"
      />
      <SelectFilter
        value="status"
        options={[{ label: "Status", value: "status" }]}
        className="mr-4 text-gray-700"
      />
      <SelectFilter
        value="is"
        options={[{ label: "Is", value: "is" }]}
        className="mr-2 text-gray-700"
      />
      <Input
        type="text"
        onChange={() => null}
        wrapperClassName="border rounded-sm w-28 mr-2"
        className="p-1 text-sm disabled:bg-gray-200"
        placeholder="Type..."
        disabled
      />
      <SelectFilter
        value="in"
        options={[{ label: "In", value: "in" }]}
        className="mr-2 text-gray-700"
      />
      <Input
        type="text"
        onChange={() => null}
        wrapperClassName="border rounded-sm w-28"
        className="p-1 text-sm disabled:bg-gray-200"
        placeholder="Entity..."
        disabled
      />
    </div>
  );
};

export default Filters;
