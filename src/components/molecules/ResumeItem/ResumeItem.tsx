import dayjs from "dayjs";
import PersonLabel from "../../atoms/PersonLabel";
import IconLabel from "../../atoms/IconLabel";
import Filter from "../../atoms/Filter";
import { workspaces, filters } from "../../../constants";
import { getRandomArrayItem } from "../../../helpers/common";

type ResumeItemType = {
  title: string;
  user: any;
  updatedAt: string;
  tags?: any[];
};

const ResumeItem = ({ title, user, updatedAt, tags }: ResumeItemType) => {
  const workspace = getRandomArrayItem(workspaces);
  const updateTime = dayjs(updatedAt).fromNow();
  return (
    <div className="flex cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition duration-300 transform flex-col flex-shrink-0 bg-white rounded shadow  px-4 pt-2.5 pb-2">
      <h2 className="mb-1 font-semibold text-blue-800 text-md">{title}</h2>
      <p className="mb-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        perferendis deserunt vel sunt a in et unde ab harum? Ipsum quibusdam,
        doloribus consequuntur debitis laboriosam animi perferendis repellendus
        consectetur placeat.
      </p>
      <div className="flex space-x-2.5 items-center">
        {tags?.length ? (
          <div className="flex space-x-2">
            {tags.map((tag) => {
              const { label, icon, bgClassName }: any = filters.find(
                ({ value }) => tag === value
              );
              return (
                <Filter label={label} icon={icon} bgClassName={bgClassName} />
              );
            })}
          </div>
        ) : (
          <>
            <PersonLabel person={user} labelClassName="text-gray-500 text-xs" />
            <span>∙</span>
            <IconLabel
              label={workspace.label}
              iconName={workspace.icon}
              iconClassName="w-3 h-3 text-gray-500"
              labelClassName=" text-sm text-gray-500"
            />
          </>
        )}
        <span>∙</span>
        <span className="text-sm text-gray-400">
          Updated {updateTime} by {user.firstName} {user.lastName}
        </span>
      </div>
    </div>
  );
};

export default ResumeItem;
