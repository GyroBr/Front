import React, { useEffect, useRef } from "react";
import styles from "../SideBar/Sidebar.module.css";
import { CiLogout } from "react-icons/ci";
import { BsBarChartFill, BsReverseLayoutTextSidebarReverse, BsBox, BsCart4, BsJustify, BsPerson, BsBoxArrowLeft } from "react-icons/bs";

const Menu = () => {
    const menuRef = useRef(null);

    useEffect(() => {
        const menuItem = menuRef.current.querySelectorAll(`.${styles.item_menu}`);

        function selectLink(event) {
            menuItem.forEach((item) => item.classList.remove(styles.ativo));
            console.log(menuItem)
            event.currentTarget.classList.add(styles.ativo);

        }

        menuItem.forEach((item) => item.addEventListener('click', selectLink));

        return () => {
            menuItem.forEach((item) => item.removeEventListener('click', selectLink));
        }
    }, []);

    function selectLink(event) {
        const menuItem = menuRef.current.querySelectorAll(`.${styles.item_menu}`);
        menuItem.forEach((item) => item.classList.remove(styles.ativo));
        event.currentTarget.classList.add(styles.ativo);
        console.log(event.currentTarget.classList); // Adicione esta linha
    }

    return (
        <nav className={styles.menu_lateral} ref={menuRef}>
            <div className={styles.btn_expandir}>
                <BsJustify />
            </div>

            <ul>
                <li className={`${styles.item_menu}`} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsBarChartFill />
                        </span>
                        <span className={styles.txt_link}>DashBoard</span>
                    </a>
                </li>

                <li className={styles.item_menu} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsReverseLayoutTextSidebarReverse />
                        </span>
                        <span className={styles.txt_link}>Histórico</span>
                    </a>
                </li>

                <li className={styles.item_menu} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsBox />
                        </span>
                        <span className={styles.txt_link}>Estoque</span>
                    </a>
                </li>

                <li className={styles.item_menu} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsCart4 />
                        </span>
                        <span className={styles.txt_link}>Menu</span>
                    </a>
                </li>

                <li className={styles.item_menu} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsPerson />
                        </span>
                        <span className={styles.txt_link}>Perfil</span>
                    </a>
                </li>

                <li className={styles.item_menu_out} onClick={selectLink}>
                    <a href="#">
                        <span className={styles.icon}>
                            <BsBoxArrowLeft />
                        </span>
                        <span className={styles.txt_link}>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;