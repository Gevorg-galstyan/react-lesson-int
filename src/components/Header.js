import React  from "react";
import styles from '../assets/css/style.module.css';

function Navbar(props) {

    return (
        <nav>
            <ul className="navbar">
                <li className={styles.active}><a href="https://maximumcode.net">{props.home}</a></li>
                <li><a href="https://maximumcode.net">{props.services}</a></li>
                <li><a href="https://maximumcode.net">{props.about}</a></li>
                <li><a href="https://maximumcode.net">{props.contact}</a></li>
            </ul>
        </nav>
    );
}

export default function Header() {
    return (
        <header>
            <Navbar home="home" services="services" about="about" contact="contact" />
        </header>
    );
}