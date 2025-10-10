Algoritmo "atv_09"

// Disciplina   :
// Professores  :
// Descrição    : Folha de pagamento + estatísticas
// Autor(a)     : Gean Carlos
// Data         : 27/09/2025

Var

   // variaveis primeira parte atv
   salBruto, salLiq, descontos, IR, INSS, FGTS, bonus, adicionalDep: real
   valorDaHoraTrab: real
   opcao, idade, qtdHorasTrab, i, qtdIdosos, tempoEmpresa, dependentes: inteiro
   mediaSalLiqDosIdosos, somaSalLiqDosIdosos: real
   sair: logico

   // Variáveis extras para as alternativas
   maiorSalLiq, menorSalLiq18a25: real
   idadeMaiorSalLiq: inteiro
   qtdSalLiq2500a3000: inteiro

   // variáveis novas adc
   cargo: caractere
   qtdComBonus, totalColabs: inteiro
   somaOp, somaTec, somaGer: real
   qtdOp, qtdTec, qtdGer: inteiro

Inicio
    escreval(">>>> Sistema de Folha de Pagamento <<<")
    sair <- falso
    i <- 1

    // Inicializações
    qtdIdosos <- 0
    somaSalLiqDosIdosos <- 0
    mediaSalLiqDosIdosos <- 0
    maiorSalLiq <- 0
    idadeMaiorSalLiq <- 0
    menorSalLiq18a25 <- 999999
    qtdSalLiq2500a3000 <- 0
    qtdComBonus <- 0
    totalColabs <- 0
    somaOp <- 0
    somaTec <- 0
    somaGer <- 0
    qtdOp <- 0
    qtdTec <- 0
    qtdGer <- 0

    repita
       escreval("Funcionário ", i)
       escreval("Informe a sua idade (18 a 100): ")
       leia(idade)
       escreval("Informe o cargo (Operador, Técnico ou Gerente): ")
       leia(cargo)
       escreval("Informe o tempo de empresa (em anos): ")
       leia(tempoEmpresa)
       escreval("Informe o número de dependentes: ")
       leia(dependentes)
       escreval("Informe o valor da hora trabalhada: ")
       leia(valorDaHoraTrab)
       escreval("Quant. de horas trabalhadas no mês: ")
       leia(qtdHorasTrab)

       salBruto <- valorDaHoraTrab * qtdHorasTrab

       // IR
       se (salBruto <= 1800) entao
          IR <- 0
       senao
          se (salBruto <= 3000) entao
             IR <- salBruto * 0.15
          senao
             IR <- salBruto * 0.25
          fimse
       fimse

       INSS <- salBruto * 0.10
       FGTS <- salBruto * 0.11
       descontos <- IR + INSS + FGTS

       // Bônus por tempo de empresa
       bonus <- 0
       se (tempoEmpresa >= 2) e (tempoEmpresa <= 5) entao
          bonus <- salBruto * 0.05
          qtdComBonus <- qtdComBonus + 1
       senao
          se (tempoEmpresa > 5) entao
             bonus <- salBruto * 0.10
             qtdComBonus <- qtdComBonus + 1
          fimse
       fimse

       // Adicional por dependentes
       adicionalDep <- dependentes * 100

       salLiq <- salBruto - descontos + bonus + adicionalDep

       escreval("Idade: ", idade)
       escreval("Cargo: ", cargo)
       escreval("Salário Bruto: ", salBruto)
       escreval("IR: ", IR)
       escreval("INSS: ", INSS)
       escreval("FGTS: ", FGTS)
       escreval("Total de Descontos: ", descontos)
       escreval("Bônus por tempo de empresa: ", bonus)
       escreval("Adicional por dependentes: ", adicionalDep)
       escreval("Salário Líquido: ", salLiq)
       escreval("Digite 999 para sair ou qualquer outro número para continuar:")
       leia(opcao)

       totalColabs <- totalColabs + 1

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

       // f) Média do salário líquido por cargo
       se (cargo = "Operador") entao
          somaOp <- somaOp + salLiq
          qtdOp <- qtdOp + 1
       senao
          se (cargo = "Técnico") entao
             somaTec <- somaTec + salLiq
             qtdTec <- qtdTec + 1
          senao
             se (cargo = "Gerente") entao
                somaGer <- somaGer + salLiq
                qtdGer <- qtdGer + 1
             fimse
          fimse
       fimse

       i <- i + 1
    ate (opcao = 999)

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

    // e) Porcentagem de colaboradores com bônus
    escreval("Porcentagem de colaboradores com bônus: ", (qtdComBonus / totalColabs) * 100, "%")

    // f) Médias por cargo
    se (qtdOp > 0) entao
       escreval("Média salarial líquido - Operadores: ", somaOp / qtdOp)
    fimse
    se (qtdTec > 0) entao
       escreval("Média salarial líquido - Técnicos: ", somaTec / qtdTec)
    fimse
    se (qtdGer > 0) entao
       escreval("Média salarial líquido - Gerentes: ", somaGer / qtdGer)
    fimse

Fimalgoritmo
