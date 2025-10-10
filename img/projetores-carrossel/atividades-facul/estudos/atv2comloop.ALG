Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/09/2025

// ATIVIDADE 2
// 1. Escreva um programa que determine se um número é ímpar.

Var
   // Seção de Declarações das variáveis
   numero,qntPar: inteiro


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   numero <- 1
   qntPar <- 0

  escreval("Digite o primeiro numero: ")
  leia(numero)

   repita
      se ( numero % 2 = 0)entao

         escreval("esse numero é par!", numero)
         qntPar <- qntPar + 1

      fimse
      se ( numero % 2 <> 0) entao

         escreval("esse numero é ímpar!" , numero  )

      fimse

         numero <- numero + 1
   ate(numero > 50)
   escreval("Quantidade de números pares: ", qntPar)

Fimalgoritmo