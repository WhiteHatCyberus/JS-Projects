//functional programming example 1
var CurrencyOne=10
var CurrencyTwo=0
var exchangerate=1.2
function  convertCurrency(amount, rate){
    return amount*rate
}
CurrencyTwo=convertCurrency(CurrencyOne, exchangerate)
console.log(CurrencyTwo)