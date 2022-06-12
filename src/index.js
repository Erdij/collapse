import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

//JSX

// const names = ["mihri", "erdijx", "bedi"];
// const buttonValue = "My Button";

// function App() {
//   return (
//     <div>
//       {names.map((name) => (
//         <h1>{name}</h1>
//       ))}
//       <button
//         type="button"
//         style={{
//           padding: "10px",
//           color: "grey",
//           backgroundColor: "pink",
//           border: " 2px solid green",
//         }}
//       >
//         {buttonValue}
//       </button>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Collapse href="#collapseExample1">
          <Card
            cardTitle="Card Title 1 "
            cardText="Lorem Ipsum Text 1"
            updatedTime="Last Updated 1 min ago"
            image="https://picsum.photos/id/1/200/300"
          />
        </Collapse>

        <Collapse href="#collapseExample2">
          <Card
            cardTitle="Card Title 2 "
            cardText="Lorem Ipsum Text 2"
            updatedTime="Last Updated 2 min ago"
            image="https://picsum.photos/id/10/200/300"
          />
        </Collapse>

        <Collapse href="#collapseExample3">
          <Card
            cardTitle="Card Title 3 "
            cardText="Lorem Ipsum Text 3"
            updatedTime="Last Updated 3 min ago"
            image="https://picsum.photos/id/100/200/300"
          />
        </Collapse>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
