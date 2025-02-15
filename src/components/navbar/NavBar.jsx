import React, { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
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
            <button className={styles.logo}  onClick={handlebtn}>A</button>
            <div className={styles.menu}>
                <div className={styles.menuicon} onClick={toggelmenu}>
                    {menuopen ? <IoClose /> : <IoMenu />}
                </div>
                <ul className={`${styles.menuitems} ${menuopen ? styles.menuopen : ' '}`} onClick={() => Setmenuopen(false)}>
                    <li>
                        <a href='#about'> About </a>
                    </li>
                    <li>
                        <a href='#experience'>  experience </a>
                    </li>
                    <li>
                        <a href='#project'>  project </a>
                    </li>
                    <li>
                        <a href='#contact'>  contact </a>
                    </li>
                    <li>
                    <a href="/ankitr.pdf" download className={styles.resumeButton}>Resume</a>

                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default NavBar
