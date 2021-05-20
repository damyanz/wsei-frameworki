import { Link } from "react-router-dom";
import WorkspaceCard from "../WorkspaceCard";
import { workspaces } from "../../../constants";

const Workspaces = () => {
  return (
    <section className="flex flex-col max-w-full mt-4">
      <h2 className="pl-4 text-xl font-semibold">Workspaces</h2>
      <div className=" flex space-x-1.5 py-4 overflow-x-scroll scrollbar-hidden">
        {workspaces.map((workspace) => (
          <Link
            key={`workspace-${workspace.id}`}
            to={`/workspace/${workspace.slug}`}
          >
            <WorkspaceCard workspace={workspace} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Workspaces;
