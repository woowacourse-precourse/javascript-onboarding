// set의 교집합을 구하는 함수 구현
// 친구관계 객체를 만드는 함수 구현
// 친구별 추천점수를 계산하는 함수 구현
// 이미 친구인 유저를 목록에서 삭제하는 함수 구현
// 결과 객체를 정렬하고, 5개까지만 나오도록 잘라주는 함수 구현

function setIntersection(set1, set2) {
  const result = new Set();

  for (const value of set1) {
    if (set2.has(value)) result.add(value);
  }

  return result;
}

function makeRelations(friends, relations) {
  friends.forEach((element) => {
    if (relations[element[0]] === undefined) {
      relations[element[0]] = new Set();
    }
    if (relations[element[1]] === undefined) {
      relations[element[1]] = new Set();
    }
    relations[element[1]].add(element[0]);
    relations[element[0]].add(element[1]);
  });
}

function makeRecommendScore(user, relations, visitors, result) {
  Object.keys(relations).forEach((name) => {
    if (name === user) return;
    const bothFriends = setIntersection(relations[name], relations[user]);
    if (bothFriends.size !== 0) {
      result[name] = bothFriends.size * 10;
    }
  });

  visitors.forEach((name) => {
    if (result[name] === undefined) {
      result[name] = 1;
    } else {
      result[name]++;
    }
  });
}

function deleteUserFriend(user, result, relations) {
  relations[user].forEach((name) => delete result[name]);
}

function resultSortSlice(result) {
  const names = Object.keys(result);
  names.sort(function (a, b) {
    if (result[b] === result[a]) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    return result[b] - result[a];
  });

  return names.slice(0, 5);
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
