import React from "react";

const Navbar = props => {
  console.log("Navbar");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href=" ">
        Navbar{" "}
        <span className="badge badge-pill badge-primary">
          {/* this class helps to put a badge on the text */}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
