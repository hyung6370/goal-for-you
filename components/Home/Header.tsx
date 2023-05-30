import React from "react";

export default function Header() {
    return (
        <div>
            <div className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                "
            >
                <img src="/img/logo.png" alt="Logo" className="logo-image" />
                <h1 className="font_here text-2xl ml-2">goal for you</h1>
            </div>
            <hr className="border-1 border-gray-400" />
        </div>
      );
    
}