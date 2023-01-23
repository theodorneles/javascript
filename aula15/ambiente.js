 var num = [7, 8, 5, 2 , 1]
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro valor do vetor é ${num[0]}`)
 console.log(`Nosso vetor é o ${num}`)
 num[5] = 9
 num.push(6)
 num.length
 num.sort()
 console.log(`Agora organizado em ordem crescente e adicionando os números 6 e 9`)
 console.log(`Nosso vetor é o ${num}`)

 for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
 }