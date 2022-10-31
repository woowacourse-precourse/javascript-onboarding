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
function sortDictionary(dict) {
  // 이름 순 정렬. 같은 점수일 때, 미리 이름 순 먼저 정렬.
  const sortedDictByKey = {};
  Object.keys(dict)
    .sort()
    .forEach(function (key) {
      sortedDictByKey[key] = dict[key];
    });
  // 점수 순 정렬, 여기서는 배열로 반환된다.
  let newArray = Object.entries(sortedDictByKey).sort((a, b) => b[1] - a[1]);

  return newArray;
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

  // { 아이디 : 점수 }로 이루어진 딕셔너리 정렬. (점수순 > 이름순)
  let sortedArray = sortDictionary(dict);
  // 최대 5명 추천이므로, 5명만 도출.
  if (sortedArray.length > 5) {
    limit = 5;
  } else {
    limit = sortedArray.length;
  }
  // answer에 결과 담기.
  for (let i = 0; i < limit; i++) {
    answer.push(sortedArray[i][0]);
  }

  return answer;
}

module.exports = problem7;
