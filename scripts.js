// PARA PEGAR OS DADOS DE UMA API NO NOSSO CASO A AWESOMEAPI PODE USAR O AXIOS VAMOS APRENDER MAIS PRA FRENTE ESSA BIBLIOTECA

    //MAPEAMENTO DAS CLASSES
    const convertButton = document.querySelector(".convert-button")
    
    const inputCurrencyValue = document.querySelector(".input-currency").value /* verificar pq do erro */
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor Real
    const currencyValueConverted = document.querySelector(".currency-value-converted") // Valor Outras Moedas
    const currencySelect = document.querySelector(".current-select") //select das opções no html



//const convertValues = async () => {
async function convertValues () {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( Response => Response.json() )

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const libraToday = 6.13

    //console.log(data)

console.log(data)
    //const convertedValue = (inputCurrencyValue / dolarToday)

    if (currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD" 
        } ).format(document.querySelector(".input-currency").value / dolarToday)
    }
    
    if (currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" 
        } ).format(document.querySelector(".input-currency").value / euroToday)
    }

    if (currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new  Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC" 
        } ).format(document.querySelector(".input-currency").value / bitcoinToday)
    }

    if (currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new  Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP" 
        } ).format(document.querySelector(".input-currency").value / libraToday)
    }

    //currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL" 
    } ).format(document.querySelector(".input-currency").value)

    //currencyValueConverted.innerHTML =  convertedValue
    //console.log( document.querySelector(".input-currency").value )
}

function changeCurrency(){
    currencyName = document.querySelector("#currency-name")
    currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./img/estados-unidos.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./img/libra.png"
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues )
currencySelect.addEventListener("change", changeCurrency )
