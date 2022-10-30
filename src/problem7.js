let friendsScore = {};
let friendGraph = {};
const shareFriendScore = 10;
const visitScore = 1;
 
const registerFriend = (friend) => {
  if(friendGraph[friend[0]] === undefined){
    friendGraph[friend[0]] = [friend[1]];
  } else {
    friendGraph[friend[0]].push(friend[1]);
  }

  if(friendGraph[friend[1]] === undefined){
    friendGraph[friend[1]] = [friend[0]];
  } else {
    friendGraph[friend[1]].push(friend[0]);
  }
}

const makeFriendGraph = (friends) => {
  friends.forEach((friend) => {
    registerFriend(friend);
  })
}

const calculateShareFriendsScore = (user) => {
  
};

const calculateVisitScore = (visitors) => {

}

function problem7(user, friends, visitors) {
  friendsScore = {};
  friendGraph = {};

  makeFriendGraph(friends);
  calculateShareFriendsScore(user);
  calculateVisitScore(visitors);

  const friendNames = friendsScore.keys();
  friendNames.sort();
  friendNames.sort((a, b) => friendsScore[b] - friendsScore[a])

  const answer = [];
  for(let i = 0; (answer.length <= 5 && i < friendNames.length); i++){
    if(friendsScore(friendNames[i]) === 0) break;
    if("not friend of a user") answer.push(friendNames[i]);
  }
  return answer;
}

module.exports = problem7;
