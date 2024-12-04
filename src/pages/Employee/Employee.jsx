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
                    <div className={styles.container_perfil}>
                        <button className={styles.card_btn}>
                            Editar Perfil
                            <BsPencil className={styles.icon_pencil} />
                        </button>
                        <div className={styles.container_user_profile}>
                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>Nome</span>
                                    <input type="text" placeholder="Digite o nome" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>Telefone</span>
                                    <input type="text" placeholder="Digite o telefone" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>Email</span>
                                    <input type="text" placeholder="Digite o email" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>CNPJ</span>
                                    <input type="text" placeholder="Digite o cnpj" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>Setor</span>
                                    <input type="text" placeholder="Digite o setor" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>Senha</span>
                                    <input type="password" placeholder="Digite a senha" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>CEP</span>
                                    <input type="text" placeholder="Digite o cep" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>Rua</span>
                                    <input type="text" placeholder="Digite a Rua" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>Número</span>
                                    <input type="text" placeholder="Digite o número" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>Bairro</span>
                                    <input type="text" placeholder="Digite o bairro" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.line}>
                                <div className={styles.box}>
                                    <span>Cidade</span>
                                    <input type="text" placeholder="Digite a cidade" className={styles.input} />
                                </div>
                                <div className={styles.box}>
                                    <span>Estado</span>
                                    <input type="text" placeholder="Digite o estado" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.box_btn}>
                                <button className={styles.btn_cancel}>Cancelar</button>
                                <button className={styles.btn_confirm}>Confirmar</button>
                            </div>

                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default EmployeePage;