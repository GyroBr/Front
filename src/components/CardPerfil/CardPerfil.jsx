import React, { Component, useState } from 'react'
import styles from './CardPerfil.module.css'
import { BsPlusLg, BsTrash3, BsPencil } from "react-icons/bs";
import { updateEmployee } from '../../services/Employee/employe';
import { toast } from 'react-toastify';

const CardPerfil = ({ id, nome, email }) => {

    const [isEditable, setIsEditable] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [EmployeeData, setEmployeeData] = useState({
        id: id,
        nome: nome,
        email: email,
        password: "******"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setIsEditable(false); // Esta linha faz a alteração do readOnly(somente leitura) false - pode editar true- só pode ler
        console.log("só posso ler", isEditable);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        console.log("to na segunda");
        window.location.reload();
    };

    const handleConfirmClick = async () => {
        const dataToSend = {
            name: EmployeeData.nome,
            email: EmployeeData.email,
            password: EmployeeData.password,
        };
        console.error(dataToSend)
        try {
            const token = sessionStorage.getItem('token'); 

            const response = await updateEmployee(token, dataToSend, EmployeeData.id);
            toast.success('Funcionário atualizado com sucesso!', {
                autoClose: 1700,
            });

            setIsEditing(false);
            setIsEditable(true);

        } catch (error) {
            // setIsEditing(false);

            toast.error('Erro ao atualizar Funcionário!', {
                autoClose: 1700,
            });
            console.log("to na terceira");
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.card_func}>
                <div className={styles.line}>
                    <div className={styles.box}>
                        <span>Nome</span>
                        <input
                            type="text"
                            name="nome"
                            value={EmployeeData.nome}
                            placeholder="Digite a cidade"
                            className={styles.input_a}
                            readOnly={isEditable}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.box}>
                        <span>Email</span>
                        <input
                            type="text"
                            name="email"
                            value={EmployeeData.email}
                            placeholder="Digite a cidade"
                            className={styles.input_a}
                            readOnly={isEditable}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.line}>
                <div className={styles.box}>
                    <span>Senha</span>
                    <input
                        type="text"
                        name="password"
                        value={EmployeeData.password}
                        placeholder="Digite a cidade"
                        className={styles.input_a}
                        readOnly={isEditable}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.box}>
                    {isEditing && (
                        <div className={styles.button_group}>
                            <button className={styles.btn_cancel} onClick={handleCancelClick}>
                                Cancelar
                            </button>
                            <button className={styles.btn_confirm} onClick={handleConfirmClick}>
                                Confirmar
                            </button>
                        </div>
                    )}
                </div>
                </div>

            </div>
            <div className={styles.card_edit}>
                <BsPencil className={styles.icon_card} onClick={handleEditClick} />
                <BsTrash3 className={styles.icon_card} />
            </div>
        </div>
    )
}


export default CardPerfil