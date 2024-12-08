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

export const updateEmployee = async (token, formData, id) => {
    try {
        const response = await api.put(`/admin/update-employee/${id}`, formData, {
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

export const deleteEmployee = async (token) => {
    try {
        const response = await api.delete(`/admin/update-employee/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
}





