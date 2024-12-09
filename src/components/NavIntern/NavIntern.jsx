import React, { useEffect, useState, useRef } from "react";
import styles from "./NavIntern.module.css";
import { getAllCategories } from "../../services/produto/ProdutoService";

const NavIntern = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories(token);
        setCategories(response.data || []);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, [token]);

  useEffect(() => {
    const menuItem = menuRef.current?.querySelectorAll(`.${styles.menu_top} ul li`);

    function selectLink(event) {
      if (menuItem) {
        menuItem.forEach((item) => item.classList.remove(styles.ativo));
        event.currentTarget.classList.add(styles.ativo);
      }
    }

    if (menuItem) {
      menuItem.forEach((item) => item.addEventListener('click', selectLink));
    }

    return () => {
      if (menuItem) {
        menuItem.forEach((item) => item.removeEventListener('click', selectLink));
      }
    };
  }, [categories]);

  return (
    <nav className={styles.menu_top} ref={menuRef}>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index} className={styles.item_menu}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Categoria clicada:", category); // Debug para verificar o valor
                  onCategorySelect(category);
                }}
              >
                <span className={styles.txt_link}>{category}</span>
              </a>
            </li>
          ))
        ) : (
          <li className={styles.item_menu}>
            <a href="#">
              <span className={styles.txt_link}>Nenhuma categoria disponível</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavIntern;
