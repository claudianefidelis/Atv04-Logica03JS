// | `For/Break/Continue` | Utilize a estrutura de repetição for para 
//imprimir no console conforme instruções:



// // a) números de 1 a 50

for (let i = 1; i <= 50; i++){
    console.log(`Contando de 1 a 50 com for ->  ${i}`)
}    




// // b) quando chegar no número 25 interrompa a instrução e pare o loop

for(let i = 1; i <= 50; i++){
    console.log(i)
if(i === 25){
    break
}   
}
console.log("Break")




// c) quando chegar no número 10 pule a instrução|

for(let i = 1; i <= 50; i++){
if(i === 10){
    console.log("continuar")
    continue
}  
console.log(`${i}`) 
}