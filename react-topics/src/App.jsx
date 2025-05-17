import React, { useState } from "react";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [focused, setFocused] = useState(false);

  function onClickAlert() {
    alert("This is Alert");
  }

  function onInputChange(e) {
    setInputData(e.target.value);
    console.log(inputData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click on submit button");
  };

  return (
    <>
      <button onClick={onClickAlert}>Click here to show alert</button>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={onInputChange} />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div onMouseOver={() => console.log("heey")}> Hover over me </div>
      <div onMouseLeave={() => console.log("heey you")}> Hover Leave me </div>

      <input
        type="text"
        onKeyDown={(e) => console.log("Key pressed:", e.key)}
      />

      <input type="text" onBlur={() => console.log("Input blurred")} />
      
      <div>
      <input
        type="text"
        placeholder="Enter your name"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="border px-3 py-2 rounded"
      />

      {focused && (
        <p>Input is focused!</p>
      )}
    </div>
    </>
  );
};

export default App;
