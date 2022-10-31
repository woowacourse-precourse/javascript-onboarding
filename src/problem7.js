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
const getSortScoreBoard = (scoreBoard) =>{
    
  let sortedScoreBoard = new Object();
  sortedScoreBoard = Object.entries(scoreBoard).sort((x, y) => {
      if (x[1] === y[1]) {
        if (x[0] > y[0]) return 1;
        if (x[0] < y[0]) return -1;
      } 
      if (x[1] > y[1]) return -1;
      if (x[1] < y[1]) return 1;
    })
  
  return sortedScoreBoard;
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

  const sortedScoreBoard = getSortScoreBoard(scoreBoard);
  sortedScoreBoard.forEach((personalScore) => {
    if (result.length < 5) result.push(personalScore[0])
  })
  return result

}

module.exports = problem7;
