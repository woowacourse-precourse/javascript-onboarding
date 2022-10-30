const findFriends = (friends, friendsMap, person) => {
  let tempFriends = [];
  for (let i = 0; i < friends.length; i += 1){
    if (friends[i].find(name => name === person)){
      tempFriends.push(friends[i][0] === person ? friends[i][1] : friends[i][0]);
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
}

module.exports = problem7;
