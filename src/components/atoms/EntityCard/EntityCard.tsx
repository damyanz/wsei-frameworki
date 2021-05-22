import { PublicationType } from "@/types/global";

type EntityCardProps = {
  entity: PublicationType;
};

const EntityCard = ({ entity }: EntityCardProps) => {
  const { text, image } = entity;
  return (
    <div className="flex p-2 bg-white rounded shadow hover:shadow-md cursor-pointer hover:-translate-y-0.5 transition duration-300 transform">
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
  );
};
export default EntityCard;
