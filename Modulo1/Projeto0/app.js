let informacoes = [];

const pegarInfo = (event) => {
  event.preventDefault();
  let controle = true;
  let cadastro = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    celular: document.getElementById("celular").value,
    senha: document.getElementById("senha").value,
    conta: Math.floor(1000 + Math.random() * 90000),
    saldo: 0,
  };
  if (cadastro.senha == document.getElementById("csenha").value) {
    if (informacoes.length < 1) {
      informacoes.push(cadastro);
      alert(`Conta Criada com Sucesso! Numero da Conta: ${cadastro.conta}`);
    } else {
      for (let i = 0; i < informacoes.length; i++) {
        if (cadastro.cpf != informacoes[i].cpf) {
          if (cadastro.conta == informacoes[i].conta) {
            controle = false;
            break;
          }
        } else {
          alert("CPF já cadastrado");
          controle = false;
          break;
        }
      }
      if (controle) {
        informacoes.push(cadastro);
        alert(`Conta Criada com Sucesso! Numero da Conta: ${cadastro.conta}`);
      }
    }
  } else {
    alert("Senhas não conferem");
  }
};

document.getElementById("form").addEventListener("submit", pegarInfo);
