import { useState, useEffect } from "react";
import { useAppSelector } from "@redux/hooks";
import Icon from "@components/atoms/Icon";
import ViewSwitch from "@components/atoms/ViewSwitch";
import EntityCard from "@components/atoms/EntityCard";
import { ViewType } from "@components/atoms/ViewSwitch/ViewSwitch";
import { APP_ID } from "@env";
import { filterByText } from "@helpers/common";
import clsx from "clsx";
import OptionsBar from "@components/molecules/OptionsBar";
import Loader from "@components/atoms/Loader";
import { Link } from "react-router-dom";
import { PublicationType } from "@/types/global";

const Entities = () => {
  const [viewType, setViewType] = useState<ViewType>("mosaic");
  const [publications, setPublications] = useState<PublicationType[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [loadingPublications, setLoadingPublications] = useState<boolean>(true);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState<string>("followed");
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

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
        setPublications(data);
        setLoadingPublications(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

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

  return (
    <main
      className={clsx(
        "flex flex-col items-start justify-start w-full md:pl-10 space-y-4",
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
        <OptionsBar
          sortAscending={sortAscending}
          fullscreen={fullscreen}
          filterValue={filterValue}
          handleInput={handleInput}
          handleSelect={handleSelect}
          setSortAscending={setSortAscending}
          setFullscreen={setFullscreen}
        />
        <div
          className={clsx("grid grid-flow-row gap-y-3", {
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2":
              viewType === "mosaic" && !loadingPublications,
            "grid-cols-1": viewType === "list" || loadingPublications,
          })}
        >
          {loadingPublications && (
            <div className="flex items-center justify-center flex-1 w-full p-16">
              <Loader className="w-12 h-12" />
            </div>
          )}
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
              <Link key={`entity-${entity.id}`} to={`/entity/${entity.id}`}>
                <EntityCard key={`entity-${entity.id}`} entity={entity} />
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Entities;
