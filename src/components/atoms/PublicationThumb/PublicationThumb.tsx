import PersonLabel from "../../atoms/PersonLabel";

const PublicationThumb = ({ publication }: any) => {
  return (
    <div className="relative flex items-center group hover:cursor-pointer">
      <div className="box-content absolute w-full h-full p-1 transition-opacity duration-100 transform -translate-x-1 rounded opacity-0 bg-gray-section group-hover:opacity-100"></div>
      <div className="z-10 mr-2" style={{ width: 68, height: 68 }}>
        <img
          alt={publication.title}
          className="object-cover w-full h-full"
          src={publication.image}
        />
      </div>
      <div className="z-10 flex flex-col flex-1 space-y-2">
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

export default PublicationThumb;
