import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';

const Nav = () =>  {

    const [ items ] = useState([
        {
            name: "Home",
            id: uniqid(),
        },
        {
            name: "Blog",
            id: uniqid(),
        },
        {
            name: "Projects",
            id: uniqid(),
        },
        {
            name: "Contact",
            id: uniqid(),
        }
    ]);

    const navItems = items.map((navItem) =>
        <li className="ml-4 text-lg font-bold" key={navItem.id}>
            <a>{navItem.name}</a>
        </li>
    )

    return (
        <div className="grid grid-cols-2 w-screen h-20 lg:grid-cols-3 ">
            <div className="flex items-center pl-4 lg:pl-36 text-white text-3xl font-bold">Malova</div>
            <div className="lg:col-span-2 pr-36">
                <ul className="hidden lg:flex lg:h-full lg:items-center lg:justify-end text-white">{navItems}</ul>
            </div>
        </div>
    )
}

export default Nav;