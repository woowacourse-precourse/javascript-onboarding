function problem7(user, friends, visitors) {
  let answer;
  const scoreObject = {};
  const scoreListKeyArray = new Set();

  for (let friend of friends.flat()) {
    scoreListKeyArray.add(friend);
  }

  console.log(scoreListKeyArray);
  console.log(createScoreObj(scoreListKeyArray, scoreObject));
  return answer;
}

const createScoreObj = (scoreKeySet, scoreObj) => {
  for (let item of scoreKeySet) {
    scoreObj[item] = 0;
  }
  return scoreObj;
};

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
