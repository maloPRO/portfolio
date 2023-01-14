import React, { useState } from "react";
import '../styles/nav.css';

const Nav = () => {
  const [navItems] = useState(['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']);

  const navList = navItems.map((navItem) => 
    <li>{navItem}</li>
  )

  return (
    <nav>
      <div>GM</div>
      <ul className="navItems">{navList}</ul>
    </nav>
  )
}

export default Nav;