import axios from "axios";

const APIBASEURL = "http://localhost:8080/products"


export const registerProduct = async (token, productBody) => {
    try {
        console.log("Body enviado para o servidor:", token);
        const response = await axios.post(`${APIBASEURL}`, productBody, {

            headers: {
                "Content-Type": "application/json",
                
                Authorization: `Bearer ${token}`
            }
        }); 

        console.log("Produto cadastrado", response)
        return response
        
    } catch (error) {
        console.log("error to post product", error)
    }

}
