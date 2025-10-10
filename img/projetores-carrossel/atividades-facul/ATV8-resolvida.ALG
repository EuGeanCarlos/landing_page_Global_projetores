Algoritmo "atv8"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor    : Antonio Carlos Nicolodi
// Professor    : Pedro Brandão Neto
// Descrição    : Folha de pagamento + estatísticas
//    a) a média salarial líquido dos funcionários idosos (já feito)
//    b) a idade da Pessoa do maior salário líquido
//    c) o menor salário líquido dos funcionários entre 18 e 25 anos
//    d) a quantidade de salários líquidos entre 2500 e 3000
// Autor(a)     : Gean CARLOS
// Data atual   : 22/09/2025

Var

   salBruto, salLiq, descontos, IR, INSS, FGTS: real
   valorDaHoraTrab: real
   opcao, idade, qtdHorasTrab,i, qtdIdosos: inteiro
   mediaSalLiqDosIdosos, somaSalLiqDosIdosos: real
   sair: logico

   // Variáveis extras para as alternativas
   maiorSalLiq, menorSalLiq18a25: real
   idadeMaiorSalLiq: inteiro
   qtdSalLiq2500a3000: inteiro

Inicio
    escreval(">>>> Sistema de Folha de Pagamento <<<")
    sair <- falso
    i <- 1
    IR <- 0
    qtdIdosos <- 0
    somaSalLiqDosIdosos <- 0
    mediaSalLiqDosIdosos <- 0
    maiorSalLiq <- 0
    idadeMaiorSalLiq <- 0
    menorSalLiq18a25 <- 999999 // inicializa com valor bem alto
    qtdSalLiq2500a3000 <- 0

    repita
       escreval("Funcionário ", i)
       escreval("Informe a sua idade: ")
       leia(idade)
       escreval("Informe o Valor da hora: ")
       leia(valorDaHoraTrab)
       escreval("Quant. de horas trab. no mes: ")
       leia(qtdHorasTrab)

       salBruto <- valorDaHoraTrab *  qtdHorasTrab
       se (salBruto > 1800) entao
          IR <- salBruto * (8/100)
       senao
          IR <- 0
       fimse

       INSS <- salBruto * (11/100)
       FGTS <- salBruto * (10/100)
       descontos <- IR + INSS + FGTS
       salLiq <- salBruto - descontos

       escreval("Idade: ", idade)
       escreval("Salário Bruto: ", salBruto)
       escreval("IR: ", IR)
       escreval("INSS: ", INSS)
       escreval("FGTS: ", FGTS)
       escreval("Total de Descontos: ", descontos)
       escreval("Salário Liquido: ", salLiq)
       escreval("Deseja sair: 999 para sair")


       //garante que seja repetido nesse intervalo
       
       repita
             escreval("Informe sua idade (18 a 100):")
             leia(idade)
       ate ((idade >= 18)e( idade <=100))



       // a) Média salarial líquido dos idosos
       se (idade >= 60) entao
          somaSalLiqDosIdosos <- somaSalLiqDosIdosos + salLiq
          qtdIdosos <- qtdIdosos + 1
       fimse

       // b) Idade da pessoa do maior salário líquido
       se (salLiq > maiorSalLiq) entao
          maiorSalLiq <- salLiq
          idadeMaiorSalLiq <- idade
       fimse

       // c) Menor salário líquido entre 18 e 25 anos
       se (idade >= 18) e (idade <= 25) entao
          se (salLiq < menorSalLiq18a25) entao
             menorSalLiq18a25 <- salLiq
          fimse
       fimse

       // d) Quantidade de salários líquidos entre 2500 e 3000
       se (salLiq >= 2500) e (salLiq <= 3000) entao
       
          qtdSalLiq2500a3000 <- qtdSalLiq2500a3000 + 1
       fimse

       leia(opcao)
       se (opcao = 999) entao
          sair <- Verdadeiro
       fimse
       i <- i + 1
    ate (sair)

    se (qtdIdosos > 0) entao
          mediaSalLiqDosIdosos <- somaSalLiqDosIdosos / qtdIdosos
    fimse

    escreval("------ RESULTADOS FINAIS ------")
    escreval("Quant. de Idosos: ", qtdIdosos)
    escreval("Média salarial liq. dos idosos: ", mediaSalLiqDosIdosos)
    escreval("Esse é o maior salário liquido:", maiorSalLiq)
    escreval("Idade da pessoa com maior salário líquido: ", idadeMaiorSalLiq)

    se (menorSalLiq18a25 <> 999999) entao
       escreval("Menor salário líquido entre 18 e 25 anos: ", menorSalLiq18a25)
    senao
       escreval("Nenhum funcionário entre 18 e 25 anos.")
    fimse

    escreval("Qtd de salários líquidos entre 2500 e 3000: ", qtdSalLiq2500a3000)
Fimalgoritmo
