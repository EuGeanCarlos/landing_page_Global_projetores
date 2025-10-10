Algoritmo "atv8"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   :
// Professor   : Pedro Brandão Neto
//    b) a idade da Pessoa do maior salário líquido
//    c) o menor salário líquido dos funcionários entre 18 e 25 anos
 //   d) a quantidade de salários líquidos entre 2500 e 3000
// Autor(a)    : Gean CARLOS
// Data atual  : 22/09/2025



Var
// Seção de Declarações das variáveis
   salBruto, salLiq, descontos, IR, INSS, FGTS: real
   valorDaHoraTrab: real
   opcao, idade, qtdHorasTrab,i, qtdIdosos:inteiro
   mediaSalLiqDosIdosos, somaSalLiqDosIdosos: real
   sair: logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    escreval(">>>> Sistema de Folha de Pagamento <<<")
    sair <- falso
    i <- 1
    IR <- 0
    qtdIdosos <- 0
    somaSalLiqDosIdosos <- 0
    mediaSalLiqDosIdosos <- 0
    repita
       escreval("Funcionário ", i)
       escreval("Informe a  sua idade: ")
       leia(idade)
       escreval("Informe o Valor da hora: ")
       leia(valorDaHoraTrab)
       escreval("Quant. de horas trab. no mes: ")
       leia(qtdHorasTrab)
       salBruto <- valorDaHoraTrab *  qtdHorasTrab
       se (salBruto > 1800) entao
          IR <- salBruto * (8/100)
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
       // a) a média salarial líquido dos funcionários dos idosos
       se (idade >= 60) entao
          somaSalLiqDosIdosos<- somaSalLiqDosIdosos+salLiq
          qtdIdosos <- qtdIdosos+1
       fimse
       leia(opcao)
       se (opcao=999) entao
          sair <- Verdadeiro
       fimse
       i <- i + 1
    ate (sair)

    se (qtdIdosos > 0) entao
          mediaSalLiqDosIdosos <- somaSalLiqDosIdosos/qtdIdosos
    fimse
    escreval("Quant. dos Idosos: ", qtdIdosos)
    escreval("Média salarial liq. dos idosos: ", mediaSalLiqDosIdosos)
Fimalgoritmo