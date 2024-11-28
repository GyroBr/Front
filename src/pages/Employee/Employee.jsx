import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
// import CardFunc from "../../components/CardFunc/CardFunc";
import styles from "../Employee/Employee.module.css";
import { BsPlusLg, BsTrash3, BsPencil } from "react-icons/bs";

const EmployeePage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.conteudo}>
                <div className={styles.title_page}>
                    <h1>Perfil</h1>
                </div>
                <div className={styles.card_conteudo}>
                    <div className={styles.container_card}>
                        <button className={styles.card_btn}>
                            Adicionar Funcionário
                            <BsPlusLg className={styles.icon} />
                        </button>
                        <div className={styles.container_scrool}>
                            <div className={styles.card}>
                                <div className={styles.card_func}>
                                    <span> Felipe Magalhães de Souza</span>
                                    <span> felipe@gmail.com</span>
                                    <span> 11977667766</span>
                                </div>
                                <div className={styles.card_edit}>
                                    <BsPencil className={styles.icon_card} />
                                    <BsTrash3 className={styles.icon_card} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_card}>
                        <button className={styles.card_btn}>
                            Adicionar Motoboy
                            <BsPlusLg className={styles.icon} />
                        </button>
                        <div className={styles.card}>
                            <div className={styles.card_func}>
                                <span> Felipe Magalhães de Souza</span>
                                <span> felipe@gmail.com</span>
                                <span> EHC-1234</span>
                            </div>
                            <div className={styles.card_edit}>
                                <BsPencil className={styles.icon_card} />
                                <BsTrash3 className={styles.icon_card} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeePage;