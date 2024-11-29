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
    if (postalCode.length === 9) { 
      const data = await viaCepService(postalCode);
      if (data) {
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        onUsuario((prevUsuario) => ({
          ...prevUsuario,
          address: {
            street: data.logradouro,
            number: number, 
            postalCode: postalCode.replace(/[\s()-]/g, ""), 
            neighborhood: data.bairro,
            city: data.localidade,
          }
        }));
      } else {
        console.warn("Nenhum dado encontrado para o CEP.");
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
   
    onUsuario((prevUsuario) => ({
      ...prevUsuario,
      address: {
        ...prevUsuario.address,
        [field]: value,
      }
    }));
  };

  return (
    <div>
      <div className={styles.forms}>
        <div className={styles.groupForms}>
          <h6>CEP</h6>
          <input
            type="text"
            value={postalCode}
            onChange={handleCEPChange}
            onBlur={handleCEPBlur}
          />
        </div>

        <div className={styles.groupForms}>
          <h6>Número</h6>
          <input
            type="text"
            value={number}
            onChange={(e) => handleChange("number", e.target.value)}
          />
        </div>

        <div className={styles.groupForms}>
          <h6>Endereço</h6>
          <input
            type="text"
            value={street}
            onChange={(e) => handleChange("street", e.target.value)}
          />
        </div>
        
        <div className={styles.groupForms}>
          <h6>Bairro</h6>
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => handleChange("neighborhood", e.target.value)}
          />
        </div>
        <div className={styles.groupForms}>
          <h6>Cidade</h6>
          <input
            type="text"
            value={city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
