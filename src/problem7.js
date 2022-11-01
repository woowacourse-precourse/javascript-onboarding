const RESULT_COUNT = 5;

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

const sortScore = (a, b) => {
  const [nameA, scoreA] = a;
  const [nameB, scoreB] = b;
  if(scoreA < scoreB) return 1;
  if(scoreA > scoreB) return -1;
  if(scoreA === scoreB){
    if(nameA > nameB) return 1;
    if(nameA < nameB) return -1;
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
  
  return [...scoreMap]
    .sort((a, b) => sortScore(a, b))
    .slice(0, RESULT_COUNT)
    .map(([name,]) => name);
}

module.exports = problem7;
