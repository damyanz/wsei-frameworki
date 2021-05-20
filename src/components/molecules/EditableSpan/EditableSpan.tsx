import React, { useState, useEffect, ChangeEvent } from "react";
import Input from "@components/atoms/Input";

const EditableSpan = ({
  children,
  editable,
  className,
  name,
  onChange,
  multiple,
}: any) => {
  const [savedValue, setSavedValue] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>(children);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
    if (typeof onChange === "function") {
      onChange(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (currentValue) {
      setSavedValue(currentValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editable]);

  return editable ? (
    <Input
      name={name}
      wrapperClassName="w-48"
      className="p-0.5 border max-w-full rounded-sm border-gray-light"
      placeholder={savedValue}
      onChange={handleChange}
    />
  ) : multiple ? (
    <>
      {savedValue.split(";").map((phrase) => (
        <span key={`phrase-${phrase}`} className={className}>
          {phrase}
        </span>
      ))}
    </>
  ) : (
    <span className={className}>{savedValue}</span>
  );
};

export default EditableSpan;
