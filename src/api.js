// export * from "./Home"
// export * from "./Cadastro"
// export * from "./Login"
import axios from "axios";

const api = axios.create(
    {
        // usando URL como variável de ambiente
        baseURL: 'http://localhost:8080'
    }
);

export default api;