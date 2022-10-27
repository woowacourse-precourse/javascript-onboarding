const currencyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
    const answerList = [];
    let currentMoney = Number(money);
    currencyList.forEach((currency)=>{
        const number = Math.floor(currentMoney/currency);
        answerList.push(number);
        currentMoney -= number*currency;
    })
    
    return answerList;
}

module.exports = problem5;
