import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import styles from "./Cadastro.module.css";
import FirstStep from '../../components/cadastro/FirstStep';
import SecondStep from '../../components/cadastro/SecondStep';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import { registerEnterprise } from "../../services/empresas/empresa"; 
import { toast } from 'react-toastify';

export default function Cadastro() {
    const [usuario, setUsuario] = useState({
        name: "",
        phoneNumber: "",
        cnpj: "",
        email: "",
        password: "",
        sector: "",
        address: {}
    });

    const formComponents = [
        <FirstStep onUsuario={setUsuario} key="firstStep" />,
        <SecondStep onUsuario={setUsuario} key="secondStep" />
    ];

    const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);
    const navigate = useNavigate();

    const handleCadastrarUsuario = async () => {
      try {
        console.log("Dados do usuário para cadastro:", JSON.stringify(usuario));
        await registerEnterprise(usuario);
        toast.success('Empresa cadastrada com sucesso!', {
          autoClose: 700,
        });
        setTimeout(() => {
          navigate('/Login');
        }, 900);
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessages = error.response.data;
          errorMessages.forEach((err) => {
            toast.error(`Campo "${err.field}" erro: ${err.message}`, {
              autoClose: 700,
            });
          });
        } else {
          toast.error('Erro ao cadastrar a empresa', {
            autoClose: 700,
          });
        }
        console.error('Erro:', error);
      }
    };
    

    return (
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
                    ) : (
                        <img src="../../src/assets/images/seta_laranja.svg" alt=""></img>
                    )}
                </div>

                <div className='inputsContainer'>{currentComponent}</div>

                <div className={styles.buttons}>
                    <div className={styles.div_btn}>
                        {!isFirstStep && (
                            <button type='button' to={"/Home"} className={styles.buttonLink} onClick={() => changeStep(currentStep - 1)}>
                                <GrFormPrevious />
                                <span>Voltar</span>
                            </button>
                        )}
                    </div>
                    <div className={styles.div_btn}>
                        {!isLastStep ? (
                            <button type='submit' className={styles.buttonLink} onClick={() => changeStep(currentStep + 1)}>
                                <span>Continuar</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type='submit' className={styles.buttonLink2} onClick={handleCadastrarUsuario}>
                                <span>Cadastrar</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
