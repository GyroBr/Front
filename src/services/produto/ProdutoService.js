import axios from "axios";

const APIBASEURL = "http://localhost:8080/products";

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

        return response;
    } catch (error) {
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
            responseType: 'arraybuffer',
        });

        const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(imageBlob);

        console.log("Imagem recuperada", imageUrl);
        return imageUrl;
    } catch (error) {
        console.error("Erro ao tentar obter a imagem do produto:", error.response?.data || error.message);
        throw error;
    }
};

export const editProduct = async (token, productId, formData) => {
    try {
        console.log(formData, "dados para edição");
        console.log(token, "token que chegou");
        const response = await axios.put(`${APIBASEURL}/${productId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Produto editado com sucesso", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao tentar editar o produto:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteProduct = async (token, productId) => {
    try {
        console.log(`Deletando produto com ID: ${productId}`);
        const response = await axios.delete(`${APIBASEURL}/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Produto deletado com sucesso", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao tentar deletar o produto:", error.response?.data || error.message);
        throw error;
    }
};
