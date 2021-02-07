import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

// sfc + tab      <--- tworzy komponent funkcyjny


const list = [
  {
    name: 'start',
    path: '/',
    exact: true,
  },
  {
    name: 'Products',
    path: '/products',
    exact: false,
  },
  {
    name: 'contact',
    path: '/contact',
    exact: false,
  },
  {
    name: 'admin',
    path: '/admin',
    exact: false,
  },
  {
    name: 'useHistory',
    path: '/useHistory',
    exact: false,
  },
  {
    name: 'useLocation',
    path: '/useLocation',
    exact: false,
  },
]

const Navigation = () => {

  const menuItems = list.map((item,itemIndex) => (
    <li key={itemIndex}>
      <NavLink to={item.path} exact={item.exact}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className="main">
      <ul>
        {menuItems}
      </ul>
    </nav>
      );
}

export default Navigation;
