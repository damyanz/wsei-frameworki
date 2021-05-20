import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import IconLabel from "../../atoms/IconLabel";
import OutlinedButton from "../../atoms/OutlinedButton";
import Icon from "../../atoms/Icon";
import EditableSpan from "../EditableSpan";
import Loader from "../../atoms/Loader";

type ProfileCardProps = {
  type?: "small" | "extended";
};

export const ProfileCard = ({ type }: ProfileCardProps) => {
  const userData = useAppSelector((state) => state.user);
  const [profileData, setProfileData] = useState<any>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const { firstName, lastName, picture, email, phone, location } =
    profileData || {};

  useEffect(() => {
    setProfileData(userData);
  }, [userData]);

  if (!profileData) return <Loader className="w-10 h-10 m-10 mx-auto" />;

  if (type === "small") {
    return (
      <div className="flex items-center cursor-pointer">
        {picture ? (
          <img src={picture} alt="" className="rounded-full w-7 h-7" />
        ) : (
          <div className="w-8 h-8 bg-gray-500 rounded-full" />
        )}
        <div className="flex flex-col w-full pr-3 ml-3">
          <label
            className="w-2/3 text-sm truncate"
            title={`${firstName} ${lastName}`}
          >
            {firstName} {lastName}
          </label>
          <label className="text-xs text-blue-700">See profile</label>
        </div>
      </div>
    );
  }

  if (type === "extended") {
    return (
      <div className="relative flex items-center flex-shrink-0 w-full py-8">
        <div className="flex flex-col items-center pr-6">
          {picture ? (
            <img src={picture} alt="" className="w-16 h-16 rounded-full" />
          ) : (
            <div className="w-8 h-8 bg-gray-500 rounded-full" />
          )}
          <Link to="/me" className="mt-1.5 text-sm text-blue-600">
            See profile
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1 h-full text-sm">
          <div className="flex flex-col">
            <EditableSpan editable={editMode}>
              {firstName} {lastName}
            </EditableSpan>
            <EditableSpan editable={editMode}>{location?.state}</EditableSpan>
          </div>
          <div className="flex flex-col justify-end w-full">
            <div className="flex justify-between w-full">
              <EditableSpan className="text-gray-800" editable={editMode}>
                {location?.city}
              </EditableSpan>
              <EditableSpan className="text-gray-800" editable={editMode}>
                {email}
              </EditableSpan>
            </div>
            <div className="flex justify-between w-full">
              <EditableSpan className="text-gray-800" editable={editMode}>
                {location?.street}
              </EditableSpan>
              <EditableSpan className="text-gray-800" editable={editMode}>
                {phone}
              </EditableSpan>
            </div>
          </div>
        </div>
        <Icon
          onClick={() => setEditMode(!editMode)}
          name="pencil"
          className="absolute top-0 right-0 w-5 h-5"
        />
      </div>
    );
  }

  return (
    <section className="flex flex-col w-full bg-white rounded shadow">
      <Link to="/me">
        <div className="flex flex-col items-center w-full py-5 border-b">
          {picture ? (
            <img src={picture} alt="" className="w-16 h-16 rounded-full" />
          ) : (
            <div className="w-16 h-16 bg-gray-500 rounded-full" />
          )}
          {(firstName || lastName) && (
            <span className="my-1 font-semibold text-blue-800">
              {firstName} {lastName}
            </span>
          )}
          <span className="text-sm text-gray-400">Job title - Company</span>
        </div>
      </Link>
      <div className="flex flex-col px-4 py-3 space-y-3">
        <Link to="/network">
          <div className="flex justify-between">
            <IconLabel
              label="Your network"
              iconName="network"
              iconClassName="w-6 h-6 text-blue-icon mr-1.5"
            />
            <OutlinedButton iconName="user-add" />
          </div>
        </Link>
        <Link to="/publications">
          <div className="flex justify-between">
            <IconLabel
              label="Your Publications"
              iconName="publications"
              iconClassName="w-6 h-6 text-blue-icon mr-1.5"
            />
            <OutlinedButton iconName="plus" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProfileCard;
