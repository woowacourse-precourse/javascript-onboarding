function problem7(user, friends, visitors) {
  const friendObj = {}; // 친구목록 담는 obj
  const scoreMap = new Map(); // 점수담는 map
  initMap(friendObj, friends, scoreMap);

  addFriendScore(friendObj, scoreMap, user, visitors);

  const answer = findAnswer(scoreMap);

  return answer;
}

function initMap(obj, friends, scoreMap) {
  friends.forEach((val) => {
    const [friendA, friendB] = val;
    if (!obj[friendA]) {
      obj[friendA] = [];
    }
    if (!obj[friendB]) {
      obj[friendB] = [];
    }
    scoreMap.set(friendA, 0)
    scoreMap.set(friendB, 0);
    obj[friendA].push(friendB);
    obj[friendB].push(friendA);
  })
} //친구목록,점수 초기화

function addFriendScore(friendObj, scoreMap, user, visitors) {
  const userFriend = friendObj[user]; //user에 친구목록
  const userSet = new Set([...userFriend, user]); // user친구목록 + user
  for (let i = 0; i < userFriend.length; i++) {
    const cur = userFriend[i];
    const curFriends = friendObj[cur]; // user친구의 친구목록들
    curFriends.forEach(friend => {
      if (!userSet.has(friend)) {
        scoreMap.set(friend, scoreMap.get(friend) + 10); // 아는친구 점수 10추가
      }
    })
  }
  visitors.forEach(friend => {
    if (!userSet.has(friend)) {
      scoreMap.has(friend) ?
        scoreMap.set(friend, scoreMap.get(friend) + 1) : scoreMap.set(friend, 1); //방문친구 점수 1추가
    }
  })
}

function findAnswer(scoreMap) {
  const keyArr = [...scoreMap.keys()].filter(key => scoreMap.get(key) > 0);//점수가 0보다 큰 key들

  keyArr.sort((key1, key2) => {
    if (scoreMap.get(key1) < scoreMap.get(key2)) return 1;
    else if (scoreMap.get(key1) > scoreMap.get(key2)) return -1;
    else {
      if (key1 < key2) return -1;
      else return 1;
    }
  }) // 조건에 따라 sort.

  return keyArr.length >=5? [...keyArr].slice(0,5) : [...keyArr];
}



module.exports = problem7;

function test() {
  const temp = problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"])
  console.log(temp);
}

