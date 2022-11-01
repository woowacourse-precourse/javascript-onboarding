/*
기능 목록
1. 각 금액별 개수 구하는 기능
*/

const MONEY_50000 = 50000;
const MONEY_10000 = 10000;
const MONEY_5000 = 5000;
const MONEY_1000 = 1000;
const COIN_500 = 500;
const COIN_100 = 100;
const COIN_50 = 50;
const COIN_10 = 10;
const COIN_1 = 1;

function count(standard, money) {
  return parseInt(money/standard);
}

function left(standard, money) {
  return money%standard;
}

function problem5(money) {
  var answer;
  var standard_money = [MONEY_50000, MONEY_10000, MONEY_5000, MONEY_1000, COIN_500, COIN_100, COIN_50, COIN_10, COIN_1];
  answer = [0,0,0,0,0,0,0,0,0];

  for (let i = 0; i < standard_money.length; i++) {
    answer[i] += count(standard_money[i], money);
    money = left(standard_money[i], money);
  }

  return answer;
}

module.exports = problem5;