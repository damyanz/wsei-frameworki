import ProfileCard from "../../molecules/ProfileCard";
import About from "../../molecules/About";
import PanelInfo from "../../molecules/PanelInfo";

const Profile = () => {
  return (
    <main className="flex flex-col items-start justify-start w-4/5 pl-10 ">
      <ProfileCard type="extended" />
      <About />
      <PanelInfo />
    </main>
  );
};

export default Profile;
