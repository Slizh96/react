import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsNum} from "../../Friends/FriendsSpisok";

// console.log(classes)
// let classes = {
//     "nav": "Navbar_nav__3oANR",
//     "item": "Navbar_item__14m9Q"}


const Navbar = (props) => {
    // debugger
    let state = props.store.getState();
    return (
        <div className={s.nav}>
        <nav >
            <div className={s.item}>
                <NavLink  to='/profile' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Profile </NavLink>
            </div>
            <div ><NavLink to='/dialogs' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Messages</NavLink></div>
            <div><NavLink to='/news'  style={({isActive})=>({color:isActive? 'red' : 'white'})}>News</NavLink></div>
            <div><NavLink to='/music' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Music</NavLink></div>
            <div><NavLink to='/settings' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Settings</NavLink></div>
        </nav>
<div>
    <FriendsNum friends={state.frData.friends}/>
</div>
        </div>
    )
};
export default Navbar;


// _________________________________________________________
// import React from "react";
// import s from "./Navbar.module.css";
// import {NavLink} from "react-router-dom";
//
// // console.log(classes)
// // let classes = {
// //     "nav": "Navbar_nav__3oANR",
// //     "item": "Navbar_item__14m9Q"}
//
//
// const Navbar = () => {
//     return (
//         <nav className={s.nav}>
//             <div className={s.item}>
//                 <NavLink  to='/profile' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Profile </NavLink>
//             </div>
//             <div ><NavLink to='/dialogs' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Messages</NavLink></div>
//             <div><NavLink to='/news'  style={({isActive})=>({color:isActive? 'red' : 'white'})}>News</NavLink></div>
//             <div><NavLink to='/music' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Music</NavLink></div>
//             <div><NavLink to='/settings' style={({isActive})=>({color:isActive? 'red' : 'white'})}>Settings</NavLink></div>
//         </nav>
//     )
// };
// export default Navbar;