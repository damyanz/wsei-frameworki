import { useState, useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";
import IconLabel from "../../atoms/IconLabel";
import ViewSwitch from "../../atoms/ViewSwitch";
import EntityCard from "../../atoms/EntityCard";
import SelectFilter from "../../atoms/SelectFilter";
import Filters from "../../molecules/Filters";
import { ViewType } from "../../atoms/ViewSwitch/ViewSwitch";
import { APP_ID } from "../../../env";
import { filterByText } from "../../../helpers/common";
import { selectFilterOptions } from "../../../constants";
import clsx from "clsx";

const Entities = () => {
  const [viewType, setViewType] = useState<ViewType>("mosaic");
  const [publications, setPublications] = useState<any[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState<string>("followed");
  const [sortAscending, setSordAscending] = useState<boolean>(true);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [urlCopied, setUrlCopied] = useState<boolean>(false);
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

  const userData = useAppSelector((state) => state.user);
  const { id: user_id } = userData || {};

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`https://dummyapi.io/data/api/post`, {
          headers: { "app-id": APP_ID },
          cache: "force-cache",
        });
        const { data } = await res.json();
        console.log(data);
        setPublications(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

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

  return (
    <main
      className={clsx(
        "flex flex-col items-start justify-start w-4/5 pl-10 space-y-4",
        {
          "fixed top-0 left-0 w-full bg-gray-section z-50 pr-10 pt-10":
            fullscreen,
        }
      )}
    >
      <section className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full mb-2.5">
          <div className="flex items-center">
            <h2 className="pl-2.5 mr-2.5 text-xl font-semibold">Entities</h2>
            <Icon
              name="gear"
              type="outlined"
              className="w-5 h-5 text-gray-icon"
            />
          </div>
          <ViewSwitch onTypeSelect={(type: ViewType) => setViewType(type)} />
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <SelectFilter
                value="dummy"
                options={[
                  { id: 0, value: "dummy", label: "All", icon: "user-group" },
                ]}
                onChange={handleSelect}
                variant="alt"
                className="px-2 py-1 bg-blue-200 rounded shadow"
              />
              <Icon
                name="dots-horizontal"
                type="outlined"
                className="w-6 h-6 mx-3 text-gray-700"
              />
            </div>
            <div className="flex px-3 space-x-3 border-l border-r border-gray-icon-light">
              <button
                className="focus:outline-none"
                onClick={() => setSordAscending(!sortAscending)}
              >
                <IconLabel
                  label="Sort"
                  labelClassName="text-sm text-gray-icon ml-0.5"
                  iconName="arrow-down"
                  iconClassName={clsx(
                    "h-4 w-4 text-gray-icon transform transition-transform duration-200",
                    {
                      "rotate-180": sortAscending,
                    }
                  )}
                />
              </button>
              <div className="relative flex items-center">
                <button
                  className="focus:outline-none"
                  onClick={() => setFiltersVisible(!filtersVisible)}
                >
                  <IconLabel
                    label="Filters"
                    labelClassName="text-sm text-gray-icon ml-0.5"
                    iconName="filter"
                    iconType={filtersVisible ? "solid" : "outlined"}
                    iconClassName="h-4 w-4 text-gray-icon"
                  />
                </button>
                {filtersVisible && <Filters />}
              </div>
            </div>
            <div className="flex items-center px-3 border-r border-gray-icon-light">
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setFullscreen(!fullscreen)}
              >
                <Icon
                  name={fullscreen ? "x" : "fullscreen"}
                  type="outlined"
                  className="w-4 h-4 text-gray-icon"
                />
                {fullscreen && (
                  <span className="text-sm text-gray-icon ml-0.5">
                    Exit fullscreen
                  </span>
                )}
              </button>
            </div>
            <button
              className="flex items-center pl-3 focus:outline-none"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setUrlCopied(true);
              }}
            >
              <IconLabel
                label="Share"
                labelClassName={clsx(
                  "text-sm ml-1 transition-colors duration-150",
                  {
                    "text-gray-icon": !urlCopied,
                    "text-green-600": urlCopied,
                  }
                )}
                iconName="share"
                iconType="outlined"
                iconClassName={clsx("w-4 h-4 transition-colors duration-150", {
                  "text-gray-icon": !urlCopied,
                  "text-green-600": urlCopied,
                })}
              />
              <Icon
                name="check"
                type="outlined"
                className={clsx(
                  "h-4 ml-1 text-green-600 transition-all duration-150",
                  {
                    "w-0": !urlCopied,
                    "w-4": urlCopied,
                  }
                )}
              />
            </button>
          </div>
          <div className="flex">
            <div className="pr-4 mr-4 border-r border-gray-icon-light">
              <Input
                onChange={handleInput}
                placeholder="Search..."
                className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
                icon="search"
                iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
                wrapperClassName="flex flex-1 max-w-lg"
              />
            </div>
            <SelectFilter
              value={filterValue}
              options={selectFilterOptions}
              onChange={handleSelect}
              variant="alt"
              className="px-1 border border-blue-800 rounded"
            />
          </div>
        </div>
        <div
          className={clsx("grid grid-flow-row gap-y-3", {
            "grid-cols-4 gap-x-2": viewType === "mosaic",
            "grid-cols-1": viewType === "list",
          })}
        >
          {(searchPhrase.length > 0
            ? publications.filter((publication) =>
                filteredItems.includes(publication.text)
              )
            : publications
          )
            .filter(
              ({ owner }) => filterValue === "followed" || owner.id === user_id
            )
            .sort((a, b) => {
              if (a.text.toLowerCase() < b.text.toLowerCase()) {
                return sortAscending ? -1 : 1;
              }
              if (a.text.toLowerCase() > b.text.toLowerCase()) {
                return sortAscending ? 1 : -1;
              }
              return 0;
            })
            .map((entity) => (
              <EntityCard entity={entity} />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Entities;
