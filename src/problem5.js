function problem5(money) {
  let answer = []; //정답
      let sort_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];//지폐종류
      for (let i = 0; i < sort_money.length; i++) {
          if (i == 0) {
              answer[i] = Math.floor(money / sort_money[i]);
          } else {
              answer[i] = Math.floor((money % sort_money[i - 1]) / sort_money[i]);
          }
      }
    return answer;
}
             
let input = [
  50237,
  15000 
];
// for (let i = 0; i < input.length; i++) {
//   console.log(`#${i + 1} ${problem5(input[i])}`);
// }
module.exports = problem5;