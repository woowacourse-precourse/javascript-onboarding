function problem4(word) {
  var answer;
  return answer;
}

let word ="I LOVE YOU"
let alpa ="ABCDEFGHIJKLMNOPQRSATUVWXYZ";
let alpaArr= Array.from(alpa);
let beta = Array.from(alpa).reverse();
let wordArr = Array.from(word);
let ans =[];
let answer =[];
for(i=0; i<=wordArr.length; i++)
{
  ans.push(alpaArr.indexOf(wordArr[i]))
}
console.log(ans)
for(i=0; i<=wordArr.length; i++)
{
  answer.push(alpaArr.find(alpaArr.indexOf ===3))
}
module.exports = problem4;
