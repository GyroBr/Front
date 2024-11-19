import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../SideBarComponent/ThemeContext";
import SidebarItem from "../SideBarComponent/SidebarItem";
import styles from "../SideBarComponent/Sidebar.module.css";

export default function Sidebar() {
  const [activePage, setActivePage] = useState("menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  console.log(isDarkMode);

  const menuItems = [
    { id: "perfil", label: "Perfil", icon: "user" },
    { id: "historico", label: "Histórico", icon: "history" },
    { id: "menu", label: "Menu", icon: "bars" },
    { id: "dashboard", label: "Dashboard", icon: "chart" },
    { id: "estoque", label: "Estoque", icon: "boxes" },
  ];

  return (
    <div className={`${styles.sidebar} ${isDarkMode ? styles.dark : styles.light}`}>
      <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {isMenuOpen && (
        <aside className={styles.menu}>
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={activePage === item.id}
              onClick={() => setActivePage(item.id)}
            />
          ))}


          <button className={styles.logout} onClick={() => (window.location.href = "/home")}>
            <FaSignOutAlt /> Logout
          </button>

          <button className={styles.themeToggle} onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />} {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </aside>
      )}
    </div>
  );
}
