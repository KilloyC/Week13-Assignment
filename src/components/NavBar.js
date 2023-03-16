import React from "react";

function NavBar() {
        return(
            <div className="NavBar">
               <ul>
                    <li className="logo active">DinoTrivia</li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        )
}

export default NavBar;