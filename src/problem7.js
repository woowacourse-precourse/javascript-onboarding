function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
// 추천 리스트 점수가 높은 순으로 정렬
// 추천 점수가 같은 경우 이름순으로 정렬
function orderFriedsList(combine) {
  let newObj = Object.fromEntries(
    Object.entries(combine).sort(([a], [b]) => (a < b ? -1 : 1))
  );
  let sorted = Object.entries(newObj).sort((a, b) => b[1] - a[1]);
  let sortedResult = [];

  for (let element of sorted) {
    sortedResult.push(element[0]);
  }
  return sortedResult;
}

// 점수 체크
function combineResult(visitorsScore, acqScore) {
  let combine = {};
  let visitorsKey = Object.keys(visitorsScore);
  let acqKey = Object.keys(acqScore);

  for (let i = 0; i < visitorsKey.length; i++) {
    if (visitorsKey[i] in combine) {
      combine[visitorsKey[i]] =
        combine[visitorsKey[i]] + visitorsScore[visitorsKey[i]];
    } else {
      combine[visitorsKey[i]] = visitorsScore[visitorsKey[i]];
    }
  }
  for (let i = 0; i < acqKey.length; i++) {
    if (acqKey[i] in combine) {
      combine[acqKey[i]] = combine[acqKey[i]] + acqScore[acqKey[i]];
    } else {
      combine[acqKey[i]] = acqScore[acqKey[i]];
    }
  }
  return combine;
}
// 방문자 수 체크
function checkVisitor(visitorsList, friends) {
  let score = {};
  for (let i = 0; i < visitorsList.length; i++) {
    if (!friends.includes(visitorsList[i])) {
      if (visitorsList[i] in score) {
        score[visitorsList[i]]++;
      } else {
        score[visitorsList[i]] = 1;
      }
    }
  }
  return score;
}
// 함께 아는 친구 체크
function findAcquaintance(user, friends, friendsList) {
  let findResult = {};
  for (let i = 0; i < friends.length; i++) {
    let allFriends = findFriends(friends[i], friendsList);
    let validFriends = allFriends.filter((name) => name !== user);
    for (let j = 0; j < validFriends.length; j++) {
      if (validFriends[j] in findResult) {
        findResult[validFriends[j]] = findResult[validFriends[j]] + 10;
      } else {
        findResult[validFriends[j]] = 10;
      }
    }
  }
  return findResult;
}
// 내 친구 체크
function findFriends(user, friendsList) {
  let result = [];
  for (let i = 0; i < friendsList.length; i++) {
    if (friendsList[i].includes(user)) {
      result.push(friendsList[i].filter((name) => name !== user).join(""));
    }
  }
  return result;
}

module.exports = problem7;
