// Snack 1
// Creare un array di oggetti:
const listaBici=[

    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    
    {
        "nome": "graziella",
        "peso": 20
    },
    {
        "nome": "corsa",
        "peso": 8
    },
    {
        "nome": "enduro",
        "peso": 14
    },
];

let pesoBici=listaBici[0].peso;
for( let i = 0; i<listaBici.length; i++){
    if(pesoBici>listaBici[i].peso ){

        pesoBici=( listaBici[i]);
    }
}
// console.log(pesoBici);
    
const {nome, peso}= pesoBici

console.log(`La bici ${nome} è quella  che pesa meno : ${peso}  kg `);
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal