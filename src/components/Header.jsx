import './Header.css';

import {NavLink, BrowserRouter} from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <nav>
        <p className="logo">HEADER</p>
        <ul>
        <BrowserRouter>
          <li><NavLink to = "/home">Home</NavLink> </li>
          <li><NavLink to = "/about">About</NavLink> </li>
          <li><NavLink to = "/contact">Contact</NavLink> </li>
          </BrowserRouter>
        </ul>
      </nav>
    </div>
  );
}

export default Header;