import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.316 3.818l-2.624-.884a17.823 17.823 0 0 0-11.384 0l-2.624.884A1.01 1.01 0 0 0 3 4.777v6.17c0 5.477 5.876 9.479 8.132 10.813a1.69 1.69 0 0 0 1.736 0C15.124 20.426 21 16.423 21 10.946v-6.17a1.01 1.01 0 0 0-.684-.958zm-8.463 6.574a1.032 1.032 0 0 0-.461.46l-.931 1.863a.515.515 0 0 1-.922 0l-.931-1.862a1.03 1.03 0 0 0-.46-.461L6.285 9.46a.515.515 0 0 1 0-.922l1.862-.931a1.03 1.03 0 0 0 .461-.46v-.001l.931-1.862a.515.515 0 0 1 .922 0l.931 1.862a1.03 1.03 0 0 0 .46.46l1.863.932a.515.515 0 0 1 0 .922zm5.78 3.702l-.63.315a1.328 1.328 0 0 0-.594.594l-.315.63a.664.664 0 0 1-1.188 0l-.315-.63a1.323 1.323 0 0 0-.594-.594l-.63-.315a.664.664 0 0 1 0-1.188l.63-.315a1.329 1.329 0 0 0 .594-.594l.315-.63a.664.664 0 0 1 1.188 0l.315.63a1.329 1.329 0 0 0 .594.594l.63.315a.664.664 0 0 1 0 1.188z" /></svg>);