const button = document.querySelector('button')

button.addEventListener('click', convert)

async function exchangeRate() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/BRL')
  const data = await response.json()

  return data.rates.USD
}

async function convert() {
  const valueBRL = document.getElementById('BRL').value

  const exchange = await exchangeRate()

  if(exchange) {
   const valueUSD = exchange * valueBRL

   document.getElementById('USD').value = valueUSD.toFixed(2)
  } 
}

document.addEventListener('DOMContentLoaded', async () => {
  const exchange = await exchangeRate()

  if(exchange) {
    const valueUpdateRate = exchange

    document.querySelector('p').innerHTML = `
      R$ 1 = ${valueUpdateRate} USD
  `
  }
})