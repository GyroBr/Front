import styles from './Login.module.css';
export default function Login () {


    return (
        <>
            <div className={styles.div_mother}>
                <div className={styles.div_form}>
                    <div className={styles.div_logo}></div>
                    <p className={styles.subtittle}>Bem-vindo de volta! Acesse sua conta <span className={styles.colored_dot}>.</span></p>
                    <div className={styles.forms}>
                        <div className={styles.groupForms}>
                            <h5>E-mail</h5>
                            <input type="text" />
                        </div>
                        <div className={styles.groupForms}>
                            <h5>Senha</h5>
                            <input type="password" />
                        </div>
                        <a className={styles.linkForget} href="http://">Esqueceu a senha?</a>
                    </div>
                    <button className={styles.login_button}>Login</button>
                </div>
                <div className={styles.div_right}>
                    <div className={styles.div_img}></div>
                </div>
            </div>
        </>
    )
}