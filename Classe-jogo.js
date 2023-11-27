class heroi{
    constructor(nome, idade, tipo){
        this.nomeHeroi = nome
        this.idadeHeroi = idade 
        this.tipoHeroi = tipo 
    }
    atacar(){
        if(this.tipoHeroi === "mago"){
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando magia`)
        }else if(this.tipoHeroi === "guerreiro"){
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando espada`)
        }else if(this.tipoHeroi === "monge"){
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando artes maciais`)
        }else if(this.tipoHeroi === "ninja"){
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando shuriken`)
        }
    }
 }

 let heroi1 = new heroi("Bernardo", 17, "guerreiro")
 let heroi2 = new heroi("Marcelo", 36, "mago")

 heroi1.atacar()
 heroi2.atacar()
 