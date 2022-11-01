function problem7(user, friends, visitors) {
  var answer = [];
  let check = [];
  let result = [];
  let newResult = [];
  if (user.length < 1 || user.length > 30) return;
  if (friends.length < 1 || friends.length > 10000) return;
  for (let i = 0; i < friends.length; i++) {
    if (
      (friends[i][0].length || friends[i][1].length) < 1 ||
      (friends[i][0].length || friends[i][1].length) > 10000
    )
      return;
    if (
      !(
        friends[i][0].charCodeAt(0) >= 97 && friends[i][0].charCodeAt(0) <= 122
      ) ||
      !(friends[i][1].charCodeAt(0) >= 97 && friends[i][1].charCodeAt(0) <= 122)
    )
      return;
  }
  if (visitors.length < 0 || visitors.length > 10000) return;
  for (let i = 0; i < friends.length; i++) {
    for (let j = 1; j < friends.length - 1; j++) {
      if (friends[i].join() === friends[j].join()) break;
    }
    return;
  }
  //친구추천
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      check.push(friends[i][0]);
    }
  }
  for (let i = 0; i < check.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(check[i])) {
        if (friends[j].includes(user)) continue;
        result.push([friends[j][1], 10]);
      }
    }
  }
  //함께 아는 친구 점수 검사
  let count = 0;
  let checked = result;
  let arr = [];
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < checked.length; j++) {
      if (result[i].join("") === checked[j].join("")) count += 1;
    }
    arr.push([result[i][0], 10 * count]);
    result = result.filter((e) => e !== result[i]);
    count = 0;
  }
  //visitors 검사
  let newCount = [];
  for (let i = 0; i < visitors.length; i++) {
    newCount.push(visitors[i], visitors.filter((x) => visitors[i]).length);
  }
  newCount = [...new Set(newCount)];
  for (let i = 0; i < newCount.length; i++) newResult.push(newCount[i]);
  newResult.sort((a, b) => b[1] - a[1]);
  if (newResult.length > 5) {
    for (let i = 0; i < 5; i++) {
      answer.push(newResult[i]);
    }
  }
  return answer;
}

module.exports = problem7;
