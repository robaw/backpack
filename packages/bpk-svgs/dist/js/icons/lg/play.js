import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18.068 10.204l-9.221-6.73A2.401 2.401 0 0 0 5 5.271V18.73a2.402 2.402 0 0 0 3.846 1.797l9.22-6.73a2.197 2.197 0 0 0 0-3.592z" /></svg>);