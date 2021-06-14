import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <h1 style={{ color: "whitesmoke" }}>Hacker News :</h1>
          <NavLink to="/TopStories">
            <h3> TopStories</h3>
          </NavLink>
          <NavLink to="/LatestStories">
            <h3>| LatestStories</h3>
          </NavLink>
          <NavLink to="/BestStories">
            <h3>| BestStories</h3>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
