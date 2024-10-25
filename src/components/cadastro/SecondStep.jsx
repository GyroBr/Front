import { useState } from "react";
import React from "react";
import { mascaraCEP } from "../../utils/globals";
import styles from "../../pages/Cadastro/Cadastro.module.css";

const SecondStep = () => {
  const [cep, setCEP] = useState("");

  const handleCEPChange = (e) => {
    mascaraCEP(e);
    setCEP(e.target.value);
  };

  // const cepForViaCep = document.querySelector('#cep')
  // const endereco = document.querySelector('#endereco')
  // const numero = document.querySelector('#numero')
  // const estado = document.querySelector('#estado')
  // const cidade = document.querySelector('#cidade')
  
  // cepForViaCep.addEventListener('focuout', () => {
  //   console.log('focusout')
  // })

  return (
    <div>
      <div className={styles.forms}>
        <div className={styles.groupForms}>
          <h6>Endereço</h6>
          <input id="endereco" type="text" />
        </div>

        <div className={styles.CEP_e_NUM}>
          <div className={styles.groupForms}>
            <h6>Número</h6>
            <input id="numero" type="number" />
          </div>
          <div className={styles.groupForms}>
            <h6>CEP</h6>
            <input id="cepForViaCep" type="numero" value={cep} onChange={handleCEPChange} />
          </div>
        </div>
        
        <div className={styles.groupForms}>
          <h6>Cidade</h6>
          <input id="cidade" type="text" />
        </div>
        <div className={styles.groupForms}>
          <h6>Estado</h6>
          <input id="estado" type="text" />
        </div>
        <div className={styles.groupForms_checkbox}>
          <input type="checkbox" name="checkbox termo"/>
          <span className={styles.checkmark}></span>
          <p>Eu li e compreendo a <span className={styles.span}>Política de Privacidade</span> e os <span className={styles.span}>Termos de Serviço</span>. </p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;