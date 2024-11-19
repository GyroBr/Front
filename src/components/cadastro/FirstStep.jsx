import React from "react";
import { useState } from "react";
import {
  mascaraTelefone,
  mascaraCNPJ,
  validarEmail,
} from "../../utils/globals";
import styles from "../../pages/Cadastro/Cadastro.module.css";

const FirstStep = () => {
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
          <h6>Nome empresarial</h6>
          <input type="text" />
        </div>
        <div className={styles.CEP_e_NUM}>
          <div className={styles.groupForms}>
            <h6>Telefone</h6>
            <input
              required
              type="text"
              value={telefone}
              onChange={handleTelefoneChange}
            />
          </div>
          <div className={styles.groupForms}>
            <h6>CNPJ</h6>
            <input
              required
              type="text"
              value={cnpj}
              onChange={handleCNPJChange}
            />
          </div>
        </div>
        <div className={styles.groupForms}>
          <h6>E-mail</h6>
          <input
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {emailError && (
            <span className={styles.errorMessage}>{emailError}</span>
          )}
        </div>
        <div className={styles.groupForms}>
          <h6>Setor</h6>
          <input type="select" />
        </div>
        <div className={styles.CEP_e_NUM}>
          <div className={styles.groupForms}>
            <h6>Senha</h6>
            <input type="password" />
          </div>
          <div className={styles.groupForms}>
            <h6>Confirmar Senha</h6>
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
