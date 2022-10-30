function problem5(money) {

  
  // let arr = [];
  
  // const $5manCount = (money - (money % 50000)) / 50000
  // arr.push($5manCount)
  // money -= $5manCount * 50000
  // console.log(money)
  
  // const $1manCount = (money - (money % 10000)) / 10000
  // arr.push($1manCount)
  // money -= $1manCount * 10000
  
  // const $5CheonCount = (money - (money % 5000)) / 5000
  // arr.push($5CheonCount)
  // money -= $5CheonCount * 5000
  
  // const $1CheonCount = (money - (money % 1000)) / 1000
  // arr.push($1CheonCount)
  // money -= $1CheonCount * 1000
  
  // const $5baekCount = (money - (money % 500)) / 500
  // arr.push($5baekCount)
  // money -= $5baekCount * 500
  
  // const $1baekCount = (money - (money % 100)) / 100
  // arr.push($1baekCount)
  // money -= $1baekCount * 100
  
  // const $5seepCount = (money - (money % 50)) / 50
  // arr.push($5seepCount)
  // money -= $5seepCount * 50
  
  // const $1seepCount = (money - (money % 10)) / 10
  // arr.push($1seepCount)
  // money -= $1seepCount * 10
  
  // const $1Count = (money - (money % 1)) / 1
  // arr.push($1Count)
  // money -= $1Count * 1
  
  // return arr;
}

module.exports = problem5;


let moneyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let [$50000, $10000, $5000, $1000, $500, $100, $50, $10, $1] = moneyCount

$50000 += 1

console.log(moneyCount)

