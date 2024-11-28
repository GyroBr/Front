import {axios} from 'axios'

const apiURL = 'http://localhost:8080'

export const registerEmpresa = async (enterprises) => {
    try {
        const response = await axios.post(`/enterprises/register, ${enterprises}`, {
            headers : {
                "Content-Type" : "application/json"
            }
        }) 
        return response
    } catch (error) {
        return error
    }
}