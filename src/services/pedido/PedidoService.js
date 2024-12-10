/* eslint-disable no-useless-catch */
import axios from "axios";

const APIBASEURL = "http://localhost:8080/orders";

// Função para criar um pedido
export const createOrder = async (token, orderData) => {
    try {
        console.log(orderData, "dados do pedido que chegaram");
        console.log(token, "token que chegou");
        const response = await axios.post(`${APIBASEURL}`, orderData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Pedido criado com sucesso", response);
        return response;
    } catch (error) {
        console.error("Erro ao tentar criar o pedido:", error.response?.data || error.message);
        throw error;
    }
};

// Função para deletar um pedido
export const deleteOrder = async (token, orderId) => {
    try {
        console.log(`Deletando pedido com ID: ${orderId}`);
        const response = await axios.delete(`${APIBASEURL}/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Pedido deletado com sucesso", response);
        return response;
    } catch (error) {
        console.error("Erro ao tentar deletar o pedido:", error.response?.data || error.message);
        throw error;
    }
};


export const getPaymentMethods = async (token, paymentMethod) => {
    try {
        console.log(token, "token que chegou");
        console.log(APIBASEURL);
        
        const response = await axios.get(`${APIBASEURL}/${paymentMethod}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        
        return response;
    } catch (error) {
        console.error("Erro ao tentar obter os métodos de pagamento:", error.response?.data || error.message);
        throw error;
    }
};

