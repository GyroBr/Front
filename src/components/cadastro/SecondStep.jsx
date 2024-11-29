import { useState } from "react";
import { mascaraCEP } from "../../utils/globals";
import styles from "../../pages/Cadastro/Cadastro.module.css";
import viaCepService from '../../components/cadastro/viaCep';

const SecondStep = ({ onUsuario }) => {
  const [postalCode, setCEP] = useState("");
  const [street, setEndereco] = useState("");
  const [number, setNumero] = useState("");
  const [neighborhood, setBairro] = useState("");
  const [city, setCidade] = useState("");

  const handleCEPChange = (e) => {
    mascaraCEP(e);
    setCEP(e.target.value);
  };

  const handleCEPBlur = async () => {
    if (postalCode.length === 9) { // Garante que o postalCode tem o formato correto
      try {
        const data = await viaCepService(postalCode);
        setEndereco(data.logradouro || "");
        setBairro(data.neighborhood || "");
        setCidade(data.localidade || "");
      } catch (error) {
        console.error("Erro ao buscar dados do cpf:", error);
      }
    }
  };

  const handleChange = (field, value) => {
    switch (field) {
      case "street":
        setEndereco(value);
        break;
      case "number":
        setNumero(value);
        break;
      case "neighborhood":
        setBairro(value);
        break;
      case "city":
        setCidade(value);
        break;
      default:
        break;
    }
    onUsuario((prev) => ({ 
      ...prev, 
      address: { ...prev.address, [field]: value } 
    }));
  };

  return (
    <div>
      <div className={styles.forms}>
        <div className={styles.groupForms}>
          <h6>Endereço</h6>
          <input 
            id="street" 
            type="text" 
            value={street} 
            onChange={(e) => handleChange("street", e.target.value)} 
          />
        </div>

        <div className={styles.CEP_e_NUM}>
          <div className={styles.groupForms}>
            <h6>Número</h6>
            <input 
              id="number" 
              type="number" 
              value={number} 
              onChange={(e) => handleChange("number", e.target.value)} 
            />
          </div>
          <div className={styles.groupForms}>
            <h6>CEP</h6>
            <input 
              id="cepForViaCep" 
              type="text" 
              value={postalCode} 
              onChange={handleCEPChange} 
              onBlur={handleCEPBlur} 
            />
          </div>
        </div>
        
        <div className={styles.groupForms}>
          <h6>Bairro</h6>
          <input 
            id="neighborhood" 
            type="text" 
            value={neighborhood} 
            onChange={(e) => handleChange("neighborhood", e.target.value)} 
          />
        </div>
        <div className={styles.groupForms}>
          <h6>Cidade</h6>
          <input 
            id="city" 
            type="text" 
            value={city} 
            onChange={(e) => handleChange("city", e.target.value)} 
          />
        </div>
        <div className={styles.groupForms_checkbox}>
          <input type="checkbox" name="checkbox termo" />
          <span className={styles.checkmark}></span>
          <p>
            Eu li e compreendo a <span className={styles.span}>Política de Privacidade</span> e os{" "}
            <span className={styles.span}>Termos de Serviço</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
