function compararNumeros(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2)
  const segundaFrase = criaSegundaFrase(num1, num2)
  return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
  let primeiraFrase = `Os números ${num1} e ${num2}`
  let nao = ''

  if (num1 !== num2) {
    nao = 'não'
  }

  return `${primeiraFrase} ${nao} são iguais.`
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2
  let comparaDez = 'menor do que'
  let comparaVinte = 'menor do que'

  if (soma > 10) {
    comparaDez = 'maior do que'
  } else if (soma === 10) {
    comparaDez = 'igual a'
  }

  if (soma > 20) {
    comparaVinte = 'maior do que'
  } else if (soma === 20) {
    comparaVinte = 'igual a'
  }

  return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`
}

console.log(compararNumeros(5, 5))
