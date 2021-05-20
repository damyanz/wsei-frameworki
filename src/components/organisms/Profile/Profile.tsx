import ProfileCard from "@components/molecules/ProfileCard";
import About from "@components/molecules/About";
import PanelInfo from "@components/molecules/PanelInfo";

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
