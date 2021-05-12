import { useAppSelector } from "../../../redux/hooks";
import PersonLabel from "../../atoms/PersonLabel";
import IconLabel from "../../atoms/IconLabel";
import { workspaces, filters } from "../../../constants";
import { getRandomArrayItem, filterByText } from "../../../helpers/common";
import dayjs from "dayjs";
import Input from "../../atoms/Input";
import React, { useState, useMemo } from "react";
import Icon from "../../atoms/Icon";
import Filter from "../../atoms/Filter";

type ResumeYourWorkType = {
  publications: any[];
  withFilters?: boolean;
};

const ResumeYourWork = ({
  publications: _publications,
  withFilters,
}: ResumeYourWorkType) => {
  const userData = useAppSelector((state) => state.user);
  const { id: user_id } = userData || {};

  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("followed");
  const [enabledFilters, setEnabledFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  const publications = useMemo(
    () =>
      _publications.map(
        (publication) => ({
          ...publication,
          tags: [getRandomArrayItem(filters.map(({ value }) => value))],
        }) //add random filter tag
      ),
    [_publications]
  )
    .filter(
      ({ tags }) =>
        !enabledFilters.length ||
        enabledFilters.some((value) => tags.includes(value))
    ) // filter by selected tags
    .filter(({ owner }) => filterValue === "followed" || owner.id === user_id); //filter by author

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchPhrase(e.currentTarget.value);
    const foundItems = filterByText(
      e.currentTarget.value,
      publications.map(({ text }) => text)
    );
    setFilteredItems(foundItems);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilterValue(e.currentTarget.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked, value } = e.currentTarget;
    if (checked) {
      setEnabledFilters([...enabledFilters, value]);
    } else {
      setEnabledFilters(enabledFilters.filter((filter) => filter !== value));
    }
  };

  console.log(publications);
  return (
    <section className="pt-2.5 w-full">
      <div className="flex justify-between w-full">
        <h2 className="pl-4 text-xl font-semibold">Resume your work</h2>
        <div className="flex items-center mb-2.5 space-x-8">
          <Input
            onChange={handleInput}
            placeholder="Filter by title..."
            className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
            icon="search"
            iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
            wrapperClassName="flex flex-1 max-w-lg"
          />
          <div className="flex">
            <Icon
              name={filterValue === "my" ? "user" : "globe-alt"}
              type="outlined"
              className="w-6 h-6 mr-1 text-blue-800"
            />
            <select
              onChange={handleSelect}
              value={filterValue}
              className="relative text-blue-800 bg-transparent"
            >
              <option value="followed">Followed</option>
              <option value="my">My</option>
            </select>
          </div>
        </div>
      </div>
      {withFilters && (
        <div className="flex justify-start w-full mb-2 space-x-3">
          <Filter
            label="All"
            bgClassName="bg-white"
            onChange={() => setEnabledFilters([])}
            checked={!enabledFilters.length}
          />
          {filters.map(({ label, value, icon, bgClassName }) => (
            <Filter
              label={label}
              icon={icon}
              value={value}
              bgClassName={bgClassName}
              onChange={handleFilterChange}
              checked={enabledFilters.includes(value)}
            />
          ))}
        </div>
      )}
      <div className="flex flex-col space-y-2">
        {(searchPhrase.length > 0
          ? publications.filter((publication) =>
              filteredItems.includes(publication.text)
            )
          : publications
        ).map(({ owner, publishDate, text, tags }) => (
          <ResumeItem
            title={text}
            user={owner}
            updatedAt={publishDate}
            tags={withFilters && tags}
          />
        ))}
      </div>
    </section>
  );
};

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

export default ResumeYourWork;
