import PersonLabel from "../../atoms/PersonLabel";
import IconLabel from "../../atoms/IconLabel";
import { workspaces } from "../../../constants";
import { getRandomArrayItem, filterByText } from "../../../helpers/common";
import dayjs from "dayjs";
import Input from "../../atoms/Input";
import { useState } from "react";

type ResumeYourWorkType = {
  publications: any[];
};

const ResumeYourWork = ({ publications }: ResumeYourWorkType) => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  console.log(publications);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchPhrase(e.currentTarget.value);
    const foundItems = filterByText(
      e.currentTarget.value,
      publications.map(({ text }) => text)
    );
    setFilteredItems(foundItems);
  };

  return (
    <section className="pt-2.5">
      <div className="flex justify-between">
        <h2 className="pl-4 text-xl font-semibold">Resume your work</h2>
        <div className="flex items-center mb-2.5">
          <Input
            onChange={handleInput}
            placeholder="Filter by title..."
            className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
            icon="search"
            iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
            wrapperClassName="flex flex-1 max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {(searchPhrase.length > 0
          ? publications.filter((publication) =>
              filteredItems.includes(publication.text)
            )
          : publications
        ).map(({ owner, publishDate, text }) => (
          <ResumeItem title={text} user={owner} updatedAt={publishDate} />
        ))}
      </div>
    </section>
  );
};

type ResumeItemType = {
  title: string;
  user: any;
  updatedAt: string;
};

const ResumeItem = ({ title, user, updatedAt }: ResumeItemType) => {
  const workspace = getRandomArrayItem(workspaces);
  const updateTime = dayjs(updatedAt).fromNow();
  return (
    <div className="flex flex-col flex-shrink-0 bg-white rounded shadow  px-4 pt-2.5 pb-2">
      <h2 className="mb-1 font-semibold text-blue-800 text-md">{title}</h2>
      <p className="mb-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        perferendis deserunt vel sunt a in et unde ab harum? Ipsum quibusdam,
        doloribus consequuntur debitis laboriosam animi perferendis repellendus
        consectetur placeat.
      </p>
      <div className="flex space-x-2.5 items-center">
        <PersonLabel person={user} labelClassName="text-gray-500 text-xs" />
        <span>∙</span>
        <IconLabel
          label={workspace.label}
          iconName={workspace.icon}
          iconClassName="w-3 h-3 text-gray-500"
          labelClassName=" text-sm text-gray-500"
        />
        <span>∙</span>
        <span className="text-sm text-gray-400">
          Updated {updateTime} by {user.firstName} {user.lastName}
        </span>
      </div>
    </div>
  );
};

export default ResumeYourWork;
