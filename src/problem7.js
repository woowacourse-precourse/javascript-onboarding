function problem7(user, friends, visitors) {
  var answer;
  let alreadyFriends = findAlreadyFriend(user, friends);
  visitors = visitors.filter((visitor) => !alreadyFriends.includes(visitor));
  let acquaintances = findAcquaintance(alreadyFriends, friends, user);
  let nameScoreList = giveScore(acquaintances, visitors);
  answer = MakeResultList(nameScoreList);

  return answer;
}

function findAlreadyFriend(user, friends) {
  let alreadyFriends = [];
  friends.map((friend)=>{
    if(friend.includes(user)) {
      alreadyFriends.push(friend[0], friend[1]);
    }
  })
  alreadyFriends = alreadyFriends.filter((friend) => friend != user);

  return alreadyFriends;
}

function findAcquaintance(alreadyFriends, friends, user) {
  let acquaintances = [];
  for(let i = 0; i < friends.length; i++) {
    for(let j = 0; j < friends[i].length; j++) {
      if(alreadyFriends.includes(friends[i][j])){
        acquaintances = acquaintances.concat(friends[i]);
      }
    }
  }
  acquaintances = acquaintances.filter((name) => (name != user && !alreadyFriends.includes(name)));

  return acquaintances;
}

function giveScore(acquaintances, visitors) {
  let scoredFriends = [... new Set(acquaintances.concat(visitors))];
  let scoreList = [];
  for(let i = 0; i < scoredFriends.length; i++) {
    scoreList[i] = 0;
  }
  for(let i = 0; i < scoredFriends.length; i++) {
    for(let j = 0; j < acquaintances.length; j++) {
      if(scoredFriends[i] === acquaintances[j]) {
        scoreList[i] += 10;
      }
    }
    for(let k = 0; k < visitors.length; k++) {
      if(scoredFriends[i] === visitors[k]) {
        scoreList[i] += 1;
      }
    }
  }
  let nameScoreList = makeNameScoreList(scoredFriends, scoreList);

  return nameScoreList;
}

function makeNameScoreList(scoredFriends, scoreList) {
  const nameScoreList = (name, score) => ({name, score});
  let arr = [];
  for(let i = 0; i < scoredFriends.length; i++) {
    let friend = nameScoreList(scoredFriends[i], scoreList[i]);
    arr.push(friend);
  }

  return arr;
}

function MakeResultList(nameScoreList) {
  let result = [];
  nameScoreList.sort((a, b) => {
    if(a.score === b.score) {
      return a.name - b.name;
    } else {
      return b.score - a.score;
    }
  });
  for(let i = 0; i < nameScoreList.length; i++) {
    result.push(nameScoreList[i].name);
  }
  result = result.slice(0, 5);

  return result;
}

module.exports = problem7;


// 1. friends 에서 user 와 친구인 사람들 리스트 생성
// 2. 1점씩 부여할 vistors 목록 정리, 10점씩 부여할 acquiantance 목록 정리
// 3. acquiantance 에는 10 점씩, visitors 에는 1 점씩 부여 후 name과 score 정보 리스트 생성
// 4. 리스트 정렬 및 개수 제한

// 점수가 높을지라도 user 와 이미 친구인 사람은 제외
// 점수가 가장 높은 순으로 정렬하여 최대 5명을 return 
// 추천 점수가 0점인 경우 추천하지 않음
// 추천 점수가 같은 경우는 이름순으로 정렬