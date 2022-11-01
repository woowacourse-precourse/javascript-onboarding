function problem7(user, friends, visitors) {
  var arr = new Array(10001);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(10001);
  }
  let friendList = [];
  let friendScore = new Array(10001).fill(0);
  for (let i = 0; i < friends.length; i++) {
    let A = friends[i][0];
    let B = friends[i][1];
    if (friendList.indexOf(A) == -1) {
      friendList.push(A);
      arr[friendList.indexOf(A)][friendList.indexOf(A)] = -1;
    }
    if (friendList.indexOf(B) == -1) {
      friendList.push(B);
      arr[friendList.indexOf(B)][friendList.indexOf(B)] = -1;
    }
    let AIndex = friendList.indexOf(A);
    let BIndex = friendList.indexOf(B);
    arr[AIndex][BIndex] = 1;
    arr[BIndex][AIndex] = 1;
  }
  let userIndex = friendList.indexOf(user);
  for (let i = 0; i < friends.length - 1; i++) {
    if (arr[userIndex][i] == 1) {
      for (let j = 0; j < friends.length - 1; j++) {
        if (arr[i][j] == 1) {
          friendScore[j] += 10;
        }
      }
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (friendList.indexOf(visitors[i]) == -1) {
      friendList.push(visitors[i]);
    }
    if (
      arr[friendList.indexOf(user)][
        friendList.indexOf(visitors[i])
      ] != 1
    ) {
      friendScore[friendList.indexOf(visitors[i])] += 1;
    }
  }
  let sortScore = [];
  for (let i = 0; i < friendList.length; i++) {
    if (i != friendList.indexOf(user)) {
      let P = { name: friendList[i], score: friendScore[i] };
      if (arr[userIndex][i] != 1) {
        sortScore.push(P);
      }
    }
  }
  let PP = sortScore.sort(function (a, b) {
    if (b.score == a.score) {
      let x = b.name.toLowerCase();
      let y = a.name.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    }
    return b.score - a.score;
  });
  let answer = [];
  for (let i = 0; i < PP.length; i++) {
    if (answer.length == 5) {
      break;
    }
    if (PP[i].score != 0) {
      answer.push(PP[i].name);
    }
  }
  return answer;
}

module.exports = problem7;

problem7(
  "andole",
  [
    ["andole", "jun"],
    ["donut", "jun"],
    ["donut", "shakevan"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "bedi"],
    ["anne", "jun"],
  ],
  ["donut", "mrko", "peter", "sam"]
);
