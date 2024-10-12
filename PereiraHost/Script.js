// ESSA FOI MINHA PRIMEIRA TENTATIVA

// começo do programa. pergunta o nome do usuário e a senha
var usuario = prompt("Bem vindo ao PereiraHost. \n\n Qual o seu nome?");
var senha = parseInt(prompt("Digite sua senha"));
while (senha !== 2678) {
	alert("Senha incorreta.");
	senha = parseInt(prompt("Digite sua senha"));
}

// se a senha for correta, o programa será iniciado
alert("Bem vindo ao Hotel PereiraHost, " + usuario + ". É um imenso prazer ter você por aqui!");
inicio();

// programa
function inicio() {
	var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Sair'));

	switch (escolha) {
		case 1:
			reserva_quartos();
			break;
		case 2:
			cadastro_hospedes();
			break;
		case 3:
			abastecer_carros();
			break;
		case 4:
			sair();
			break;
		default:
			erro();
			break;
	}
}

// lista de quartos (variaveis da função reserva de quartos)
var quartos = [
	"Quarto 1- livre", "Quarto 2- livre", "Quarto 3- livre", "Quarto 4- livre", "Quarto 5- livre",
	"Quarto 6- livre", "Quarto 7- livre", "Quarto 8- livre", "Quarto 9- livre", "Quarto 10- livre",
	"Quarto 11- livre", "Quarto 12- livre", "Quarto 13- livre", "Quarto 14- livre", "Quarto 15- livre",
	"Quarto 16- livre", "Quarto 17- livre", "Quarto 18- livre", "Quarto 19- livre", "Quarto 20- livre"
];

function reserva_quartos() {
	alert('HOTEL PereiraHost - RESERVA DE QUARTOS');

	// pergunta o valor da diária
	var valor_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
	while (valor_da_diaria <= 0) {
		alert("Valor inválido. Insira um valor correto.");
		valor_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
	}

	// pergunta quantos dias o hóspede passará hospedado
	var dias_hospedado = parseInt(prompt("Quantas diárias serão necessárias?"));
	while (dias_hospedado <= 0) {
		alert("Valor inválido. Insira um valor correto.");
		dias_hospedado = parseInt(prompt("Quantas diárias serão necessárias?"));
	}
	while (dias_hospedado > 30) {
		alert("Você não pode passar mais de 30 dias hospedado.");
		dias_hospedado = parseInt(prompt("Quantas diárias serão necessárias?"));
	}
	alert("O valor de " + dias_hospedado + " dias de hospedagem é de R$" + (valor_da_diaria * dias_hospedado));

	// pergunta o nome do hóspede
	var nome = prompt("Qual o nome do hóspede?");
	while (!isNaN(nome)) {
		alert("Insira um nome.");
		nome = prompt("Qual o nome do hóspede?");
	}

	// pergunta em qual quarto o hóspede deseja ser hospedado
	var quarto_hospedado = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
	while (quarto_hospedado < 1 || quarto_hospedado > 20) {
		alert("Escolha um quarto entre 1 e 20.");
		quarto_hospedado = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
	}

	quartoString = "Quarto " + quarto_hospedado + "- livre";
	if (quartos.includes(quartoString)) {
		var index = quartos.indexOf(quartoString);
		if (index !== -1) {
			quartos[index] = "Quarto " + quarto_hospedado + "- ocupado";
		}
		alert("Quarto " + quarto_hospedado + " reservado com sucesso.");
	} else {
		alert("Desculpe, o quarto " + quarto_hospedado + " não está disponível. Escolha outro.");
		alert(quartos.join(", "));
		quarto_hospedado = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
	}

	// pergunta se o hóspede deseja confirmar a hospedagem
	var confirmar_hospedagem = prompt(nome + ", você confirma a hospedagem por " + dias_hospedado + " dias para o quarto " + quarto_hospedado + " por " + (valor_da_diaria * dias_hospedado).toFixed(2) + "? S/N").toUpperCase();

	switch (confirmar_hospedagem) {
		case "S":
			alert("Reserva efetuada para " + nome + ".");
			alert(quartos.join(", "));
			break;
		case "N":
			inicio();
			break;
		default:
			confirmar_hospedagem = prompt(nome + ", você confirma a hospedagem por " + dias_hospedado + " dias para o quarto " + quarto_hospedado + " por " + (valor_da_diaria * dias_hospedado).toFixed(2) + "? S/N").toUpperCase();
			break;
	}
}

// variáveis da função de cadastro
var valor_padrao_da_diaria = 0;

var hospedes_menores = 0;
var hospedes_comuns = 0;
var hospedes_maiores = 0;

var quantidade_hospedes_maiores = 0;
var quantidade_hospedes_menores = 0;

function cadastro_hospedes() {
	alert('HOTEL PereiraHost - CADASTRO DE HÓSPEDES');

	// pergunta o valor padrão da diária
	valor_padrao_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
	while (valor_padrao_da_diaria <= 0 || isNaN(valor_padrao_da_diaria)) {
		alert("Insira um valor válido.");
		valor_padrao_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
	}

	// looping para cadastrar os hóspedes
	var nome_do_hospede = "";

	cadastrar_hospedes()

	function cadastrar_hospedes() {

		// pergunta o nome do hóspede
		nome_do_hospede = prompt("Qual o nome do Hóspede?");

		if (nome_do_hospede.toUpperCase() === ("PARE")) {
			var totalHospedagens = hospedes_comuns + hospedes_maiores;
			alert(usuario + ", o valor total das hospedagens é: R$" + totalHospedagens.toFixed(2) + "; " + quantidade_hospedes_menores + " gratuidade(s); " + quantidade_hospedes_maiores + " meia(s).");
			inicio();
		} else {
			while (!isNaN(nome_do_hospede)) {
				alert("Digite um nome válido.");
				nome_do_hospede = prompt("Qual o nome do Hóspede?");
			}

			// pergunta a idade do hóspede
			var idade = parseInt(prompt("Qual a idade do hóspede?"));
			while (idade <= 0 || isNaN(idade)) {
				alert("Insira uma idade válida.");
				idade = parseInt(prompt("Qual a idade do hóspede?"));
			}

			// mensagem de cadastro
			if (idade <= 6) {
				alert(nome_do_hospede + " Cadastrado(a) com sucesso. " + nome_do_hospede + " possui gratuidade.");
				quantidade_hospedes_menores++;
				cadastrar_hospedes()
			} else if (idade >= 60) {
				alert(nome_do_hospede + " Cadastrado(a) com sucesso. " + nome_do_hospede + " paga meia.");
				hospedes_maiores += valor_padrao_da_diaria / 2;
				quantidade_hospedes_maiores++;
				cadastrar_hospedes()
			} else {
				alert(nome_do_hospede + " Cadastrado(a) com sucesso.");
				hospedes_comuns += valor_padrao_da_diaria;
				cadastrar_hospedes()
			}
		}
	}
}

function abastecer_carros() {
	alert('HOTEL PereiraHost - ABASTECER');

	// variaveis
	var alcool_wayne_oil = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
	var gasolina_wayne_oil = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
	var alcool_stark_petrol = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
	var gasolina_stark_petrol = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

	var usar_alcool_wayne = alcool_wayne_oil <= (gasolina_wayne_oil * 0.7);
	var usar_alcool_stark = alcool_stark_petrol <= (gasolina_stark_petrol * 0.7);

	if (usar_alcool_wayne && alcool_wayne_oil < alcool_stark_petrol && alcool_wayne_oil < gasolina_stark_petrol) {
		alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil.");
		return;
	}
	if (gasolina_wayne_oil < alcool_wayne_oil && gasolina_wayne_oil < alcool_stark_petrol && gasolina_wayne_oil < gasolina_stark_petrol) {
		alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil.");
		return;
	}
	if (usar_alcool_stark && alcool_stark_petrol < alcool_wayne_oil && alcool_stark_petrol < gasolina_wayne_oil) {
		alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol.");
		return;
	}
	if (gasolina_stark_petrol < alcool_wayne_oil && gasolina_stark_petrol < alcool_stark_petrol && gasolina_stark_petrol < gasolina_wayne_oil) {
		alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol.");
		return;
	}
}

function erro() {
	alert('Por favor, informe um número entre 1 e 4');
	inicio();
}

function sair() {
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		alert("Muito obrigado e até logo, " + usuario + ".");
		window.close();
	} else {
		inicio();
	}
}

inicio();
