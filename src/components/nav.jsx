import React from "react";

export default function Nav () {
    return (
        <div>
            <ul className="w-screen text-white p-2 bg-gray-600 flex gap-1 justify-center md:justify-end">
                <li>About </li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}