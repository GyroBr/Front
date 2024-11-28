import styles from './Login.module.css';
import { logar } from '../../../conexaoComBackend';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Login () {
  const navigate = useNavigate();

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const handleLogar = async () => {
        const dados = {
            login: login,
            senha: senha
        }
        console.log(dados)
        await logar(dados)
        .then((response) => {
            sessionStorage.setItem('token', response.Token)
            console.log(response)
            toast.success('Login efetuado com sucesso!', {
                autoClose: 700,
            });
            navigate('/EstoquePage');
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
                <div className={styles.div_form}>
                    <div className={styles.div_logo}></div>
                    <p className={styles.subtittle}>Bem-vindo de volta! Acesse sua conta <span className={styles.colored_dot}>.</span></p>
                    <div className={styles.forms}>
                        <div className={styles.groupForms}>
                            <h5>E-mail</h5>
                            <input type="text" onChange={(e)=> setLogin(e.target.value)}/>
                        </div>
                        <div className={styles.groupForms}>
                            <h5>Senha</h5>
                            <input type="password" onChange={(e)=>setSenha(e.target.value)} />
                        </div>
                        <a className={styles.linkForget} href="http://">Esqueceu a senha?</a>
                    </div>
                    <button onClick={handleLogar} className={styles.login_button}>Login</button>
                </div>
                <div className={styles.div_right}>
                    <div className={styles.div_img}></div>
                </div>
            </div>
        </>
    )
}