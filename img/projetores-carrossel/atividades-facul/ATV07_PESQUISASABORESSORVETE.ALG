algoritmo "atv07_PesquisaSaboresSorvete"

var
   opcao, total, goiaba, morango, tapioca: inteiro

inicio
   total <- 0
   goiaba <- 0
   morango <- 0
   tapioca <- 0

   escreval("=== PESQUISA DE SORVETE ===")
   escreval("Digite o número do sabor ou 999 para sair.")

   repita
      escreval("")
      escreval("1 - Goiaba")
      escreval("2 - Morango")
      escreval("3 - Tapioca")
      escreval("999 - Sair")
      escreva("Opção: ")
      leia(opcao)

      se (opcao = 1) entao
         goiaba <- goiaba + 1
         total <- total + 1
      senao se (opcao = 2) entao
         morango <- morango + 1
         total <- total + 1
      senao se (opcao = 3) entao
         tapioca <- tapioca + 1
         total <- total + 1
      senao se (opcao <> 999) entao
         escreval("Opção inválida!")
      fimse
   ate (opcao = 999)

   escreval("")
   escreval("=== RESULTADOS ===")
   escreval("Total de votos: ", total)
   escreval("Goiaba: ", goiaba)
   escreval("Morango: ", morango)
   escreval("Tapioca: ", tapioca)

   se (goiaba > morango) e (goiaba > tapioca) entao
      escreval("Sabor favorito: Goiaba")
   senao se (morango > goiaba) e (morango > tapioca) entao
      escreval("Sabor favorito: Morango")
   senao se (tapioca > goiaba) e (tapioca > morango) entao
      escreval("Sabor favorito: Tapioca")
   senao
      escreval("Deu empate!")
   fimse

   escreval("=== FIM ===")
fimalgoritmo
