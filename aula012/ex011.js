var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
        console.log('Você pode votar, mas não é obrigatório')
} else if (idade < 67) {
        console.log('Voto obrigatório!')
}

