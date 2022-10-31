function filterRealFriends(user, friends) {
  let array = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      array.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      array.push(friends[i][0]);
    }
  }
  return array;
}

function scoreInFriends(user, friends, realFriends) {
  let key;
  let dict = {};
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < realFriends.length; j++) {
      if (friends[i].includes(realFriends[j])) {
        let index = friends[i].indexOf(realFriends[j]);
        if (index === 0) {
          key = friends[i][1];
        } else {
          key = friends[i][0];
        }
        // user 자기 자신은 제외.
        if (key !== user) {
          if (dict[key]) {
            dict[key] += 10;
          } else {
            dict[key] = 10;
          }
        }
      }
    }
  }
  return dict;
}
function scoreInVisitors(visitors, realFriends, dict) {
  let key;
  for (let i = 0; i < visitors.length; i++) {
    if (!realFriends.includes(visitors[i])) {
      key = visitors[i];
      if (dict[key]) {
        dict[key] += 1;
      } else {
        dict[key] = 1;
      }
    }
  }
}

function problem7(user, friends, visitors) {
  var answer = [];
  let realFriends;
  let dict;
  let limit; // 최대 5명 까지 추천이므로, 제한 변수.

  // user의 친구를 담은 배열 realFriends 만들기.
  realFriends = filterRealFriends(user, friends);

  // friends 배열에서 추천 점수 매기기
  dict = scoreInFriends(user, friends, realFriends);

  // visitors 배열에서 추천 점수 매기기
  scoreInVisitors(visitors, realFriends, dict);
  return answer;
}

module.exports = problem7;
