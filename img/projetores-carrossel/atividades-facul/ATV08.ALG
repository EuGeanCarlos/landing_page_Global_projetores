Algoritmo "atv07"
// Disciplina  : Algoritmios
// Professor  : Carlos Brand?o
// Autor(a)   : Gean carlos silva gon?alves
// Data atual : 21/09/2025


// Seção de Declarações das variáveis 
var
 idade, qtdHoras, qtdIdosos, qtdSalarios2500_3000: inteiro
   valorHora: real
   salarioBruto, inss, fgts, ir, salarioLiquido: real
   somaIdosos, mediaIdosos: real
   maiorSalario, menorSalario18_25: real
   idadeMaiorSalario: inteiro

inicio
   // Inicializações
   somaIdosos <- 0
   qtdIdosos <- 0
   maiorSalario <- 0
   menorSalario18_25 <- 999999
   qtdSalarios2500_3000 <- 0

   escreval("=== CÁLCULO DE SALÁRIOS ===")
   escreval("Digite 999 na idade para sair.")

   repita
      escreval("")
      escreva("Digite a idade: ")
      leia(idade)

      se (idade <> 999) entao
         escreva("Digite o valor da hora: ")
         leia(valorHora)
         escreva("Digite a quantidade de horas no mês: ")
         leia(qtdHoras)

         // Calcula salário bruto
         salarioBruto <- valorHora * qtdHoras

         // Calcula descontos
         inss <- salarioBruto * 0.10
         fgts <- salarioBruto * 0.11
         ir <- 0
         se (salarioBruto > 1800) entao
            ir <- salarioBruto * 0.15
         fimse

         salarioLiquido <- salarioBruto - inss - ir // FGTS não desconta

         // a) Média salarial dos idosos (idade >= 60)
         se (idade >= 60) entao
            somaIdosos <- somaIdosos + salarioLiquido
            qtdIdosos <- qtdIdosos + 1
         fimse

         // b) Idade da pessoa do maior salário líquido
         se (salarioLiquido > maiorSalario) entao
            maiorSalario <- salarioLiquido
            idadeMaiorSalario <- idade
         fimse

         // c) Menor salário líquido entre 18 e 25 anos
         se (idade >= 18) e (idade <= 25) entao
            se (salarioLiquido < menorSalario18_25) entao
               menorSalario18_25 <- salarioLiquido
            fimse
         fimse

         // d) Quantidade de salários líquidos entre 2500 e 3000
         se (salarioLiquido >= 2500) e (salarioLiquido <= 3000) entao
            qtdSalarios2500_3000 <- qtdSalarios2500_3000 + 1
         fimse
      fimse
   ate (idade = 999)

   escreval("")
   escreval("=== RESULTADOS ===")

   // a) Média dos idosos
   se (qtdIdosos > 0) entao
      mediaIdosos <- somaIdosos / qtdIdosos
      escreval("a) Média salarial líquido dos idosos: ", mediaIdosos:5:2)
   senao
      escreval("a) Nenhum idoso informado.")
   fimse

   // b) Maior salário líquido
   escreval("b) Idade da pessoa com maior salário líquido: ", idadeMaiorSalario)

   // c) Menor salário entre 18 e 25 anos
   se (menorSalario18_25 < 999999) entao
      escreval("c) Menor salário líquido entre 18 e 25 anos: ", menorSalario18_25:5:2)
   senao
      escreval("c) Nenhum funcionário entre 18 e 25 anos.")
   fimse

   // d) Quantidade entre 2500 e 3000
   escreval("d) Quantidade de salários líquidos entre 2500 e 3000: ", qtdSalarios2500_3000)

   escreval("")
   escreval("=== FIM ===")
fimalgoritmo
