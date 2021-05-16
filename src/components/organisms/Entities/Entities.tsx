import { useState, useEffect } from "react";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";
import ViewSwitch from "../../atoms/ViewSwitch";
import { ViewType } from "../../atoms/ViewSwitch/ViewSwitch";
import { APP_ID } from "../../../env";
import { filterByText } from "../../../helpers/common";
import clsx from "clsx";

const Entities = () => {
  const [viewType, setViewType] = useState<ViewType>("mosaic");
  const [publications, setPublications] = useState<any[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

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

  return (
    <main className="flex flex-col items-start justify-start w-4/5 pl-10 space-y-4">
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
        <div className="flex justify-end mb-3">
          <Input
            onChange={handleInput}
            placeholder="Search..."
            className="flex flex-1 px-2 py-1.5 text-sm border rounded border-gray-light"
            icon="search"
            iconClassName="h-5 text-blue-icon transform -translate-y-1/2 right-1.5 top-1/2"
            wrapperClassName="flex flex-1 max-w-lg"
          />
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
          ).map(({ id, text, image }) => (
            <div
              key={`entity-${id}`}
              className="flex p-2 bg-white rounded shadow hover:shadow-md cursor-pointer hover:-translate-y-0.5 transition duration-300 transform"
            >
              <div className="flex flex-shrink-0 w-20 h-20">
                <img
                  src={image}
                  alt={text}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between ml-2 overflow-hidden">
                <h2
                  title={text}
                  className="max-w-full font-semibold text-blue-800 truncate"
                >
                  {text}
                </h2>
                <p className="text-xs text-gray-icon">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Entities;
