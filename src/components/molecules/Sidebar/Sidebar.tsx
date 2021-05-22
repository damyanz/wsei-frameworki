import IconLabel from "@components/atoms/IconLabel";
import { Link } from "react-router-dom";
import ProfileCard from "@components/molecules/ProfileCard";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-full md:w-1/5 top-16">
      <div className="sticky flex flex-col top-16">
        <ProfileCard />
        <div className="flex flex-col pl-4 mt-5 space-y-4">
          <Link to="/publications">
            <IconLabel
              label="Publications"
              iconName="publications"
              iconClassName="text-gray-icon-light w-7 h-7 mr-4"
            />
          </Link>
          <Link to="/ecosystem">
            <IconLabel
              label="Ecosystem"
              iconName="globe-alt"
              iconType="outlined"
              iconClassName="text-gray-icon-light w-7 h-7 mr-4"
            />
          </Link>
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
