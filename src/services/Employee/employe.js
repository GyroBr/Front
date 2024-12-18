import axios from "axios";

const api = axios.create(
    {
        // usando URL como variável de ambiente
        baseURL: 'http://localhost:8080'
    }
);

export const registerEmployee = async (token, formData) => {
    try {
        // console.log(formData, "dados");
        // console.log(token, "token");
        const response = await api.post(`/admin/register-employee`, formData, {
            headers: {
                "Content-type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const getEmployees = async (token) => {
    try {
        const response = await api.get(`/admin`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Funcionários recuperados", response.data);
        return response;
    } catch (error) {
        console.error("Erro ao tentar obter os funcionários:", error.response?.data || error.message);
        throw error;
    }
};

export const updateEmployee = async (token, body, id) => {
    try {
        const response = await api.put(`/admin/update-employee/${id}`, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteEmployee = async (id, token) => {
    try {
        const response = await api.delete(`/admin/delete-employee/${id}`, {
            headers: {
        
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
}





