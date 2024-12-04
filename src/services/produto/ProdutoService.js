import axios from "axios";

const APIBASEURL = "http://localhost:8080/products";

// Função para registrar um novo produto
export const registerProduct = async (token, formData) => {
  try {
    console.log(formData, "dados que chegaram");
    console.log(token, "token que chegou");
    const response = await axios.post(`${APIBASEURL}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Produto cadastrado", response);
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar adicionar o produto:", error.response?.data || error.message);
    throw error;
  }
};

export const getProducts = async (token) => {
  try {
    const response = await axios.get(`${APIBASEURL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Produtos recuperados", response.data);
    return response.data; 
  } catch (error) {
    console.error("Erro ao tentar obter os produtos:", error.response?.data || error.message);
    throw error;
  }
};

export const getProductImage = async (token, imageName) => {
    try {
      const response = await axios.get(`${APIBASEURL}/images/${imageName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'arraybuffer', // Para lidar com a imagem como um buffer de bytes
      });
  
      // Converter o buffer em uma URL de imagem
      const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
      const imageUrl = URL.createObjectURL(imageBlob);
  
      console.log("Imagem recuperada", imageUrl);
      return imageUrl; // Retorna a URL da imagem para exibição
    } catch (error) {
      console.error("Erro ao tentar obter a imagem do produto:", error.response?.data || error.message);
      throw error;
    }
  };


