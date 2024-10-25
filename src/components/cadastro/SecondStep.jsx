import { useState } from "react";
import React from "react";
import {mascaraTelefone, mascaraCNPJ, validarEmail } from "../../utils/globals";
import styles from "../../pages/Cadastro/Cadastro.module.css";


const SecondStep = () => {
    const [telefone, setTel] = useState(""); 
    const [cnpj, setCNPJ] = useState("");    
    const [email, setEmail] = useState("");  
    const [emailError, setEmailError] = useState(""); 

    const handleTelefoneChange = (e) => {
      mascaraTelefone(e);  
      setTel(e.target.value); 
    };

    const handleCNPJChange = (e) => {
      mascaraCNPJ(e);  
      setCNPJ(e.target.value); 
    };

    const handleEmailChange = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);

      const error = validarEmail(emailValue);
      setEmailError(error);
    };

    const handleEmailBlur = () => {
      setEmailError(""); 
    };
    
    return (
        <div>
            <div className={styles.forms}>
            <div className={styles.groupForms}>
              <h6>Endereço</h6>
              <input type="text" />
            </div>
            <div className={styles.groupForms}>
              <h6>Número</h6>
              <input
                type="text"
                value={telefone}
                onChange={handleTelefoneChange}
              />
            </div>
            <div className={styles.groupForms}>
              <h6>CEP</h6>
              <input
                type="text"
                value={cnpj}
                onChange={handleCNPJChange}
              />
            </div>
            <div className={styles.groupForms}>
              <h6>Cidade</h6>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange} 
                onBlur={handleEmailBlur} 
              />
              {emailError && <span className={styles.errorMessage}>{emailError}</span>}
            </div>
            <div className={styles.groupForms}>
              <h6>Estado</h6>
              <input type="se" />
            </div>
          </div>
        </div>
    )
}

export default SecondStep;