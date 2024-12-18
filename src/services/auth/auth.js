import axios from "axios"


export const auth = async (data) => {
    try {
        console.log('Dados enviados:', data);

        const response = await axios.post("http://localhost:8080/auth/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;

    } catch (error) {
        console.error("Erro ao logar empresa:", error);
        throw error;
    }
};

