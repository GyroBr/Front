import axios from 'axios';

const apiURL = 'http://localhost:8080/enterprises';

export const registerEnterprise = async (empresa) => {
    try {
        const response = await axios.post(`${apiURL}/register`, empresa, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response;
    } catch (error) {
        throw error ;
    }
};


export const getEnterpriseById = async (token) => {
    try {
        const response = await axios.get(`${apiURL}/get-by-id`, {
            headers: {
                "Authorization": token
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
