import { useState } from "react";
import Icon from "@components/atoms/Icon";
import IconLabel from "@components/atoms/IconLabel";

const WorkspaceCard = ({ workspace }: any) => {
  const { icon, label, picture } = workspace;
  const [pictureLoaded, setPictureLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col flex-shrink-0 overflow-hidden transition duration-300 transform bg-white rounded shadow cursor-pointer hover:shadow-md hover:-translate-y-1 w-60">
      <div className="relative h-20 overflow-hidden">
        {!pictureLoaded && (
          <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
        )}
        {picture && (
          <img
            src={picture}
            alt={label}
            onLoad={() => setPictureLoaded(true)}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="flex flex-col justify-end px-2 pb-2">
        <div className="relative flex mb-4">
          <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded shadow -top-6">
            <Icon name={icon} className="w-2/3 text-gray-400 h-2/3" />
          </div>
          <h3 className="pt-1.5 pl-2 ml-20 font-semibold w-3/5 truncate">
            {label}
          </h3>
        </div>
        <div className="flex flex-grow-0 max-w-full mt-4 space-x-2 overflow-hidden overflow-ellipsis">
          <IconLabel
            label={label}
            iconName={icon}
            iconType="outlined"
            iconClassName="w-4 h-4 mr-2 text-gray-500"
            labelClassName="text-sm truncate text-gray-500"
          />
          <span>∙</span>
          <IconLabel
            label="150 users"
            title="150 users"
            iconName={icon}
            iconType="outlined"
            iconClassName="w-4 h-4 mr-2 text-gray-500"
            labelClassName="text-sm text-gray-500 whitespace-nowrap"
          />
        </div>
        <span className="mt-2 text-xs text-gray-icon-light">
          Last update 2 days ago
        </span>
      </div>
    </div>
  );
};

export default WorkspaceCard;
