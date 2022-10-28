function problem5(money) {
  const fiveCounts = Array(4).fill(0);
  const tenCounts = Array(5).fill(0);

  const moneyCount = money.toString().split("");
  const seperate = moneyCount.splice(0, moneyCount.length - 4);

  let j = 1;
  for (let i = 0; i < moneyCount.length; i++) {
    if (moneyCount[i] % 5 === 0 && moneyCount[i] != 0 && i < 2) {
      fiveCounts[j] += 1;
    } else {
      tenCounts[j] = moneyCount[i] * 1;
    }
    j++;
  }

  if (seperate.length > 1) {
    fiveCounts[0] = Math.floor(seperate.join("") / 5);
    tenCounts[0] = seperate.join("") % 5;
  } else {
    if (seperate.join("") % 5 === 0) {
      fiveCounts[0] += 1;
    } else {
      tenCounts[0] = seperate[0] * 1;
    }
  }

  const answer = [];
  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      answer.push(fiveCounts[i]);
    }
    answer.push(tenCounts[i]);
  }
  return answer;
}

module.exports = problem5;
