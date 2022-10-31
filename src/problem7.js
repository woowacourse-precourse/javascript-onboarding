
/**
 * 전체 친구 리스트를 받고 이를 반환 객체에 key value형태로 저장.
 * @param {array} friends 
 * @returns {object}
 */
function makeRelationship(friends) {
  const friendA = 0;
  const friendB = 1;
  const relation = new Object();

  friends.forEach((friendSet) => {
    relation[friendSet[friendA]] = [];
    relation[friendSet[friendB]] = [];
  })
  friends.forEach((friendSet) => {
    relation[friendSet[friendA]].push(friendSet[friendB]);
    relation[friendSet[friendB]].push(friendSet[friendA]);
  })
  return relation;
}
/**
 * Object를 받아서 먼저 value값이 같다면 key를 기준으로 오름차순, value값이 다르다면 value를 기준으로 내림차순
 * @param {object} scoreBoard 
 * @returns {object}
 */
const getSortScoreBoard = (scoreBoard) =>{  
  let sortedScoreBoard = new Object();
  sortedScoreBoard = Object.entries(scoreBoard).sort((x, y) => {
      if (x[1] === y[1]) {
        return x[0] > y[0] ? 1 : -1;
      } 
      return x[1] > y[1] ? -1 : 1;
    })
  
  return sortedScoreBoard;
}

function problem7(user, friends, visitors) {
  const result = [];
  const relationScore = 10;
  const visitScore = 1
  const friendsRelaion = makeRelationship(friends);
  const scoreBoard = new Object();
  const inputedUsersFriends = friendsRelaion[user];

  for (let key in friendsRelaion){
    if (key === user) continue;
    if (!friendsRelaion[key].includes(user)){
      inputedUsersFriends.forEach((friend) => {
        if (friendsRelaion[key].includes(friend)){
          scoreBoard.hasOwnProperty(key) ? scoreBoard[key] += relationScore : scoreBoard[key] = relationScore;
        }
      })
    }
  }
  visitors.forEach((visitor) => {
    if (!inputedUsersFriends.includes(visitor)){
      scoreBoard.hasOwnProperty(visitor) ? scoreBoard[visitor] += visitScore : scoreBoard[visitor] = visitScore;
      }
    }
  )

  const sortedScoreBoard = getSortScoreBoard(scoreBoard);
  const name = 0;

  sortedScoreBoard.forEach((personalScore) => {
    if (result.length < 5) result.push(personalScore[name])
  })
  return result

}
module.exports = problem7;
