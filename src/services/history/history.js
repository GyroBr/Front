import axios from "axios";

const api = axios.create(
    {
        // usando URL como variável de ambiente
        baseURL: 'http://localhost:8080'
    }
);

export const getOrders = async (token) => {
    try {
        const response = await api.get(`/orders`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Erro ao tentar obter dados dos produtos", error.response?.data || error.message);
        throw error;
    }
};

export default getOrders;