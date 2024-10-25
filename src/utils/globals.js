export const mascaraTelefone = (e) => {
  let valor = e.target.value.replace(/\D/g, "");
  if (valor.length > 11) valor = valor.substring(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  e.target.value = valor;
  };

  export const mascaraCelular = (e) => {
  let valor = e.target.value.replace(/\D/g, "");
  if (valor.length > 11) valor = valor.substring(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  e.target.value = valor;
  };
  
  export const mascaraCNPJ = (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 14) valor = valor.substring(0, 14);
      valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
      valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
      valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
      e.target.value = valor;
  };

  export const validarEmail = (email) => {
      if (!email.includes("@")) {
        return "O e-mail deve conter o símbolo @";
      }
      return "";
    };

    export const mascaraCEP = (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 8) valor = valor.substring(0, 8);
      valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
      e.target.value = valor;
  };
  