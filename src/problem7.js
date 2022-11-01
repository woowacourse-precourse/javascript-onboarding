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

const calcVisitorScore = (user, visitors, scoreMap, friendsMap) => {
  visitors.forEach(visitor => {
    if (scoreMap.has(visitor)) scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    else if (!friendsMap.get(user).includes(visitor)) scoreMap.set(visitor, 1);
  })
}

const calcAcquaintanceScore = (user, scoreMap, friendsMap) => {
  const acquaintanceMap = new Map(friendsMap);
  acquaintanceMap.delete(user);
  for (let acquaintance of [...acquaintanceMap.values()].flat()){
    if(scoreMap.has(acquaintance)){
      scoreMap.set(acquaintance, scoreMap.get(acquaintance) + 10);
    } else if (
    !friendsMap.get(user).includes(acquaintance) 
    && acquaintance !== user
    ){scoreMap.set(acquaintance, 10);} 
  }
}

function problem7(user, friends, visitors) {
  const friendsMap = new Map();
  const scoreMap = new Map();
  
  findFriends(friends, friendsMap, user);
  friendsMap.get(user).forEach((person) => {
    findFriends(friends, friendsMap, person);
  })

  calcVisitorScore(user, visitors, scoreMap, friendsMap);
  calcAcquaintanceScore(user, scoreMap, friendsMap);

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
