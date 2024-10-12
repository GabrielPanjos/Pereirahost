// Variaveis globais
// Lista de Quartos
var quartos = [];

for (let i = 1; i <= 20; i++) {
    quartos.push({
        nome: "Quarto " + i,
        numero: i,
        status: "livre"
    });
}

// Variavel para armazenar os hóspedes
var lista_de_hospedes = []


// Nome do hotel e a senha
const nome_do_hotel = "PereiraHost"
const senha = 2678

// Entrando na conta
alert(`bem vindo ao hotel ${nome_do_hotel}`)

let nome_do_usuario = prompt("Qual o seu nome?")

while (!isNaN(nome_do_usuario) || nome_do_usuario == "") {
    alert("Digite um nome")
    nome_do_usuario = prompt("Qual o seu nome?")
}

let senha_inserida = prompt("Agora digite sua senha")
while (parseInt(senha_inserida) !== senha) {
    alert("Senha inválida")
    senha_inserida = prompt("Agora digite sua senha")
}

// Dando boas vindas e entrando no programa
alert(`Bem vindo ao hotel ${nome_do_hotel}, ${nome_do_usuario}. É um imenso prazer ter você por aqui!`)
inicio()

// Programa
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n \n 1.) Reserva de Quartos \n 2.) Cadastro de Hóspedes \n 3.) Abastecimento de Carros \n 4.) Fazer Eventos \n 5.) Manutenção do Ar-condicionado \n 6.) Sair'));

    switch (escolha) {

        case 1:
            reserva_quartos()
            break
        case 2:
            menu_cadastro()
            break
        case 3:
            abastecer_carros()
            break
        case 4:
            eventos()
            break
        case 5:
            manutencao_ar_condicionado()
            break
        case 6:
            sair()
            break
        default:
            erro()
            break
    }
}

function reserva_quartos() {



    // Variaveis sem valor
    let valor_da_diaria = 0
    let dias_de_hospedagem = 0

    // Inicio da reserva de quartos
    alert(`HOTEL ${nome_do_hotel} - RESERVA DE QUARTOS`);
    valores_hospedagem()

    // Atribuindo valores à diária
    function valores_hospedagem() {

        // Perguntando o valor da diária
        valor_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"))
        while (isNaN(valor_da_diaria) || valor_da_diaria <= 0) {
            alert(`Valor inválido, ${nome_do_usuario}`)
            valor_da_diaria = parseFloat(prompt("Digite o valor padrão da diária"))
        }

        // Perguntando quantos dias de hospedagem
        dias_de_hospedagem = parseInt(prompt("Quantas diárias serão necessárias?"))
        while (isNaN(dias_de_hospedagem) || dias_de_hospedagem > 30 || dias_de_hospedagem <= 0) {
            alert(`Valor inválido, ${nome_do_usuario}`)
            dias_de_hospedagem = parseInt(prompt("Digite quantas diárias serão necessárias"))
        }

        // Avisando o valor e chamando função para cadastrar os hospedes
        alert(`O valor de ${dias_de_hospedagem} dias de hospedagem é de ${(dias_de_hospedagem * valor_da_diaria)}R$`)

        cadastrando_hospedes()
    }

    // Cadastrando hospedes
    function cadastrando_hospedes() {

        let quarto_escolhido = ""

        // Perguntando nome dos hospedes
        let nome_do_hospede = prompt("Qual o nome do hóspede?")
        while (!isNaN(nome_do_hospede)) {
            alert("Digite um nome válido")
            nome_do_hospede = prompt("Qual o nome do hóspede?")
        }

        // Chamando função para perguntar qual quarto hospedar
        perguntando_quarto()

        // Função perguntando qual quarto quer hospedar
        function perguntando_quarto() {
            quarto_escolhido = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"))

            while (quarto_escolhido <= 0 || quarto_escolhido > 20 || isNaN(quarto_escolhido)) {
                alert(`Não existe o quarto ${quarto_escolhido}, escolha um quarto (1 - 20)`)
                quarto_escolhido = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"))
            }

            // Vendo se o quarto está livre ou ocupado
            if (quartos[quarto_escolhido - 1].status === "livre") {
                alert("Quarto Livre")

                // Chamando função para confirmar hospedagem
                confirmar_hospedagem()

            } else {
                // Caso quarto esteja ocupado
                alert(`Quarto está ocupado. Escolha outro. \n\ ${quartos.map(q => q.nome + " - " + q.status).join("\n")}`)
                perguntando_quarto()
            }
        }

        // Função para ocupar quarto
        function ocupar_quarto() {
            quartos[quarto_escolhido - 1].status = `Ocupado`
            alert("Quarto reservado com sucesso!");
            alert(`Lista de quartos e suas ocupações: \n ${quartos.map(q => q.nome + " - " + q.status).join("\n")}`);
            inicio()
        }

        // Função para confirmar hospedagem
        function confirmar_hospedagem() {
            let escolha = prompt(`${nome_do_usuario}, você confirma a hospedagem para ${nome_do_hospede} por ${dias_de_hospedagem} dias para o quarto ${quarto_escolhido} por ${(dias_de_hospedagem * valor_da_diaria)}R$? S/N`).toUpperCase();

            switch (escolha) {

                case "S":
                    alert(`${nome_do_usuario}, reserva efetuada para ${nome_do_hospede}`)
                    ocupar_quarto()
                    break
                case "N":
                    alert("Você recusou a hospedagem")
                    inicio()
                    break
                default:
                    alert("Digite S/N")
                    confirmar_hospedagem()
                    break
            }
        }
    }
}

function cadastro_hospedes() {

    // Inicio do cadastro de hospedes
    alert(`HOTEL ${nome_do_hotel} - CADASTRO DE HÓSPEDES`);

    // Lista de hóspedes


    // Variaveis
    let hospede_menor = 0
    let hospede_maior = 0
    let hospede_comum = 0

    let valor_total_da_hospedagem = 0

    let valor_da_diaria = 0

    let quantidade_de_hospedes = 0

    // Verificando valor da diária
    valor_da_diaria = parseFloat(prompt("Qual o valor padrão da diária?"))
    while (isNaN(valor_da_diaria) || valor_da_diaria <= 0) {
        alert(`Valor inválido, ${nome_do_usuario}`)
        valor_da_diaria = parseFloat(prompt("Digite o valor padrão da diária"))
    }

    // Chamando função cadastro de hospedes
    cadastro_de_hospedes()

    function cadastro_de_hospedes() {

        while (quantidade_de_hospedes < 15) {
            // Inserindo nome do hóspede
            let nome_do_hospede = prompt("Qual o nome do hóspede?")
            while (!isNaN(nome_do_hospede) || nome_do_hospede === "") {
                alert("Insira um nome válido.")
                nome_do_hospede = prompt("Qual o nome do hóspede?")
            }

            // Parando caso o usuário digite "PARE"
            if (nome_do_hospede.toUpperCase() === "PARE") {
                alert(`${nome_do_usuario}, o valor total das hospedagens é: R$${(valor_total_da_hospedagem.toFixed(2))}; ${hospede_menor} gratuidade(s); ${hospede_maior} meia(s)`)
                menu_cadastro()
                return;
            } else {

                // Inserindo idade do hóspede
                let idade_do_hospede = parseInt(prompt("Qual a idade do Hóspede?"))
                while (isNaN(idade_do_hospede) || idade_do_hospede === "" || idade_do_hospede <= 0) {
                    alert("Insira uma idade válida.")
                    idade_do_hospede = parseInt(prompt("Qual a idade do Hóspede?"))
                }

                // Guardando a idade do hóspede
                if (idade_do_hospede <= 6) {
                    hospede_menor++
                } else if (idade_do_hospede >= 60) {
                    hospede_maior++
                    valor_total_da_hospedagem = valor_total_da_hospedagem + (valor_da_diaria / 2)
                } else {
                    hospede_comum++
                    valor_total_da_hospedagem = valor_total_da_hospedagem + valor_da_diaria
                }

                // Mensagem de cadastro
                alert(`${nome_do_hospede} cadastrado(a) com sucesso.`)
                quantidade_de_hospedes++
                lista_de_hospedes.push(nome_do_hospede)

                menu_cadastro()
            }
        }
        // Caso a quantidade de hospedes seja maior que 15
        alert("Máximo de cadastros atingido")
        menu_cadastro()

    }


}

function menu_cadastro() {

    let escolha = parseInt(prompt("Selecione uma opção: \n\ \n\ 1- cadastrar; \n\ 2- pesquisar; \n\ 3- listar; \n\ 4- sair. "))

    switch (escolha) {

        case 1:
            cadastro_hospedes()
            break
        case 2:
            pesquisar_hospede()
            break
        case 3:
            listar_hospedes()
            break
        case 4:
            inicio()
            break
        default:
            erro_cadastro()
            break
    }

}

function pesquisar_hospede() {

    let pesquisar = prompt("Qual o nome do Hóspede?")

    if (!isNaN(pesquisar) || pesquisar === "") {
        alert("Isso não é um nome.")
        pesquisar_hospede()
    }

    if (lista_de_hospedes.includes(pesquisar)) {
        alert(`Hóspede ${pesquisar} foi encontrado(a)!`)
        menu_cadastro()
    } else {
        alert(`Hóspede ${pesquisar} não foi encontrado(a)!`)
        menu_cadastro()
    }
}

function listar_hospedes() {
    if (lista_de_hospedes.length === 0) {
        alert("Não tem ninguém na lista");
    } else {
        alert(`Os hóspedes cadastrados são: \n ${lista_de_hospedes.join(", ")}`);
    }
    menu_cadastro();
}

function eventos() {
    alert(`HOTEL ${nome_do_hotel} - EVENTOS`);

    alert("Parte 1: Quantidade de Convidados")

    var nome_da_empresa = ""

    // Váriaveis
    let auditorio = ""
    var dia = ""
    let horario = 0

    // Perguntando a quantidade de convidados
    let convidados_evento = parseInt(prompt("Qual o número de convidados para o seu evento?"))
    while (convidados_evento > 350 || convidados_evento < 0) {
        alert("Número de convidados inválido")
        convidados_evento = parseInt(prompt("Qual o número de convidados para o seu evento?"))
    }

    // Verificando qual auditório usar
    if (convidados_evento <= 150) {
        auditorio = "Auditorio Laranja"
        alert(`Use o ${auditorio}`)
    } else if (convidados_evento >= 220) {
        auditorio = "Auditorio Colorado"
        alert(`use o ${auditorio}`)
    } else if (convidados_evento > 150 && convidados_evento <= 220) {
        auditorio = "Auditorio Laranja"
        alert(`Use o ${auditorio} (Inclua mais ${((convidados_evento - 150))} cadeiras)`)
    }

    // Chamando função para continuar o programa
    marcar_hora_evento()

    // Função para marcar a hora do evento
    function marcar_hora_evento() {

        alert("Agora vamos ver a agenda do evento.")
        alert("Parte 2: Agenda")

        var lista_de_dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "sábado", "domingo"]

        // Variavel dia
        dia = prompt("Qual o dia do seu evento?")
        while (!isNaN(dia) || dia === "" || !lista_de_dias.includes(dia.toLowerCase())) {
            alert("O dia inserido não é válido. Tente novamente.")
            dia = prompt("Qual o dia do seu evento")
        }



        marcar_hora_continuacao()

        // Função para looping
        function marcar_hora_continuacao() {

            horario = parseInt(prompt("Qual é a hora do seu evento?"))
            while (isNaN(horario) || horario === "") {
                alert("Hora inválida")
                horario = parseInt(prompt("Digite é a hora do seu evento"))
            }

            if (dia.toUpperCase() == "SEGUNDA" || dia.toUpperCase() == "TERÇA" || dia.toUpperCase() == "QUARTA" || dia.toUpperCase() == "QUINTA" || dia.toUpperCase() == "SEXTA") {
                if (horario >= 7 && horario <= 23) {
                    continuacao_marcar_hora_evento()
                } else {
                    alert("Auditório indisponível")
                    marcar_hora_continuacao()
                }

            } else if (dia.toUpperCase() == "SÁBADO" || dia.toUpperCase() == "DOMINGO" || dia.toUpperCase() == "SABADO") {
                if (horario >= 7 && horario <= 15) {
                    continuacao_marcar_hora_evento()
                } else {
                    alert("Auditório indisponível")
                    marcar_hora_continuacao()
                }
            }
        }
        // Função para continuar de marcar a hora do evento
        // Não era necessário fazer isso, mas fiz
        function continuacao_marcar_hora_evento() {
            nome_da_empresa = prompt("Qual o nome da empresa?")
            while (!isNaN(nome_da_empresa) || nome_da_empresa == "") {
                nome_da_empresa = prompt("Digite o nome da empresa?")
            }

            alert(`Auditório reservado para ${nome_da_empresa}. ${dia} às ${horario}hrs.`)
        }
    }

    // Contratando garçons
    let garcons_por_convidados = Math.ceil(convidados_evento / 12);

    let duracao_evento = parseInt(prompt("Qual a duração do evento em horas?"))
    while (isNaN(duracao_evento) || duracao_evento <= 0) {
        alert("Número de horas inválido. Insira um número válido.")
        duracao_evento = parseInt(prompt("Qual a duração do evento em horas?"))
    }

    let garcons_adicionais_por_tempo = Math.floor(duracao_evento / 2);

    let total_garcons = garcons_por_convidados + garcons_adicionais_por_tempo

    let custo_total = total_garcons * duracao_evento * 10.50

    alert(`São necessários ${total_garcons} garçons.`)
    alert(`Custo: R$${custo_total}`)
    alert(`Agora vamos calcular o buffet do hotel para o evento.`)
    alert("Parte 4: Buffet")

    // Buffet

    let quantidade_cafe = 0.2 * convidados_evento
    let quantidade_agua = 0.5 * convidados_evento
    let quantidade_salgados = 7 * convidados_evento

    let valor_cafe = quantidade_cafe * 0.80
    let valor_agua = quantidade_agua * 0.40
    let valor_salgados = Math.ceil(quantidade_salgados / 100) * (34)

    let custo_total_buffet = valor_agua + valor_cafe + valor_salgados

    alert(`O evento precisará de ${quantidade_cafe} litros de café; ${quantidade_agua} litros de água; ${quantidade_salgados} salgados.`)

    alert(`Evento no ${auditorio}. \n Nome da empresa: ${nome_da_empresa}. \n Data: ${dia}, ${horario} às ${horario + duracao_evento}. \n Duração do evento: ${duracao_evento}. \n Quantidade de garçons: ${total_garcons}. \n Quantidade de convidados: ${convidados_evento}. \n \n Custo do garçons: R$${custo_total}. \n Custo do Buffet: R$${custo_total_buffet}. \n Valor total do evento: R$${custo_total + custo_total_buffet}.`)

    let pergunta = prompt("Gostaria de efetuar a reserva? S/N");
    while (pergunta.toUpperCase() !== "S" && pergunta.toUpperCase() !== "N") {
        alert("Digite S ou N");
        pergunta = prompt("Gostaria de efetuar a reserva? S/N");
    }

    if (pergunta.toUpperCase() === "S") {
        alert(`${nome_do_usuario}, reserva efetuada com sucesso.`);
        inicio();
    } else if (pergunta.toUpperCase() === "N") {
        alert(`${nome_do_usuario}, reserva não efetuada.`);
        inicio();
    }

}

function abastecer_carros() {
    alert(`HOTEL ${nome_do_hotel} - ABASTECER`);

    // Variáveis dos preços
    var alcool_wayne_oil = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    var gasolina_wayne_oil = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    var alcool_stark_petrol = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    var gasolina_stark_petrol = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    // Tamanho do tanque
    var tamanho_tanque = 42;

    // Calculando o valor total para abastecer em cada posto
    var total_alcool_wayne = alcool_wayne_oil * tamanho_tanque;
    var total_gasolina_wayne = gasolina_wayne_oil * tamanho_tanque;
    var total_alcool_stark = alcool_stark_petrol * tamanho_tanque;
    var total_gasolina_stark = gasolina_stark_petrol * tamanho_tanque;

    // Verificando qual é mais barato
    var usar_alcool_wayne = alcool_wayne_oil <= (gasolina_wayne_oil * 0.7);
    var usar_alcool_stark = alcool_stark_petrol <= (gasolina_stark_petrol * 0.7);

    // Comparando os preços para encontrar a opção mais barata
    // Opção 1: Álcool no Wayne Oil
    if (usar_alcool_wayne && total_alcool_wayne < total_alcool_stark && total_alcool_wayne < total_gasolina_stark && total_alcool_wayne < total_gasolina_wayne) {
        alert("É mais barato abastecer com álcool no posto Wayne Oil. Custo total: R$" + total_alcool_wayne.toFixed(2));
        inicio()
    }

    // Opção 2: Gasolina no Wayne Oil
    if (total_gasolina_wayne < total_alcool_wayne && total_gasolina_wayne < total_alcool_stark && total_gasolina_wayne < total_gasolina_stark) {
        alert("É mais barato abastecer com gasolina no posto Wayne Oil. Custo total: R$" + total_gasolina_wayne.toFixed(2));
        inicio()
    }

    // Opção 3: Álcool no Stark Petrol
    if (usar_alcool_stark && total_alcool_stark < total_alcool_wayne && total_alcool_stark < total_gasolina_wayne && total_alcool_stark < total_gasolina_stark) {
        alert("É mais barato abastecer com álcool no posto Stark Petrol. Custo total: R$" + total_alcool_stark.toFixed(2));
        inicio()
    }

    // Opção 4: Gasolina no Stark Petrol
    if (total_gasolina_stark < total_alcool_wayne && total_gasolina_stark < total_alcool_stark && total_gasolina_stark < total_gasolina_wayne) {
        alert("É mais barato abastecer com gasolina no posto Stark Petrol. Custo total: R$" + total_gasolina_stark.toFixed(2));
        inicio()
    }

}

function manutencao_ar_condicionado() {

    alert(`HOTEL ${nome_do_hotel} - MANUTENÇÃO DE AR-CONDICIONADO`);

    let menor_valor = Infinity
    let empresa_menor_valor = ""

    // Chamando função
    calcular_manutencao()

    function calcular_manutencao() {

        // Nome da empresa
        let nome_empresa = prompt("Qual o nome da empresa?")
        while (nome_empresa === "" || !isNaN(nome_empresa)) {
            alert("Nome inválido")
            nome_empresa = prompt("Qual o nome da empresa?")
        }
        // Valor por aparelho
        let valor_por_aparelho = parseFloat(prompt("Qual o valor por aparelho?"))
        while (isNaN(valor_por_aparelho) || valor_por_aparelho === "") {
            alert("Valor inválido")
            valor_por_aparelho = parseFloat(prompt("Qual o valor por aparelho?"))
        }
        // Quantidade de aparelhos
        let quantidade_de_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"))
        while (isNaN(quantidade_de_aparelhos) || quantidade_de_aparelhos === "") {
            alert("Valor inválido")
            quantidade_de_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"))
        }
        // Porcentagem de desconto
        let porcentagem_de_desconto = parseFloat(prompt("Qual a porcentagem de desconto?"))
        while (isNaN(porcentagem_de_desconto) || porcentagem_de_desconto === "") {
            alert("Valor inválido")
            porcentagem_de_desconto = parseFloat(prompt("Qual a porcentagem de desconto?"))
        }
        // Quantidade mínima para desconto
        let minimo_para_desconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"))
        while (isNaN(minimo_para_desconto) || minimo_para_desconto === "") {
            alert("Valor inválido")
            minimo_para_desconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"))
        }

        // Valor total do serviço
        let valorTotal = valor_por_aparelho * quantidade_de_aparelhos

        // Verificando se tem desconto
        if (quantidade_de_aparelhos >= minimo_para_desconto) {
            let desconto = (porcentagem_de_desconto / 100) * valorTotal
            valorTotal -= desconto
        }

        alert(`O serviço da ${nome_empresa} custará R$${valorTotal.toFixed(2)}`)

        if (valorTotal < menor_valor) {
            menor_valor = valorTotal
            empresa_menor_valor = nome_empresa
        }

        // Looping para manutenção do ar-condicionado
        continuar = prompt(`Deseja informar novos dados, ${nome_do_usuario}? (S/N)`)
        if (continuar.toUpperCase() === "S") {
            calcular_manutencao()
        } else if (continuar.toUpperCase() === "N") {
            alert(`O orçamento de menor valor é o de ${empresa_menor_valor} por R$ ${menor_valor.toFixed(2)}`);
            inicio()
        }

    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

function erro_cadastro() {
    alert('Por favor, informe um número entre 1 e 4');
    menu_cadastro();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${nome_do_usuario}.`)
        window.close();
    } else {
        inicio();
    }
}
