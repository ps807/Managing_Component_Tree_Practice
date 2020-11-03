import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(onAddClicked) {
    onAddClicked(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          addItem(props.onAdd);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
