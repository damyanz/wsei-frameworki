import IconLabel from "@components/atoms/IconLabel";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pl-10">
      <IconLabel
        label="404"
        labelClassName="text-gray-700 text-6xl font-light"
        iconName="hashtag"
        iconType="outlined"
        iconClassName="w-12 h-12 text-gray-700"
      />
      <span className="mt-2 text-2xl font-semibold">Page not found 😨</span>
    </div>
  );
};

export default NotFound;
