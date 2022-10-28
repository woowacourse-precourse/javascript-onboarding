/*
 * -- 기능 목록 --
 * 1. { 이름: [친구 목록] } 구조로 모든 친구 목록을 저장한 객체 - friendDictionary
 * 2. friends 배열의 요소를 통해 사전을 갱신할 함수 - updateDictionary(relation, friendDictionary)
 * 3. 방문자 목록과 친구 목록 사전을 통해 추천 결과를 계산하는 함수 - getRecommendList(user, visitors, friendDictionary);
 * 3.1 추천 대상인 추천점수를 획득한 인원들을 { 이름: 점수 } 구조로 모아둔 객체 - recommendUsers
 */

// 점수는 내림차순, 이름은 오름차순으로 정렬하는 비교 함수
function compareFriend([nameA, scoreA], [nameB, scoreB]) {
  if (scoreA !== scoreB) {
    return scoreB - scoreA;
  }

  return nameA > nameB ? 1 : -1;
}

function getRecommendList(user, visitors, friendDictionary) {
  const recommendUsers = {};
  const friendList = friendDictionary[user];

  // user의 친구 목록을 돌며 recommendUser에 이미 있다면 점수를 올리고, 없다면 초기화
  for (let userFriend of friendList) {
    friendDictionary[userFriend].forEach((friend) => {
      if (recommendUsers[friend]) {
        recommendUsers[friend] += 10;
      } else {
        recommendUsers[friend] = 10;
      }
    });
  }

  // visitors를 반복하며 같은 과정을 수행한다.
  for (let visitor of visitors) {
    if (recommendUsers[visitor]) {
      recommendUsers[visitor] += 1;
    } else {
      recommendUsers[visitor] = 1;
    }
  }

  // 이미 친구인 인원들과 자신을 제외하고, 정렬해서 이름만 남겨 길이 5만큼만 남긴 결과
  const recommendUserList = Object.entries(recommendUsers)
    .filter(([name]) => !(friendList.includes(name) || name == user))
    .sort(compareFriend)
    .map(([name]) => name)
    .slice(0, 5);

  return recommendUserList;
}

function updateDictionary([targetName, friendName], friendDictionary) {
  if (friendDictionary[targetName]) {
    friendDictionary[targetName].push(friendName);
  } else {
    friendDictionary[targetName] = [friendName];
  }
}

function problem7(user, friends, visitors) {
  const friendDictionary = {
    [user]: [],
  };

  friends.forEach(([firsetUser, secondUser]) => {
    updateDictionary([firsetUser, secondUser], friendDictionary);
    updateDictionary([secondUser, firsetUser], friendDictionary);
  });

  return getRecommendList(user, visitors, friendDictionary);
}

module.exports = problem7;
