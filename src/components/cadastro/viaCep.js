const cepForViaCep = document.querySelector('#cep')
const endereco = document.querySelector('#endereco')
const numero = document.querySelector('#numero')
const estado = document.querySelector('#estado')
const cidade = document.querySelector('#cidade')

cepForViaCep.addEventListener('focuout', () => {
  console.log('focusout')
})