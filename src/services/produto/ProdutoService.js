import axios from "axios";

const APIBASEURL = "http://localhost:8080/produtos"


export const getCategoriasByEmpresaId = async (token) => {
    try {
        const response = await axios.get(`${APIBASEURL}/get-categories-by-empresa-id`, {
            headers: {
                Authorization: token
            }
        });

        console.log("Repostas das categorias", response)
    } catch (error) {
        console.log("error to get categories", error)
    }

}