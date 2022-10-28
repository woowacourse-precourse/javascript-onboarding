/*
 * -- 기능 목록 --
 * 1. { 이름: [친구 목록] } 구조로 모든 친구 목록을 저장한 객체 - friendDictionary
 * 2. friends 배열의 요소를 통해 사전을 갱신할 함수 - updateDictionary(relation, friendDictionary)
 * 3. 방문자 목록과 친구 목록 사전을 통해 추천 결과를 계산하는 함수 - getRecommendList(visitors, friendDictionary);
 */

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
}

module.exports = problem7;
