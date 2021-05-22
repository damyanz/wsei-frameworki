import { Link } from "react-router-dom";
import EditableSpan from "@components/molecules/EditableSpan";
import IconLabel from "@components/atoms/IconLabel";

type CorrespondantType = {
  picture?: string;
  editable?: boolean;
};

const Correspondant = ({ picture, editable }: CorrespondantType) => {
  return (
    <div className="flex items-center w-full p-1.5 bg-gray-200">
      {picture ? (
        <img src={picture} alt={picture} className="w-8 h-8 rounded-full" />
      ) : (
        <div className="rounded-full w-7 h-7"></div>
      )}
      <EditableSpan editable={editable} className="w-1/3 ml-2">
        Firstname Lastname
      </EditableSpan>
      <div className="flex space-x-10">
        <Link to="/chat">
          <IconLabel
            label="Message"
            labelClassName="font-light"
            iconName="chat"
            iconType="outlined"
            iconClassName="w-5 h-5"
          />
        </Link>
        <Link to="/me">
          <IconLabel
            label="Profile"
            labelClassName="font-light"
            iconName="user"
            iconType="outlined"
            iconClassName="w-5 h-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default Correspondant;
