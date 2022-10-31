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

const valorDisable = (event) => {
  if (document.getElementById("operacao").value == "saldo") {
    document.getElementById("valor").disabled = true;
    document.getElementById("valor").placeholder = "";
    document.getElementById("valor").value = "";
  } else {
    document.getElementById("valor").disabled = false;
    document.getElementById("valor").value = "";
    document.getElementById("valor").placeholder = "Insira um valor numérico";
  }
};

const pegarOperacao = (event) => {
  event.preventDefault();
  const pessoa = informacoes.find(
    (elemento) => elemento.cpf === document.getElementById("cpf2").value
  );
  if (pessoa) {
    if (pessoa.senha == document.getElementById("senha2").value) {
      if (document.getElementById("operacao").value == "saldo") {
        opSaldo(pessoa);
        console.log("saldo");
      } else if (document.getElementById("operacao").value == "deposito") {
        opDeposito(pessoa);
        console.log("deposito");
      } else {
        opSaque(pessoa);
        console.log("saque");
      }
    } else {
      return alert("Senha não confere");
    }
  } else {
    return alert("Não temos nenhuma conta correspondente a esse cpf");
  }
  console.log(pessoa);
};

const opSaque = () => {};

const opDeposito = (Conta) => {
  const valor = document.getElementById("valor").value;
  if (valor > 0) {
    Conta.saldo += parseFloat(valor);
    return alert(
      `Depósito de ${valor} dinheiros efetuado com sucesso na conta ${Conta.conta}. Novo saldo: ${Conta.saldo} dinheiros`
    );
  } else {
    return alert("Valor não aceito, por favor inserir um valor maior que 0");
  }
};

const opSaldo = (Conta) => {
  alert(`O Saldo atual da Conta ${Conta.conta} é de ${Conta.saldo}`);
  document.getElementById("valor").value = `${Conta.saldo}`;
};

document.getElementById("form").addEventListener("submit", pegarInfo);
document.getElementById("form2").addEventListener("submit", pegarOperacao);
document.getElementById("operacao").addEventListener("change", valorDisable);
window.addEventListener("load", valorDisable);
