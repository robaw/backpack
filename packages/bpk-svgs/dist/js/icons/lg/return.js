import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M15.776 3.64l-1.189 1.34a.93.93 0 0 1-.942.274l-2.935-.806a.467.467 0 0 1-.036-.895l3.062-1.01a.94.94 0 0 1 .544-.014l1.26.346a.472.472 0 0 1 .236.764z" /><path d="M22.356 5.42a.936.936 0 0 0-.695.076l-2.613 1.407a2.808 2.808 0 0 1-2.075.231L5.067 3.864c-1.492-.409-3.142-.21-3.946.871a.726.726 0 0 0 .514 1.087L6.87 7.26a1.334 1.334 0 0 1 .821.643l2.786 5.625a.955.955 0 0 0 .66.635l1.15.316a.461.461 0 0 0 .586-.467l-.323-4.565a.46.46 0 0 1 .586-.466l4.22 1.16a3.17 3.17 0 0 0 3-1.029l2.53-2.845a.472.472 0 0 0-.236-.764zM4.293 13.788l-3 2.995a1 1 0 0 0-.084 1.32l.083.094 3 3.006a1 1 0 0 0 1.5-1.32l-.084-.094-1.29-1.293H13a1 1 0 0 0 .993-.883l.006-.118a1 1 0 0 0-.884-.993L13 16.495H4.41l1.296-1.294a1 1 0 0 0 .084-1.32l-.084-.094a1 1 0 0 0-1.32-.084l-.094.084z" /></svg>);