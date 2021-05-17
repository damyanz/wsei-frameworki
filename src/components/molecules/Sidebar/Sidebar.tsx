import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { APP_ID } from "../../../env";
import { setUserData } from "../../..//redux/slices/userSlice";
import IconLabel from "../../atoms/IconLabel";
import { Link } from "react-router-dom";
import ProfileCard from "../../molecules/ProfileCard";

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
