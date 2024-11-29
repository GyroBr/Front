  import axios from "axios";

  export default async function viaCepService(cep) {
    // const cepForViaCep = document.querySelector("#cepForViaCep");
    const street = document.querySelector("#endereco");
    const number = document.querySelector("#numero");
    const neighborhood = document.querySelector("#bairro");
    const city = document.querySelector("#cidade");
    console.log(cep)

    const uriViaCep = `https://viacep.com.br/ws/${cep}/json/`;

  try{
    const response = await axios.get(uriViaCep)


    const data = response.data;

    console.log(data)

    if(data.erro){
      console.log('houve um erro ao procurar cep ' , data.erro)
    }

      street.value = data.logradouro;
      number.value = data.unidade;
      neighborhood.value = data.bairro; 
      city.value = data.localidade;

  }catch(error){
    console.log(error)
  }
  }