import React from "react";
import classes from "./Layout.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <p>ToolBar</p>
      <p>SideDrawer</p>
      <main className={classes.Content}>{props.children}</main>
      <footer className={classes.Footer}>
        <p>© {new Date().getFullYear()}, @viscosenpai</p>
      </footer>
    </div>
  );
};

export default Layout;
