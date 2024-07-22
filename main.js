let persona = {
    nome: 'Piero',
    cognome : 'Pierini',
    età : '34',

saluto : function(){
console.log(`ciao, sono ${this.nome} ${this.cognome} e ho ${this.età} anni`)
}
};

persona.saluto()

