import { useState } from "react";
import EditableSpan from "@components/molecules/EditableSpan";
import Icon from "@components/atoms/Icon";

const About = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const sections = [
    {
      heading: "Expertise",
      items: ["Mergers and acquisition"],
    },
    {
      heading: "Specialties",
      items: ["Cross border operation", "Transaction over 500€/$"],
    },
    {
      heading: "Admission to practice law",
      items: ["Paris bar association", "Tunisian bar association"],
    },
    {
      heading: "Counties",
      items: ["Tunisia"],
    },
  ];

  return (
    <section className="relative flex flex-col w-full pt-5 border-t border-b">
      {sections.map(({ heading, items }) => (
        <div key={`about-${heading}`} className="flex flex-col mb-5">
          <h3 className="mb-2.5 text-sm text-gray-icon">{heading}</h3>
          <div className="flex space-x-2.5">
            <EditableSpan
              editable={editMode}
              multiple
              className="py-0.5 px-1.5 bg-blue-200 text-blue-500 text-sm rounded shadow-sm"
            >
              {items.reduce(
                (acc, phrase) => (acc ? `${acc};${phrase}` : phrase),
                ""
              )}
            </EditableSpan>
          </div>
        </div>
      ))}
      <Icon
        onClick={() => setEditMode(!editMode)}
        name="pencil"
        className="absolute right-0 w-5 h-5 cursor-pointer top-5"
      />
    </section>
  );
};

export default About;
