import { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";
import SelectFilter from "@components/atoms/SelectFilter";
import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";
import IconLabel from "@components/atoms/IconLabel";
import Filters from "@components/molecules/Filters";
import { selectFilterOptions } from "@/constants";

type OptionsBarType = {
  sortAscending: boolean;
  fullscreen: boolean;
  filterValue: string;
  handleInput: React.ChangeEventHandler;
  handleSelect: React.ChangeEventHandler;
  setSortAscending: Dispatch<SetStateAction<boolean>>;
  setFullscreen: Dispatch<SetStateAction<boolean>>;
};

const OptionsBar = ({
  sortAscending,
  fullscreen,
  filterValue,
  handleInput,
  handleSelect,
  setSortAscending,
  setFullscreen,
}: OptionsBarType) => {
  const [urlCopied, setUrlCopied] = useState<boolean>(false);
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start justify-between mb-3 space-y-2 md:space-y-0 md:items-center md:flex-row">
      <div className="flex items-center w-full overflow-x-scroll md:w-auto md:overflow-x-auto">
        <div className="flex items-center">
          <SelectFilter
            value="dummy"
            options={[
              { id: 0, value: "dummy", label: "All", icon: "user-group" },
            ]}
            onChange={handleSelect}
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
            onClick={() => setSortAscending(!sortAscending)}
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
        {navigator.clipboard && (
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
        )}
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
          className="px-1 border border-blue-800 rounded"
        />
      </div>
    </div>
  );
};

export default OptionsBar;
