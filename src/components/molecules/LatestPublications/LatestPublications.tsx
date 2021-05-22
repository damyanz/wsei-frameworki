import { Link } from "react-router-dom";
import PublicationThumb from "@components/atoms/PublicationThumb";
import PersonLabel from "@components/atoms/PersonLabel";
import { PublicationType } from "@/types/global";

type LatestPublicationsProps = {
  publications: PublicationType[];
};

const LatestPublications = ({
  publications: _publications,
}: LatestPublicationsProps) => {
  const publications = _publications
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getDate() - new Date(a.publishDate).getDate()
    );

  const [latestPublication, ...rest] = publications;

  return (
    <div className="flex w-full space-x-5 overflow-hidden bg-white rounded shadow">
      <Link
        className="flex flex-1 flex-shrink-0 w-1/3"
        to={`/publications/${latestPublication.id}`}
      >
        <div className="relative flex w-full pl-3 overflow-hidden pb-7 group hover:cursor-pointer">
          <img
            src={latestPublication.image}
            alt="Latest publication"
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-200 transform group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-600"></div>
          <div className="relative z-20 flex flex-col justify-end space-y-2 transition-transform duration-200 origin-bottom-left transform group-hover:scale-110">
            <p className="font-semibold text-white">{latestPublication.text}</p>
            <div className="flex items-center space-x-2">
              <time className="text-sm text-white opacity-75">
                {new Date(latestPublication.publishDate).toLocaleString(
                  "pl-PL",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </time>
              <PersonLabel
                person={latestPublication.owner}
                labelClassName="text-white opacity-50"
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col w-2/3 pt-2 pb-3 pr-10">
        <h2 className="text-xl font-semibold text-blue-icon">
          Latest publications
        </h2>
        <div className="flex flex-col mt-2 space-y-2">
          {rest?.map((publication) => (
            <Link key={publication.id} to={`/publications/${publication.id}`}>
              <PublicationThumb publication={publication} />
            </Link>
          ))}
        </div>
        <Link to="/publications" className="mt-2 font-semibold text-blue-800">
          See more publications
        </Link>
      </div>
    </div>
  );
};

export default LatestPublications;
