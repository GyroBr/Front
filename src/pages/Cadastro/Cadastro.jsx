import React, { useState } from 'react';
// import{NavLink } from "react-router-dom";
import styles from "./Cadastro.module.css";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import FirstStep from '../../components/cadastro/FirstStep';
import SecondStep from '../../components/cadastro/SecondStep';


// //Hooks
import {useForm} from '../../hooks/useForm';
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  // const [formData, setFormData] = useState({
  //   telefone: '',
  //   cnpj: '',
  //   email: '',
  //   endereco: '',
  //   numero: '',
  //   cep: '',
  //   cidade: '',
  //   estado: ''
  // });

  const formComponents = [<FirstStep key="firstStep"/>, <SecondStep key="secondStep"/>];
  const{currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponents);
  const handleCadastrarUsuario = async()=>{
    console.log('fui chamado');
    console.log(JSON.stringify(usuario));
    await cadastrarEmpresa(usuario)
    .then((response) => {
      toast.success('Empresa cadastrada com sucesso!', {
        autoClose: 700,
      });
      setTimeout(() => {
        navigate('/Login');
      }, 900)
      console.log(response);
    }).catch((error) => {
      toast.error(error, {
        autoClose: 700,
    });
      console.error(error);
    });
  }
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

            <div className={styles.div_btn}>
            {!isFirstStep && (
              <button type='button' to={"/Home"} className={styles.buttonLink} onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button> 
            )}
            </div>
            <div className={styles.div_btn}>
            {!isLastStep ? (
              <button type='submit' className={styles.buttonLink} onClick={() => changeStep(currentStep + 1)}>
              <span>Continuar</span>
              <GrFormNext/>
              </button>
            ): (
              <button type='submit' className={styles.buttonLink2} onClick={handleCadastrarUsuario}>
              <span>Cadastrar</span>
              </button>
            )}
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}