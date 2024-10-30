import axios from "axios";

const cadastrarEmpresa = async (dados) => {
  try {
    const response = await axios.post("http://localhost:8080/empresas/cadastrar", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar empresa:", error);
    throw error;
  }
};
const logar = async (dados) => {
    try {
      const response = await axios.post("http://localhost:8080/login", dados, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
      throw error;
    }
  };

export {cadastrarEmpresa, logar}
