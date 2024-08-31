import React from "react";
import ReactDOM from "react-dom";

const Content: React.FC = () => {
  return <div>Content script injected</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Content />, root);
