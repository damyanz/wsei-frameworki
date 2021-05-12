const PersonLabel = ({ person, labelClassName }: any) => {
  return (
    <div className="flex space-x-1.5 items-center">
      {person.picture ? (
        <img
          alt={`${person.firstName} ${person.lastName}`}
          src={person.picture}
          className="w-4 h-4 rounded-full"
        />
      ) : (
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      )}

      <span className={labelClassName}>
        {person.firstName} {person.lastName}
      </span>
    </div>
  );
};

export default PersonLabel;
