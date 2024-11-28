import axios from "axios";

export default async function viaCepService(cep) {
  // const cepForViaCep = document.querySelector("#cepForViaCep");
  const endereco = document.querySelector("#endereco");
  const numero = document.querySelector("#numero");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  console.log(cep)

  const uriViaCep = `https://viacep.com.br/ws/${cep}/json/`;

 try{
  const response = await axios.get(uriViaCep)


  const data = response.data;

  console.log(data)

  if(data.erro){
    console.log('houve um erro ao procurar cep ' , data.erro)
  }

    endereco.value = data.logradouro;
    numero.value = data.unidade;
    bairro.value = data.bairro; 
    cidade.value = data.localidade;

 }catch(error){
  console.log(error)
 }
}