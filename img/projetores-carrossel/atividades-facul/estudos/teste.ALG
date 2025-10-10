Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/09/2025
Var
   // Seção de Declarações das variáveis
   i, idade, qntIdosos, maiorSalLiq, salBruto, salLiq, valorHora, qntHoraTrab: inteiro
   ir, inss, fgts:real
   sair:logico
   opcao:inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite sua idade ")
   leia(idade)
   escreval("Digite seu salario: ")
   leia(salBruto)
   escreval("Insira o valor da hora trabalhada: ")
   leia(valorHora)
   escreval("Quantidade Horas Trabalhadas: ")
   leia(qntHoraTrab)

   sair <- falso
   i <- 0
   salBruto <- 0
   salLiq <- 0
   qntHoraTrab <- 0

   repita
      se(salBruto =< 1800)então
         escreval(" >> Salario Exento de Impostos! <<< ", salbruto)

      fimse
      se(opcao = 9999)
         sair <- verdadeiro
      fimse

   ate
fimAlgoritmo