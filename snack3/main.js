// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const lista= [1, 2, 3, 4, 5, 6, 7];
function myfunction(list, a, b){
    
    
    let min = 0;
    let max = 0;
    if(a<= b){
        min= a;
        max =b
    }else{
        min= b;
        max =a;
    }
    
    
    
    while(max > list.length -1) {
        console.log("hai inserito un numero troppo grande");
        max = prompt("inserisci un nuovo numero valido");
    } 

    let newList= lista.filter(
        (elem)=> {
            if(elem>min && elem <max){
                return true
            }
        }
        )
        console.log(newList);

    // newList =(lista.filter((elem, i) => i >= min&& i < max));


//     // for(var i = min; i < max ; i++){
//     //     newList.push(list[i]);
        
//     // }

//     console.log(newList);
//     return newList;
}
myfunction(lista, 1, 7);



