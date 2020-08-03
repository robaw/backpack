import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-4.561 8.561a1.5 1.5 0 1 1 .486.325 1.5 1.5 0 0 1-.486-.325zM15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm.5-6.001a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" /></svg>);