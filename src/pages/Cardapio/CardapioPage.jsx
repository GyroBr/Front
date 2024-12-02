import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import BtnAddCombo from "../../components/Button/BtnAddCombo";
import CardCardapio from "../../components/CardCardapio/CardCardapio";
import styles from "./CardapioPage.module.css";

const CardapioPage = () => {

    const [ repositories, SetRepositories ] = useState([])

    useEffect(() => {
        const searchRepositories = async () => {
            const response = await fetch('https://674cbf5754e1fca9290d7565.mockapi.io/products/product')

            const data = await response.json()

            SetRepositories(data)
        }
        searchRepositories()
    }, [])

    return (
        <div className={styles.body}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.conteudo}>
                <div className={styles.title_page}>
                    <h1>Cardápio</h1>
                </div>
                <div className={styles.navIntern_top}>
                    <NavIntern />
                </div>
                <div className={styles.container_btn}>
                    <BtnAddProduct /> <BtnAddCombo />
                </div>
                {
                    repositories.length > 0 ? (
                        <div className={styles.container}>
                            {
                                repositories.map((repo) => (
                                    <CardCardapio 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    price={repo.price} 
                                    image={repo.image}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <p>Carregando produtos...</p>
                    )
                }
            </div>
        </div>
    )
}

export default CardapioPage;