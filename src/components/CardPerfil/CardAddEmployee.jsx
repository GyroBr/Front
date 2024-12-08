import React, { Component, useState } from 'react'
import styles from './CardAddPerfil.module.css'
import { BsPlusLg, BsTrash3, BsPencil } from "react-icons/bs";
import { toast } from 'react-toastify';
import { registerEmployee, getEmployees } from "../../services/Employee/employe";


const CardPerfil = ({handleClose}) => {
    const [EmployeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleConfirmClick = async () => {
        // Adicione a lógica de confirmação aqui
        const dataToSend = {
            fullName: EmployeeData.nome,
            email: EmployeeData.email,
            password: EmployeeData.password,
        };
        console.error(dataToSend)
        try {
            const token = sessionStorage.getItem('token');  // Pega o token do sessionStorage

            const response = await registerEmployee(token, dataToSend);

            toast.success('Perfil atualizado com sucesso!', {
                autoClose: 1700,
            });

        } catch (error) {
            // setIsEditing(false);

            toast.error('Erro ao atualizar perfil!', {
                autoClose: 1700,
            });
            console.log("to na terceira");
        }
    };

    const handleInputChange = (e) => {
        console.log("aaaaaaa");
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({

            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.card_func}>
                    <div className={styles.line}>
                        <div className={styles.box}>
                            <span>Nome</span>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Digite a cidade"
                                onChange={handleInputChange}
                                className={styles.input_a}
                            />
                        </div>

                        <div className={styles.box}>
                            <span>Email</span>
                            <input
                                type="text"
                                name="email"
                                placeholder="Digite a cidade"
                                onChange={handleInputChange}
                                className={styles.input_a}
                            />
                        </div>
                        <div className={styles.box}>
                            <span>Senha</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Digite a cidade"
                                onChange={handleInputChange}
                                className={styles.input_a}
                            />
                        </div>
                    </div>

                </div>
                <div className={styles.card_button}>
                    <button className={styles.btn_Employee} onClick={handleConfirmClick}>
                        Adicionar
                    </button>
                    <button className={styles.btn_Employee} onClick={handleClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CardPerfil