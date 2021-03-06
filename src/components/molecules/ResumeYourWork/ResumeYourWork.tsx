import { useAppSelector } from "@redux/hooks";
import { filters, selectFilterOptions } from "@/constants";
import { getRandomArrayItem, filterByText } from "@helpers/common";
import Input from "@components/atoms/Input";
import React, { useState, useMemo } from "react";
import Filter from "@components/atoms/Filter";
import SelectFilter from "@components/atoms/SelectFilter";
import ResumeItem from "@components/molecules/ResumeItem";
import { Link } from "react-router-dom";
import { PublicationType } from "@/types/global";

type ResumeYourWorkProps = {
  publications: PublicationType[];
  withFilters?: boolean;
  label?: string;
};

const ResumeYourWork = ({
  publications: _publications,
  label,
  withFilters,
}: ResumeYourWorkProps) => {
  const userData = useAppSelector((state) => state.user);
  const { id: user_id } = userData || {};

  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("followed");
  const [enabledFilters, setEnabledFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

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
    const foundItems: string[] = filterByText(
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

  return (
    <section className="pt-2.5 w-full min-h-screen">
      <div className="flex flex-col justify-between w-full overflow-x-scroll md:flex-row md:overflow-x-auto">
        <h2 className="text-xl font-semibold md:pl-4">{label}</h2>
        <div className="flex items-center mb-2.5 space-x-8">
          <Input
            onChange={handleInput}
            placeholder="Filter by title..."
            className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
            icon="search"
            iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
            wrapperClassName="flex flex-1 max-w-lg"
          />
          <SelectFilter
            value={filterValue}
            onChange={handleSelect}
            options={selectFilterOptions}
          />
        </div>
      </div>
      {withFilters && (
        <div className="flex items-center justify-start w-full mb-2 space-x-3 overflow-x-scroll md:overflow-x-auto">
          <Filter
            label="All"
            bgClassName="bg-white"
            onChange={() => setEnabledFilters([])}
            checked={!enabledFilters.length}
          />
          {filters.map(({ label, value, icon, bgClassName }) => (
            <Filter
              key={`filter-${value}`}
              label={label}
              icon={icon}
              value={value}
              bgClassName={bgClassName}
              onChange={handleFilterChange}
              checked={!!value && enabledFilters.includes(value)}
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
        ).map(({ id, owner, publishDate, text, tags }) => (
          <Link key={`resume-${id}`} to={`/publications/${id}`}>
            <ResumeItem
              title={text}
              user={owner}
              updatedAt={publishDate}
              tags={(withFilters && tags) || []}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ResumeYourWork;
