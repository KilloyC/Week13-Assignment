import React from 'react';
import "./Navbar.css";
import "./Login.css";
import Login from './Login';
import NavBar from './NavBar';

function Home() {
    return(
        <div className="home">
            <NavBar />
            <Login />
        </div>
    )
}

export default Home;