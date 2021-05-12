import clsx from "clsx";
import { useEffect, useState } from "react";
import { APP_ID } from "../../../env";
import Icon from "../../atoms/Icon";
import IconLabel from "../../atoms/IconLabel";
import ResumeYourWork from "../../molecules/ResumeYourWork";
import PersonLabel from "../../atoms/PersonLabel";
import { workspaces } from "../../../constants";
import { Link } from "react-router-dom";

type LatestPublicationsType = {
  publications: any;
};

const PublicationThumb = ({ publication }: any) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="group" style={{ width: 68, height: 68 }}>
        <img className="object-cover w-full h-full" src={publication.image} />
      </div>
      <div className="flex flex-col flex-1 space-y-2">
        <p className="font-semibold text-blue-icon">{publication.text}</p>
        <div className="flex items-center space-x-2">
          <time className="text-sm text-gray-400">
            {new Date(publication.publishDate).toLocaleString("pl-PL", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <PersonLabel
            person={publication.owner}
            labelClassName="text-gray-600 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

const LatestPublications = ({
  publications: _publications,
}: LatestPublicationsType) => {
  const publications = _publications
    .slice(0, 4)
    .sort(
      (a: any, b: any) =>
        new Date(b.publishDate).getDate() - new Date(a.publishDate).getDate()
    );

  const [latestPublication, ...rest] = publications;

  return (
    <div className="flex w-full space-x-5 overflow-hidden bg-white rounded shadow">
      <div className="relative flex w-1/3 pl-3 pb-7">
        <img
          src={latestPublication.image}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-600"></div>
        <div className="relative z-20 flex flex-col justify-end space-y-2">
          <p className="font-semibold text-white">{latestPublication.text}</p>
          <div className="flex items-center space-x-2">
            <time className="text-sm text-white opacity-75">
              {new Date(latestPublication.publishDate).toLocaleString("pl-PL", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <PersonLabel
              person={latestPublication.owner}
              labelClassName="text-white opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 pt-2 pb-3 pr-10">
        <h2 className="text-xl font-semibold text-blue-icon">
          Latest publications
        </h2>
        <div className="flex flex-col mt-2 space-y-2">
          {rest?.map((publication: any) => (
            <PublicationThumb publication={publication} />
          ))}
        </div>
        <span className="mt-2 font-semibold text-blue-800">
          See more publications
        </span>
      </div>
    </div>
  );
};

const WorkspaceCard = ({ workspace }: any) => {
  const [pictureLoaded, setPictureLoaded] = useState<boolean>(false);
  const { icon, label, picture } = workspace;
  return (
    <div className="flex flex-col flex-shrink-0 overflow-hidden transition duration-300 transform bg-white rounded shadow cursor-pointer hover:shadow-md hover:-translate-y-1 w-60">
      <div className="relative h-20 overflow-hidden">
        {!pictureLoaded && (
          <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
        )}
        {picture && (
          <img
            src={picture}
            alt={label}
            onLoad={() => setPictureLoaded(true)}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="flex flex-col justify-end px-2 pb-2">
        <div className="relative flex mb-4">
          <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded shadow -top-6">
            <Icon name={icon} className="w-2/3 text-gray-400 h-2/3" />
          </div>
          <h3 className="pt-1.5 pl-2 ml-20 font-semibold w-3/5 truncate">
            {label}
          </h3>
        </div>
        <div className="flex flex-grow-0 max-w-full mt-4 space-x-2 overflow-hidden">
          <IconLabel
            label={label}
            iconName={icon}
            iconType="outlined"
            iconClassName="w-4 h-4 mr-2 text-gray-500"
            labelClassName="text-sm truncate text-gray-500"
          />
          <span>∙</span>
          <IconLabel
            label="150 users"
            title="150 users"
            iconName={icon}
            iconType="outlined"
            iconClassName="w-4 h-4 mr-2 text-gray-500"
            labelClassName="text-sm text-gray-500 whitespace-nowrap"
          />
        </div>
        <span className="mt-2 text-xs text-gray-icon-light">
          Last update 2 days ago
        </span>
      </div>
    </div>
  );
};

const Workspaces = () => {
  return (
    <section className="flex flex-col max-w-full mt-4">
      <h2 className="pl-4 text-xl font-semibold">Workspaces</h2>
      <div className=" flex space-x-1.5 py-4 overflow-x-scroll scrollbar-hidden">
        {workspaces.map((workspace) => (
          <Link to={`/workspace/${workspace.slug}`}>
            <WorkspaceCard workspace={workspace} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [publications, setPublications] = useState<any>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`https://dummyapi.io/data/api/post`, {
          headers: { "app-id": APP_ID },
          cache: "force-cache",
        });
        const { data } = await res.json();
        setPublications(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="flex flex-col items-start justify-start w-4/5 pb-12 pl-10">
      {publications ? (
        <LatestPublications publications={publications || []} />
      ) : (
        "loader"
      )}
      <Workspaces />
      <ResumeYourWork publications={publications || []} />
    </main>
  );
};

export default Home;
