import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  return (

    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to='/Profile' activeClassName={style.active}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/Users' activeClassName={style.active}>Users</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/Dialogs' activeClassName={style.active}>Massages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/News' activeClassName={style.active}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/Music' activeClassName={style.active}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/Settings' activeClassName={style.active}>Settings</NavLink>
      </div>
    </nav>

  );
}

export default Navbar;