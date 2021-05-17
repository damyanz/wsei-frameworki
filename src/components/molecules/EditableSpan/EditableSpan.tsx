import React, { useState, useEffect, ChangeEvent } from "react";
import Input from "../../atoms/Input";

const EditableSpan = ({ children, editable, className, onChange }: any) => {
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
      wrapperClassName="w-48"
      className="p-0.5 border rounded-sm border-gray-light"
      placeholder={savedValue}
      onChange={handleChange}
    />
  ) : (
    <span className={className}>{savedValue}</span>
  );
};

export default EditableSpan;
