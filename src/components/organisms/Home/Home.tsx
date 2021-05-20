import { useEffect, useState } from "react";
import { APP_ID } from "@env";
import LatestPublications from "@components/molecules/LatestPublications";
import Workspaces from "@components/molecules/Workspaces";
import ResumeYourWork from "@components/molecules/ResumeYourWork";
import Loader from "@components/atoms/Loader";

const Home = () => {
  const [publications, setPublications] = useState<any>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`https://dummyapi.io/data/api/post`, {
          headers: { "app-id": APP_ID },
          cache: "force-cache",
        });
        const { data } = await res.json();
        setPublications(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="flex flex-col items-start justify-start w-4/5 pb-12 pl-10">
      {publications ? (
        <LatestPublications publications={publications || []} />
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          <Loader />
        </div>
      )}
      <Workspaces />
      {publications ? (
        <ResumeYourWork label="Resume your work" publications={publications} />
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          <Loader />
        </div>
      )}
    </main>
  );
};

export default Home;
