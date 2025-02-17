import React, { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import logo from '../../assets/Alogo.jpg';
import styles from "./NavBar.module.css";



const NavBar = () => {

    const [menuopen, Setmenuopen] = useState(false);

    const  handlebtn= ()=>{
        window.location.reload(); 
    }
    const toggelmenu = () => {
        Setmenuopen(!menuopen)
    }

    return (

        <nav className={styles.navbar}>
            <img  src={logo} className={styles.logo} onClick={handlebtn}></img>
            <div className={styles.menu}>
                <div className={styles.menuicon} onClick={toggelmenu}>
                    {menuopen ? <IoClose /> : <IoMenu />}
                </div>
                <ul className={`${styles.menuitems} ${menuopen ? styles.menuopen : ' '}`} onClick={() => Setmenuopen(false)}>
                    <li>
                        <a href='#about'> About </a>
                    </li>
                    <li>
                        <a href='#experience'>  Experience </a>
                    </li>
                    <li>
                        <a href='#project'>  Project </a>
                    </li>
                    <li>
                        <a href='#contact'>  Contact </a>
                    </li>
                    <li>
                    <a href="./ankityadav.pdf" download className={styles.resumeButton}>Resume</a>

                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default NavBar
