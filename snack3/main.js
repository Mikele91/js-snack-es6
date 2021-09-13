// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const lista= [12, 23, 34, 45, 56, 67, 78];
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
    
    
    
    while(max > list.length-1 ) {
        
        max = prompt("inserisci un nuovo numero valido");
    } 
    // let newList =list.map( (element, i)  => {
    //     if(i >= min && i< max){
    //         return(element);
    //     }   
    // });
    // let newList =[];
    // list.forEach( 
    //     (element, i)  => {
    //     if(i >= min && i<= max){
    //         newList.push(element);
    //     }   
    // }
    // );
    // return newList;
    // let newList=  invece di salvarla e restituirla restituiamo già il tutto!
    
    return lista.filter( (elem, i)=>  i>=min && i <=max); //essendo unica riga levendo  graffe e return con arrow function si può scrivere così!
        // {
            // if(i>=min && i <=max){ questa condizione restituisce sempre ture o folse e quindi non c'è bisongo di scriverlo noi !
            //     return true
            // }
        // }
    
    // return newList;
    // newList =(list.filter((elem, i) => i >= min&& i < max));
//     // for(var i = min; i < max ; i++){
//     //     newList.push(list[i]);
        
//     // }
//     console.log(newList);
//     return newList;
}


console.log(myfunction(lista, 1, 5));

