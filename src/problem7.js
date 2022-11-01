const findFriends = (friends, friendsMap, person) => {
  let tempFriends = [];
  for (let i = 0; i < friends.length; i += 1){
    if (friends[i].find(name => name === person)){
      let [person1, person2] = friends[i];
      tempFriends.push(person1 === person ? person2 : person1);
    }
  }
  friendsMap.set(person, tempFriends);
}

function problem7(user, friends, visitors) {
  const friendsMap = new Map();
  const scoreMap = new Map();
  
  // friends에서 내 친구 찾아 friendsMap에 넣기, 내 친구의 친구 관계 friendsmap에 넣기
  findFriends(friends, friendsMap, user);
  friendsMap.get(user).forEach((person) => {
    findFriends(friends, friendsMap, person);
  })

  // 점수계산 기능(방문횟수(내 친구 제외) * 1 + 내친구의친구(나, 내 친구) * 10)
  visitors.forEach(visitor => {
    if (scoreMap.has(visitor)) {
        scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    }
    else if (!friendsMap.get(user).includes(visitor)) scoreMap.set(visitor, 1);
  })
  
  friendsMap.get(user).forEach((person) => {
    friendsMap.get(person).forEach((friendOfPerson) => {
      if (scoreMap.has(friendOfPerson)) {
        scoreMap.set(friendOfPerson, scoreMap.get(friendOfPerson) + 10);
      }
      else if (!friendsMap.get(user).includes(friendOfPerson) && friendOfPerson !== user) scoreMap.set(friendOfPerson, 10);
    })
  })

  let sortScore = [...scoreMap];
  sortScore.sort((a, b) => {
    if(a[1] < b[1]) return 1;
    if(a[1] > b[1]) return -1;
    if(a[1] === b[1]){
      if(a[0] > b[0]) return 1;
      if(a[0] < b[0]) return -1;
    }
  })
  
  return sortScore.slice(0,5).map(score => score[0]);
}

module.exports = problem7;
