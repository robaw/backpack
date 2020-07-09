import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10 5a3 3 0 0 1-1.674 2.692.56.56 0 0 0-.326.49V11h8a1 1 0 0 0 1-1V8.183a.56.56 0 0 0-.326-.491 3 3 0 1 1 2.652 0 .56.56 0 0 0-.326.49V10a3 3 0 0 1-3 3H8v2.817a.56.56 0 0 0 .326.491 3 3 0 1 1-2.652 0 .559.559 0 0 0 .326-.49V8.182a.56.56 0 0 0-.326-.491A3 3 0 1 1 10 5z" /></svg>);