import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { APP_ID } from "../../../env";
import { setUserData } from "../../..//redux/slices/userSlice";
import { useAppSelector } from "../../../redux/hooks";
import IconLabel from "../../atoms/IconLabel";
import OutlinedButton from "../../atoms/OutlinedButton";
import { Link } from "react-router-dom";

type ProfileCardProps = {
  type?: "small";
};

export const ProfileCard = ({ type }: ProfileCardProps) => {
  const userData = useAppSelector((state) => state.user);
  const { firstName, lastName, picture } = userData || {};

  if (type === "small") {
    return (
      <div className="flex items-center">
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

  return (
    <section className="flex flex-col w-full bg-white rounded shadow">
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
      <div className="flex flex-col px-4 py-3 space-y-3">
        <div className="flex justify-between">
          <IconLabel
            label="Your network"
            iconName="network"
            iconClassName="w-6 h-6 text-blue-icon mr-1.5"
          />
          <OutlinedButton iconName="user-add" />
        </div>
        <div className="flex justify-between">
          <IconLabel
            label="Your Publications"
            iconName="publications"
            iconClassName="w-6 h-6 text-blue-icon mr-1.5"
          />
          <OutlinedButton iconName="plus" />
        </div>
      </div>
    </section>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `https://dummyapi.io/data/api/user/uABrZcuHGJnanoxlt53c`,
          {
            headers: { "app-id": APP_ID },
          }
        );

        const user = await res.json();
        dispatch(setUserData(user));
        return user;
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="flex flex-col w-1/5 top-16">
      <div className="sticky flex flex-col top-16">
        <ProfileCard />
        <div className="flex flex-col pl-4 mt-5 space-y-4">
          <IconLabel
            label="Publications"
            iconName="publications"
            iconClassName="text-gray-icon-light w-7 h-7 mr-4"
          />
          <IconLabel
            label="Ecosystem"
            iconName="globe-alt"
            iconType="outlined"
            iconClassName="text-gray-icon-light w-7 h-7 mr-4"
          />
          <Link to="/entities">
            <IconLabel
              label="Entities"
              iconName="office-building"
              iconClassName="text-gray-icon-light w-7 h-7 mr-4"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
