function problem7(user, friends, visitors) {
  var answer;
  let withFriends = [];
  let score = {};
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[j].length; j++) {
      score[friends[i][j]] = 0;
    }
    let list = friends[i][1];
    let list2 = friends[i][0];
    if (list == user) {
      withFriends.push(friends[i][0]); // donut , shakevan
    } else if (list2 == user) {
      withFriends.push(friends[i][1]);
    }
  }
  for (let a = 0; a < withFriends.length; a++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(user)) {
        continue;
      }
      if (friends[j][0] == withFriends[a]) {
        score[friends[j][1]] = score[friends[j][1]] + 10;
      } else if (friends[j][1] == withFriends[a]) {
        score[friends[j][0]] = score[friends[j][0]] + 10;
      }
    }
  }
  for (let j = 0; j < visitors.length; j++) {
    score[visitors[j]] = 0;
  }
  for (let j = 0; j < visitors.length; j++) {
    let flag = 0;
    for (let a = 0; a < withFriends.length; a++) {
      if (visitors[j] == withFriends[a]) {
        flag = 1;
      }
    }
    if (flag) {
      continue;
    }

    score[visitors[j]] += 1;
  }
  let result = [];
  let newResult = [];
  for (let list in score) {
    if (score[list] == 0) {
      continue;
    }
    result.push([list, score[list]]);
  }
  result.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  if (result.length > 5) {
    for (let a = 0; a < result.length; a++) {
      newResult.push(result[a][0]);
    }
    return newResult;
  } else {
    for (let a = 0; a < 5; a++) {
      if (!result[a]) {
        break;
      }
      newResult.push(result[a][0]);
    }
  }
  return newResult;
}
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

//
