// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const random = (min, max) =>Math.floor(Math.random()* (max-min+1)+min);
const squadre = [
    {
        "nome"       : "Bari",
        "puntiFatti" : 0,
        "falliSubiti": 0,
    },
    {
        "nome"       : "Torino",
        "puntiFatti" : 0,
        "falliSubiti": 0,
    },
    {
        "nome"       : "Milan",
        "puntiFatti" : 0,
        "falliSubiti": 0,
    }
];


for( let i = 0; i<squadre.length; i++){
    let squadra = squadre[i]; 
    squadra["puntiFatti"] = random(0,30);
    squadra["falliSubiti"] = random(0,30);
    console.log(squadre[i]["puntiFatti"], squadre[i]["falliSubiti"]);
}

console.log(squadre);
let punteggi =[];
for( let i = 0; i<squadre.length; i++){
    let squadra = squadre[i];
    const{nome, falliSubiti} = squadra
    punteggi.push(`${nome} ha subito ${falliSubiti} falli`)
    // punteggi.push(squadra["falliSubiti"])
}
console.log(punteggi);



// console.log(squadre[i]["puntiFatti"], squadre[i]["falliSubiti"]);


// Generare numeri random al posto degli 0 nelle proprietà:

// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.