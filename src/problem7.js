function problem7(user, friends, visitors) {
  var answer = [];
  var dict = {};
  for (var i = 0; i < friends.length; i++) {
    if (friends[i][0] in dict === false) {
      // 첫번째 요소가 dictionary 키에 없는 경우
      dict[friends[i][0]] = [0, friends[i][1]];
      if (friends[i][1] in dict) {
        // 두번째 요소가 dictionary 키에 있는 경우
        dict[friends[i][1]].push(friends[i][0]); // 두번째 요소에 첫번째 요소 추가
      } else {
        // 두번째 요소가 dictionary 키에 없는 경우
        dict[friends[i][1]] = [0, friends[i][0]];
      }
    } else {
      if (friends[i][1] in dict) {
        // 두번째 요소가 dictionary 키에 있는 경우
        dict[friends[i][0]].push(friends[i][1]); // 첫번째 요소에 두번째 요소 추가
        dict[friends[i][1]].push(friends[i][0]); // 두번째 요소에 첫번째 요소 추가
      } else {
        // 두번째 요소가 dictionary 키에 없는 경우
        dict[friends[i][1]] = [0, friends[i][0]];
        dict[friends[i][0]].push(friends[i][1]);
      }
    }
  }
  if (user in dict) {
    dict[user].shift();
    var user_arr = dict[user];
    delete dict[user];
  }

  for (var i = 0; i < visitors.length; i++) {
    if (visitors[i] in dict) {
      dict[visitors[i]][0]++;
    } else {
      dict[visitors[i]] = [0];
    }
  }
  var dictToArr = [];
  for (var key in dict) {
    for (var j = 0; j < user_arr.length; j++) {
      if (dict[key].indexOf(user_arr[j]) !== -1) {
        dict[key][0] += 10;
      }
    }
    if (dict[key].indexOf(user) !== -1) {
      dict[key][0] = 0;
    }
    dictToArr.push([key, dict[key]]);
  }
  dictToArr.sort();
  dictToArr.sort(function (a, b) {
    return b[1][0] - a[1][0];
  });
  for (var i = 0; i < 5; i++) {
    if (dictToArr[i][1][0] === 0) continue;
    else answer.push(dictToArr[i][0]);
  }
  return answer;
}

module.exports = problem7;
