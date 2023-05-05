// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);

    }

    const navItems = items.map((navItem) =>
    <li key={navItem.id}>
        <a href="#" className="block py-2 pl-3 pr-4 bg-blue-700 text-white rounded md:bg-transparent md:p-0" aria-current="page">{navItem.name}</a>
    </li>
    )

    return (
        <div>
            <nav>
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-4xl text-white font-bold whitespace-nowrap ">Malova</span>
                    </a>
                    <button 
                        data-collapse-toggle="navbar-solid-bg" 
                        type="button" 
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                        aria-controls="navbar-solid-bg" 
                        aria-expanded="false"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg 
                            className="w-6 h-6" 
                            aria-hidden="true" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd" 
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div 
                        className={`${isMenuVisible ? "block" : "hidden"} w-full md:block md:w-auto`} 
                        id="navbar-solid-bg"
                    >
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">{navItems}</ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;