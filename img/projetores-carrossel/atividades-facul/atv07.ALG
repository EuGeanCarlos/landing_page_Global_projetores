algoritmo "PesquisaSaboresSorvete"



var
   opcao, totalRespostas, goiaba, morango, tapioca: inteiro
   porcentGoiaba, porcentMorango, porcentTapioca: real
   saborFavorito: caractere
   empate: logico

inicio
   // Inicialização das variáveis
   totalRespostas <- 0
   goiaba <- 0
   morango <- 0
   tapioca <- 0
   empate <- falso

   escreval("=== PESQUISA DE OPINIÃO - SABORES DE SORVETE ===")
   escreval("")

   repita
      escreval("Escolha seu sabor favorito:")
      escreval("1 - Sabor Goiaba")
      escreval("2 - Sabor Morango")
      escreval("3 - Sabor Tapioca")
      escreval("999 - Sair da pesquisa")
      escreval("")
      escreva("Digite sua opção: ")
      leia(opcao)
      escreval("")

      se (opcao = 1) entao
         goiaba <- goiaba + 1
         totalRespostas <- totalRespostas + 1
         escreval("Voto registrado para Goiaba!")
      senao se (opcao = 2) entao
         morango <- morango + 1
         totalRespostas <- totalRespostas + 1
         escreval("Voto registrado para Morango!")
      senao se (opcao = 3) entao
         tapioca <- tapioca + 1
         totalRespostas <- totalRespostas + 1
         escreval("Voto registrado para Tapioca!")
      senao se (opcao = 999) entao
         escreval("Saindo da pesquisa...")
      senao
         escreval("Opção inválida! Digite 1, 2, 3 ou 999 para sair.")
      fimse

      escreval("----------------------------------------")
   ate (opcao = 999)

   // Cálculo das porcentagens
   se (totalRespostas > 0) entao
      porcentGoiaba <- (goiaba / totalRespostas) * 100
      porcentMorango <- (morango / totalRespostas) * 100
      porcentTapioca <- (tapioca / totalRespostas) * 100
   fimse

   // Determinação do sabor favorito
   se (totalRespostas > 0) entao
      se (goiaba > morango) e (goiaba > tapioca) entao
         saborFavorito <- "Goiaba"
      senao se (morango > goiaba) e (morango > tapioca) entao
         saborFavorito <- "Morango"
      senao se (tapioca > goiaba) e (tapioca > morango) entao
         saborFavorito <- "Tapioca"
      senao
         empate <- verdadeiro
      fimse
   fimse

   // Exibição dos resultados
   escreval("")
   escreval("=== RESULTADOS DA PESQUISA ===")
   escreval("")
   escreval("a) Total de respostas: ", totalRespostas)
   escreval("")
   escreval("b) Quantidade por sabor:")
   escreval("   Goiaba: ", goiaba, " votos")
   escreval("   Morango: ", morango, " votos")
   escreval("   Tapioca: ", tapioca, " votos")
   escreval("")
   escreval("c) Porcentagem por sabor:")
   escreval("   Goiaba: ", porcentGoiaba:5:2, "%")
   escreval("   Morango: ", porcentMorango:5:2, "%")
   escreval("   Tapioca: ", porcentTapioca:5:2, "%")
   escreval("")
   escreval("d) Sabor favorito: ")

   se (totalRespostas = 0) entao
      escreval("   Nenhum voto registrado.")
   senao
      se (empate) entao
         escreval("   Há empate entre os sabores!")
         escreval("   Goiaba: ", goiaba, " votos")
         escreval("   Morango: ", morango, " votos")
         escreval("   Tapioca: ", tapioca, " votos")
      senao
         escreval("   ", saborFavorito, " com ",
                  escolha saborFavorito
                     caso "Goiaba": goiaba
                     caso "Morango": morango
                     caso "Tapioca": tapioca
                  fimescolha, " votos")
      fimse
   fimse

   escreval("")
   escreval("=== FIM DA PESQUISA ===")
fimalgoritmo