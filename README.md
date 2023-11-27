# Escrevendo as Classes de Um Jogo

Desafio Escrevendo as Classes de Um Jogo em javascript utilizando variaveis, operadores, estruturas de decisão, Classes e Objetos.

## Descrição

Foi criada uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades: 
* Nome
* Idade
* Tipo (ex: guerreiro, mago, monge, ninja )

A classe possui um método chamado atacar que atende aos seguientes requisitos:

* exibir a mensagem: "o {tipo heroi} {nome do heroi} atacou usando {tipo ataque}"
* No {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo os seguintes requisitos:
   * se mago -> no ataque exibir (usou magia)
   * se guerreiro -> no ataque exibir (usou espada)
   * se monge -> no ataque exibir (usou artes marciais)
   * se ninja -> no ataque exibir (usou shuriken)

Ao final é exibido uma mensagem parecido com os exemplos abaixo:

* O mago joão atacou usando magia
*  O guerreiro josé atacou usando espada