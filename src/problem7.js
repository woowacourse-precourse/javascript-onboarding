
/**
 * 전체 친구 리스트를 받고 이를 반환 객체에 key value형태로 저장.
 * @param {array} friends 
 * @returns {object}
 */
function makeRelationship(friends) {
  const friendA = 0;
  const friendB = 1;
  const relation = new Object();
  /**
   * 친구 관계 객체 만들기위한 key 설정 및 value 빈 배열 생성
   * @param {array} friends 
   */
  const initFriendRelation = (friends) => {
    friends.forEach((friendSet) => {
      relation[friendSet[friendA]] = [];
      relation[friendSet[friendB]] = [];
    })
  }
  /**
   * 초기화 된 객체에 친구관계를 넣어주는 함수
   * @param {array} friends 
   */
  const makeFriendRelation = (friends) => {
    friends.forEach((friendSet) => {
      relation[friendSet[friendA]].push(friendSet[friendB]);
      relation[friendSet[friendB]].push(friendSet[friendA]);
    })
  }

  initFriendRelation(friends);
  makeFriendRelation(friends);
  
  return relation;
}
/**
 * Object를 받아서 먼저 value값이 같다면 key를 기준으로 오름차순, value값이 다르다면 value를 기준으로 내림차순
 * @param {object} scoreBoard 
 * @returns {object}
 */
const getSortScoreBoard = (scoreBoard) =>{  
  let sortedScoreBoard = new Object();
  const name = 0;
  const score = 1;
  
  sortedScoreBoard = Object.entries(scoreBoard).sort((x, y) => {
      if (x[score] === y[score]) {
        return x[name] > y[name] ? 1 : -1;
      } 
      return x[score] > y[score] ? -1 : 1;
    })
  
  return sortedScoreBoard;
}

function problem7(user, friends, visitors) {
  const result = [];
  const relationScore = 10;
  const visitScore = 1;
  const friendsRelation = makeRelationship(friends);
  const scoreBoard = new Object();
  const inputedUsersFriends = friendsRelation[user];
  const isVisitedFriend = (visitor) => inputedUsersFriends.includes(visitor);
  const isUsersFriend = (user, friend) => friendsRelation[user].includes(friend);

  for (let keyUser in friendsRelation){
    if (keyUser === user) continue;
    if (inputedUsersFriends && !isUsersFriend(keyUser, user)){ // 친구가 없는경우 또는 직접적 친구관계 제외
      
      inputedUsersFriends.forEach((friend) => {
        if (isUsersFriend(keyUser, friend)){
          scoreBoard.hasOwnProperty(keyUser) ? scoreBoard[keyUser] += relationScore : scoreBoard[keyUser] = relationScore;
        }
      })
    }
  }
  visitors.forEach((visitor) => {
    if (!inputedUsersFriends || !isVisitedFriend(visitor)){
      scoreBoard.hasOwnProperty(visitor) ? scoreBoard[visitor] += visitScore : scoreBoard[visitor] = visitScore;
      }
    }
  )

  const sortedScoreBoard = getSortScoreBoard(scoreBoard);
  const name = 0;
  const answerLimit = 5;
    
  sortedScoreBoard.forEach((personalScore) => {
    if (result.length < answerLimit) result.push(personalScore[name]);
  })
  return result;

}
module.exports = problem7;
