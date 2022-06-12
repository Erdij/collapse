import React from "react";
import ReactDom from "react-dom";

//JSX

const names = ["mihri", "erdijx", "bedi"];
const buttonValue = "My Button";

function App() {
  return (
    <div>
      {names.map((name) => (
        <h1>{name}</h1>
      ))}
      <button
        type="button"
        style={{
          padding: "10px",
          color: "grey",
          backgroundColor: "pink",
          border: " 2px solid green",
        }}
      >
        {buttonValue}
      </button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
