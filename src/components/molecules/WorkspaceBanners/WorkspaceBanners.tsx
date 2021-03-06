import { useState } from "react";
import Icon from "@components/atoms/Icon";
import clsx from "clsx";
import WorkspaceBanner from "@components/atoms/WorkspaceBanner";
import { bannersData } from "@/constants";
import { Link } from "react-router-dom";

const WorkspaceBanners = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <section className="box-content flex flex-col w-full px-4 transform -translate-x-4 border rounded bg-gray-section border-gray-light">
      <div className="flex justify-between py-4">
        <span className="font-semibold text-gray-icon">
          Start working on corporate matters
        </span>
        <button onClick={() => setOpen(!open)} className="">
          {open ? (
            <span className="font-semibold text-gray-icon">Hide</span>
          ) : (
            <div className="flex items-center">
              <span className="font-semibold text-gray-icon">Show</span>
              <Icon name="chevron-down" className="w-6 h-6 text-gray-icon" />
            </div>
          )}
        </button>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-3 gap-x-3 pb-5",
          {
            hidden: !open,
          }
        )}
      >
        {bannersData.map((bannerData) => (
          <Link key={`workspaceBanner-${bannerData.id}`} to={bannerData.link}>
            <WorkspaceBanner {...bannerData} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkspaceBanners;
