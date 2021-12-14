import React from "react";
import classes from "./Navbar.module.css";

console.log(classes)
// let classes = {
//     "nav": "Navbar_nav__3oANR",
//     "item": "Navbar_item__14m9Q"}


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={`${classes.item} ${classes.aktive}`}><a>Messages</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
};
export default Navbar;