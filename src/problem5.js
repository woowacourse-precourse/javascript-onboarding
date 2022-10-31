const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
function problem5(money) {
    let answer = []
    MONEY.map((unit, i) => {
        answer.push(parseInt(money / unit))
        money = money % unit
    })
    return answer
} 

module.exports = problem5;
