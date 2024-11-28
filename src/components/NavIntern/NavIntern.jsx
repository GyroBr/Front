import React, { useEffect, useRef } from "react";
import styles from "./NavIntern.module.css";

const NavIntern = () => {
    const menuRef = useRef(null);

    useEffect(() => {
        const menuItem = menuRef.current.querySelectorAll(`.${styles.menu_top} ul li`);

        function selectLink(event) {
            menuItem.forEach((item) => item.classList.remove(styles.ativo));
            event.currentTarget.classList.add(styles.ativo);
        }

        menuItem.forEach((item) => item.addEventListener('click', selectLink));

        return () => {
            menuItem.forEach((item) => item.removeEventListener('click', selectLink));
        };
    }, []);

    return (
        <nav className={styles.menu_top} ref={menuRef}>
            <ul>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Sucos</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Refrigerantes</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Cervejas</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Vinhos</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Gelos</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Gin</span>
                    </a>
                </li>
                <li className={styles.item_menu}>
                    <a href="#">
                        <span className={styles.txt_link}>Whisky</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavIntern;