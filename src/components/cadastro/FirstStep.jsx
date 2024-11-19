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
    "COMERCIOS_DE_PRODUTOS_GOURMET"
  ];
  const [telefone, setTel] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [setor, setSetor] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleTelefoneChange = (e) => {
    const telefoneValue = mascaraTelefone(e);
    setTel(telefoneValue);
    const telefoneLimpo = telefone.replace(/[\s()\-]/g, "");
    onUsuario((prevUsuario) => ({
      ...prevUsuario,
      telefone: Number(telefoneLimpo),
    }));
  };
  const handleNomeChange = (e) => {
    const nomeValue = e.target.value;
    setNome(nomeValue);
    
  }
  const handleCNPJChange = (e) => {
    const cnpjValue = mascaraCNPJ(e);
    setCNPJ(cnpjValue);
    const cnpjLimpo = cnpj.replace(/[\.\-\/]/g, "");
    onUsuario((prevUsuario) => ({
      ...prevUsuario,
      cnpj: Number(cnpjLimpo),
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
    
  }

  useEffect(()=>{

    const funcionario = {
      nome,
      telefone: null,
      empresa_id: null
    }
    const dados = {
      login: email,
      senha,
    }
    onUsuario((prevUsuario) => ({
      ...prevUsuario,
      dadosCadastro: {
        funcionario: funcionario,
        usuario: dados
      }
    }))
  }, [telefone, email, senha, nome])

  const handleSetorChange = (e) => {
    const setorValue = e.target.value;
    setSetor(setorValue);
    onUsuario((prevUsuario) => ({
      ...prevUsuario,
      setor: setorValue,
    }));
  };

  return (
    <div>
      <div className={styles.forms}>
        <div className={styles.groupForms}>
          <h6>Nome empresarial</h6>
          <input
            type="text"
            onChange={(e) =>
              onUsuario((prevUsuario) => ({
                ...prevUsuario,
                nome: e.target.value,
              }))
            }
          />
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
        </div>
        <div className={styles.groupForms}>
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
        <div className={styles.groupForms}>
          <h6>Senha</h6>
          <input
            type="password"
            value={senha}
            onChange={handleSenhaChange}
            
          />
        </div>
        <div className={styles.groupForms}>
          <h6>Nome do usuário</h6>
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}

          />
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
};

export default FirstStep;
