  import React, { useEffect, useState } from "react";
  import {
    mascaraTelefone,
    mascaraCNPJ,
    validarEmail,
  } from "../../utils/globals";
  import styles from "../../pages/Cadastro/Cadastro.module.css";

  const FirstStep = ({ onUsuario }) => {
    const setores = [
      "RESTAURANTES",
      "BARES_E_PUBS",
      "CAFETERIAS_E_PADARIAS",
      "LANCHONETES",
      "EMPORIOS_E_MERCEARIAS",
      "SUPERMERCADOS_E_HIPERMERCADOS",
      "ADEGAS_E_VINICOLAS",
      "INDUSTRIAS_DE_BEBIDAS",
      "DISTRIBUIDORAS_DE_ALIMENTOS_E_BEBIDAS",
      "FOOD_TRUCKS",
      "EVENTOS_E_CATERING",
      "MERCADOS_DE_ALIMENTOS_ORGANICOS",
      "FABRICAS_DE_PRODUTOS_ALIMENTICIOS",
      "CLUBES_E_ASSOCIACOES_DE_BEBIDAS",
      "COMERCIOS_DE_PRODUTOS_GOURMET",
    ];
    const [phoneNumber, setTel] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [sector, setSetor] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [name, setNome] = useState("");

    const handleTelefoneChange = (e) => {
      const telefoneValue = mascaraTelefone(e);
      setTel(telefoneValue);
      const telefoneLimpo = telefoneValue.replace(/[\s()-]/g, "");
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        phoneNumber: Number(telefoneLimpo),
      }));
    };

    const handleCNPJChange = (e) => {
      const cnpjValue = mascaraCNPJ(e);
      setCNPJ(cnpjValue);
      const cnpjLimpo = cnpjValue.replace(/[.\-/]/g, ""); // Remove máscaras
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        cnpj: Number(cnpjLimpo), // Envia o valor limpo para o usuário
      }));
    };

    const handleNomeChange = (e) => {
      const nomeValue = e.target.value;
      setNome(nomeValue);
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        name: nomeValue,
      }));
    };


    const handleEmailChange = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);

      const error = validarEmail(emailValue);
      setEmailError(error);

      if (!error) {
        onUsuario((prevUsuario) => ({
          ...prevUsuario,
          email: emailValue,
        }));
      }
    };

    const handleSenhaChange = (e) => {
      const senhaValue = e.target.value;
      setSenha(senhaValue);
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        password: senhaValue,
      }));
    };

    const handleConfirmarSenhaChange = (e) => {
      const confirmarSenhaValue = e.target.value;
      setConfirmarSenha(confirmarSenhaValue);
    };

    useEffect(() => {
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        name,
        phoneNumber,
        cnpj,
        email,
        password: senha,
      }));
    }, [phoneNumber, email, senha, name, cnpj]); // Inclui cnpj como dependência

    const handleSetorChange = (e) => {
      const setorValue = e.target.value;
      setSetor(setorValue);
      onUsuario((prevUsuario) => ({
        ...prevUsuario,
        sector: setorValue,
      }));
    };

    return (
      <div>
        <div className={styles.forms}>
          <div className={styles.groupForms}>
            <h6>Nome empresarial</h6>
            <input type="text" value={name} onChange={handleNomeChange} />
          </div>
          <div className={styles.CEP_e_NUM}>
            <div className={styles.groupForms}>
              <h6>Telefone</h6>
              <input
                required
                type="text"
                value={phoneNumber}
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
        </div>
        <div className={styles.forms}>
          <h6>E-mail</h6>
          <input
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailError("")}
          />
          {emailError && (
            <span className={styles.errorMessage}>{emailError}</span>
          )}
        </div>
        <div className={styles.forms}>
          <h6>Setor</h6>
          <select value={sector} onChange={handleSetorChange}>
            <option value="">Selecione um setor</option>
            {setores.map((setor) => (
              <option key={setor} value={setor}>
                {setor.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.CEP_e_NUM}>
          <div className={styles.groupForms}>
            <h6>Senha</h6>
            <input type="password" value={senha} onChange={handleSenhaChange} />
          </div>
          <div className={styles.groupForms}>
            <h6>Confirmar Senha</h6>
            <input
              type="password"
              value={confirmarSenha}
              onChange={handleConfirmarSenhaChange}
            />
          </div>
        </div>
      </div>
    );
  };

  export default FirstStep;
