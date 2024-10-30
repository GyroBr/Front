import { useEffect, useState } from "react";
import React from "react";
import styles from "../../pages/Cadastro/Cadastro.module.css";

const SecondStep = ({ onUsuario }) => {
  
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");

 
  const handleNumeroChange = (e) => {
    const value = e.target.value;
    setNumero(value);
  };

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
  };

  const handleCidadeChange = (e) => {
    const value = e.target.value;
    setCidade(value);
  };



  const handleBairroChange = (e) => {
    const value = e.target.value;
    setBairro(value);
  };
  useEffect(()=>{
    const endereco = {
      logradouro: 'teste',
      numero,
      cep,
      cidade,
      bairro
    }
    onUsuario((prevUsuario) => ({ ...prevUsuario, endereco }));
  }, [numero, cep, cidade, bairro])
  return (
    <div>
      <div className={styles.forms}>
        
        <div className={styles.groupForms}>
          <h6>Número</h6>
          <input type="text" value={numero} onChange={handleNumeroChange} />
        </div>
        <div className={styles.groupForms}>
          <h6>CEP</h6>
          <input type="text" value={cep} onChange={handleCepChange} />
        </div>
        <div className={styles.groupForms}>
          <h6>Cidade</h6>
          <input type="text" value={cidade} onChange={handleCidadeChange} />
        </div>
        <div className={styles.groupForms}>
          <h6>Bairro</h6>
          <input type="text" value={bairro} onChange={handleBairroChange} />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
