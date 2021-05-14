import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APP_ID } from "../../../env";
import WorkspaceHeading from "../../molecules/WorkspaceHeading";
import WorkspaceBanners from "../../molecules/WorkspaceBanners";
import { workspaces } from "../../../constants";
import ResumeYourWork from "../../molecules/ResumeYourWork";

interface ParamTypes {
  slug: string | undefined;
}

const Workspace = () => {
  const { slug } = useParams<ParamTypes>();
  const workspaceData = workspaces.find((workspace) => workspace.slug === slug);
  const [publications, setPublications] = useState<any>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`https://dummyapi.io/data/api/post`, {
          headers: { "app-id": APP_ID },
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
    <main className="flex flex-col items-start justify-start w-4/5 pl-10 space-y-4">
      <WorkspaceHeading workspace={workspaceData} className="w-full" />
      <WorkspaceBanners />
      <ResumeYourWork
        label="Latest updates"
        publications={publications || []}
        withFilters
      />
    </main>
  );
};

export default Workspace;
