function makeRelationship(friends) {
  const relation = new Object();

  friends.forEach((friendSet) => {
    relation[friendSet[0]] = [];
    relation[friendSet[1]] = [];
  })
  friends.forEach((friendSet) => {
    relation[friendSet[0]].push(friendSet[1]);
    relation[friendSet[1]].push(friendSet[0]);
  })
  return relation;
}

function problem7(user, friends, visitors) {
  const result = [];
  const friendsRelaion = makeRelationship(friends);
  const scoreBoard = new Object();
  const inputedUsersFriends = friendsRelaion[user];

  for (let key in friendsRelaion){
    if (key === user) continue;
    if (!friendsRelaion[key].includes(user)){
      inputedUsersFriends.forEach((friend) => {
        if (friendsRelaion[key].includes(friend) && scoreBoard.hasOwnProperty(key)){
          scoreBoard[key] += 10;
        }
        if (friendsRelaion[key].includes(friend) && !scoreBoard.hasOwnProperty(key)){
          scoreBoard[key] = 10;
        }
      })
    }
  }
  visitors.forEach((visitor) => {
    if (!inputedUsersFriends.includes(visitor)){
      if (scoreBoard.hasOwnProperty(visitor)){
        scoreBoard[visitor] += 1;
        }
      if (!scoreBoard.hasOwnProperty(visitor)){
        scoreBoard[visitor] = 1;
        }
      }
    }
  )

}

module.exports = problem7;
