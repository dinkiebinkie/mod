import React, { useState, useEffect } from "react";
import NewModuleLayout from "./NewModuleLayout";
import NewModuleTitle from "./NewModuleTitle";

const NewModule = ({ x, y, createModule }) => {
  const [text, updateText] = useState("");

  let inputModule = React.createRef();
  useEffect(() => inputModule.current.focus());

  // const updateValue = e => updateText(e.value);

  const validateName = () => {
    if (text.length > 0) createModule(x, y, text);
    else createModule(null, null);
  };

  return (
    <NewModuleLayout x={x} y={y}>
      <NewModuleTitle
        type="text"
        ref={inputModule}
        placeholder="<Module Name>"
        onBlur={e => validateName(e)}
        onChange={e => updateText(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") validateName();
        }}
      />
    </NewModuleLayout>
  );
};

export default NewModule;
