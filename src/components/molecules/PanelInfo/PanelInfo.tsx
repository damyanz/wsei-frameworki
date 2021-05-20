import { useState } from "react";
import EditableSpan from "../EditableSpan";
import { useAppSelector } from "../../../redux/hooks";
import Correspondant from "../../atoms/Correspondant";
import Icon from "../../atoms/Icon";
import { tableAData, tableBData } from "../../../constants";
import Table from "../Table";
import { Link } from "react-router-dom";
import clsx from "clsx";

const PanelInfo = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const userData = useAppSelector((state) => state.user);
  const { picture } = userData || {};

  return (
    <section className="relative flex flex-col w-full pt-5">
      <Icon
        onClick={() => setEditMode(!editMode)}
        name="pencil"
        className="absolute right-0 w-5 h-5 top-5"
      />
      <div className="flex flex-col border-b">
        <h2 className="mb-4 font-semibold">Panel informations</h2>
        <div className="flex flex-col mb-5">
          <span className="mb-1.5 text-sm text-gray-icon">Hourly fee</span>
          <EditableSpan editable={editMode} className="">
            610€/hour (Negociated)
          </EditableSpan>
        </div>
        <div className="flex flex-col">
          <span className="mb-1.5 text-sm text-gray-icon">
            Terms &amp; conditions
          </span>
          <EditableSpan editable={editMode} className="">
            Monthly 10k€ retainer - see with Jeanny Smith
          </EditableSpan>
          <div className="w-full p-2.5 my-2 bg-gray-200">
            <input type="file" />
          </div>
        </div>
        <div className="flex flex-col my-3">
          <span className="mb-1.5 font-semibold ">Services &amp; projects</span>
          <EditableSpan editable={editMode} className="">
            Corporate M&amp;A and international acquisitions
          </EditableSpan>
        </div>
        <div className="flex flex-col">
          <span className="mb-1.5 font-semibold ">Internal correspondants</span>
          <div className="flex flex-col space-y-0.5 pb-5">
            <Correspondant picture={picture} editable={editMode} />
            <Correspondant picture={picture} editable={editMode} />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 border-b">
        <span className="mb-1.5 font-semibold">Proposals</span>
        <div
          className={clsx("flex flex-col max-w-3xl", {
            "max-w-3xl": !editMode,
            "max-w-full overflow-x-scroll": editMode,
          })}
        >
          <Table tableData={tableAData} editable={editMode} />
          <Link className="py-2 text-blue-600" to="/proposals">
            See more proposals
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-5">
        <span className="mb-1.5 font-semibold">Internal reviews</span>
        <div
          className={clsx("flex flex-col max-w-3xl", {
            "max-w-3xl": !editMode,
            "max-w-full overflow-x-scroll": editMode,
          })}
        >
          <Table tableData={tableBData} editable={editMode} />
        </div>
      </div>
    </section>
  );
};

export default PanelInfo;
