// import React, { useState } from 'react';
// import{NavLink } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import FirstStep from '../../components/cadastro/FirstStep';
import SecondStep from '../../components/cadastro/SecondStep';

// //Hooks
import {useForm} from '../../hooks/useForm';

export default function Cadastro() {
  const formComponents = [<FirstStep key="firstStep"/>, <SecondStep key="secondStep"/>];
  const{currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponents);

  return (
    <>
      <div className={styles.div_mother}>
        <div className={styles.div_left}>
          <div className={styles.div_img}></div>
        </div>
        <div className={styles.div_form} onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles.div_logo}></div>
          <p className={styles.subtittle}>
          Junte-se a nós e potencialize seu negócio{" "}
            <span className={styles.colored_dot}>.</span>
          </p>
          <div className={styles.setasEtapas}>
          <img src="../../src/assets/images/linha_laranja.svg" alt=""></img>
          {!isLastStep ? (
              <img src="../../src/assets/images/seta_cinza.svg" alt=""></img>
            ): (
              <img src="../../src/assets/images/seta_laranja.svg" alt=""></img>
            )}
          </div>
          
          <div className='inputsContainer'>{currentComponent}</div>

          <div className={styles.buttons}>

            <div>
            {!isFirstStep && (
              <button type='button' to={"/Home"} className={styles.buttonLink} onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button> 
            )}
            </div>
            <div>
            {!isLastStep ? (
              <button type='submit' to={"/Home"} className={styles.buttonLink} onClick={() => changeStep(currentStep + 1)}>
              <span>Continuar</span>
              <GrFormNext/>
              </button>
            ): (
              <button type='submit' to={"/Home"} className={styles.buttonLink2} onClick={() => changeStep(currentStep + 1)}>
              <span>Cadastrar</span>
              <GrFormNext/>
              </button>
            )}
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}