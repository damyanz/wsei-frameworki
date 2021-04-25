import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = () => {
  return (
    <div className="relative flex flex-1 max-w-lg">
      <input
        type="text"
        className="w-full text-center border rounded-sm py-0.5"
        placeholder="Search Legalcluster"
      />
      <SearchIcon className="absolute h-5 transform -translate-y-1/2 right-2 top-1/2 text-blue-icon" />
    </div>
  );
};

export default SearchBar;
