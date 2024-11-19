import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHistory, FaBars, FaChartBar, FaBoxes } from "react-icons/fa";
import styles from "./SidebarItem.module.css";

const iconMap = {
  user: <FaUser />,
  history: <FaHistory />,
  bars: <FaBars />,
  chart: <FaChartBar />,
  boxes: <FaBoxes />,
};

export default function SidebarItem({ item, isActive, onClick }) {
  return (
    <Link
      to={`/${item.id}`}
      className={`${styles.sidebarItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {iconMap[item.icon]} {item.label}
    </Link>
  );
}
