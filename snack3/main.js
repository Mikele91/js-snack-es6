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
    
    
    
    while(max > list.length-1 ) {
        
        max = prompt("inserisci un nuovo numero valido");
    } 
    // let newList =list.map( (element, i)  => {
    //     if(i >= min && i< max){
    //         return(element);
    //     }   
    // });
    let newList =[];
    list.forEach( (element, i)  => {
        if(i >= min && i< max){
            newList.push(element);
        }   
    });
        
    


    // let newList= lista.filter(
    //     (elem, i)=> {
    //         if(i>=min && i <=max){
    //             return true
    //         }
    //     }
    //     )
        console.log(newList);

    // newList =(list.filter((elem, i) => i >= min&& i < max));


//     // for(var i = min; i < max ; i++){
//     //     newList.push(list[i]);
        
//     // }

//     console.log(newList);
//     return newList;
}
myfunction(lista, 1, 5);



