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

function problem7(user, friends, visitors) {
  const friendsMap = new Map();
  const scoreMap = new Map();
  
  findFriends(friends, friendsMap, user);
  friendsMap.get(user).forEach((person) => {
    findFriends(friends, friendsMap, person);
  })

  calcVisitorScore(user, visitors, scoreMap, friendsMap);
  
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
