import React from 'react';
 
function Navbar(props){
    return(
        <nav>
            <ul className="navbar">
                <li><a href="">{props.home}</a></li>
                <li><a href="">{props.services}</a></li>
                <li><a href="">{props.about}</a></li>
                <li><a href="">{props.contact}</a></li>
            </ul>
        </nav>
    );
}

export default function Header(){
    return(
        <header>
            <Navbar home="home" services="services" about="about" contact="contact" />
        </header>      
    );
}