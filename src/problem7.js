let friendsScore = {};
let friendGraph = {};
const shareFriendScore = 10;
const visitScore = 1;
 
const makeFriendGraph = (friends) => {

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
