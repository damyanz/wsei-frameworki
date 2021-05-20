import { useState } from "react";
import clsx from "clsx";
import Icon from "@components/atoms/Icon";

const WorkspaceHeading = ({ workspace, className }: any) => {
  const [pictureLoaded, setPictureLoaded] = useState<boolean>(false);
  const { icon, label, picture } = workspace;
  return (
    <div
      className={clsx(
        "flex flex-col shadow rounded overflow-hidden",
        className
      )}
    >
      <div className="relative flex w-full overflow-hidden bg-red-300">
        {!pictureLoaded && (
          <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
        )}
        {picture && (
          <img
            src={picture}
            alt={label}
            onLoad={() => setPictureLoaded(true)}
            className="object-cover w-full h-28"
          />
        )}
      </div>
      <div className="relative flex items-center w-full pt-3 pb-4 pl-4 pr-6 bg-white h-5/12">
        <Icon
          name="gear"
          type="outlined"
          className="absolute w-4 h-4 top-3 right-5 text-gray-icon"
        />
        <Icon
          name={icon}
          className="flex-shrink-0 w-10 h-10 mr-4 text-gray-icon"
        />
        <div className="flex-col">
          <h2 className="mb-1.5 text-lg font-semibold">{label}</h2>
          <p className="text-gray-400 font-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            labore voluptates eum temporibus ea, architecto iste hic ut, aperiam
            dolorum, ullam veritatis unde voluptatem neque asperiores. Nam iusto
            alias reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeading;
