var valores = [8 , 3 , 9, 5, 4, 7]
console.log(valores)
for (var pos=0;pos<valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`Ajustando em ordem crescente`)
valores.sort()
console.log(valores)



for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}