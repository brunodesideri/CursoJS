let num = [5,8,2,9,3]
num[num.length] = 7;
num.sort()
console.log (num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)
for (pos = 0; pos < num.length; pos++ ) {
    console.log(num[pos])    
}
console.log('-^')
for (var pos in num) {
    console.log(num[pos])
}

let position = num.indexOf(8)

console.log('-^')
console.log(position)