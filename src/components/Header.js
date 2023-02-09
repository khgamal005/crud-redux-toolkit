import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap/';

import { login } from '../Store/authSlice.';

const Header = () => {
  const dispatch =useDispatch()

  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Post</NavLink>
        </li>
        <Button variant="danger" onClick={()=>dispatch(login())}  className="login">login</Button>
      </ul>
    </div>
  );
};

export default Header;
