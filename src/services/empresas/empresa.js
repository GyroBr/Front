import {axios} from 'axios'

export const registerEmpresa = async () => {
    try {
        const response = await axios.post('http://localhost:8080/enterprises/register') 
        return response
    } catch (error) {
        return error
    }
}