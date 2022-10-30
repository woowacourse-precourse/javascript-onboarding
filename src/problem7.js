function problem7(user, friends, visitors) {
  var answer;
  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
      let findUserFriend = friends[i].indexOf(user);
      if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
  }
  let acquaintanceArr = [];
  for (let i = 0; i < userFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][i] != user) {
        acquaintanceArr.push(friends[j][1 - i]);
      }
    }
  }
  let acquaintance = acquaintanceArr
  .filter(x => !userFriend.includes(x))
  .filter(x => x !== user);
  
  let UserwithScore = giveScore(acquaintance, 10)
  let totalScoreArr = UserwithScore.concat(giveScore(visitors, 1));
  console.log(totalScoreArr);

  let finalScoreArr = sumScore(totalScoreArr);
  console.log(finalScoreArr);

  return answer;
}

function giveScore(arr, score) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push([arr[i], score]);
  }
  return result;
}

function sumScore(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] == arr[j][0]) {
        arr[i][1] += arr[j][1];
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

module.exports = problem7;

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