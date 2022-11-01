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

const addFriendScore = (name, score) => {
  if(friendsScore[name]===undefined) friendsScore[name] = score;
  else friendsScore[name] += score;
}

const calculateShareFriendsScore = (user) => {
  if(friendGraph[user] === undefined) return;
  const userFriends = friendGraph[user];
  userFriends.forEach((f) => {
    const userFriendFriends = friendGraph[f];
    userFriendFriends.forEach((ff) => {
      if(ff === user) return;
      addFriendScore(ff, shareFriendScore);
    })
  })
};

const calculateVisitScore = (visitors) => {
  visitors.forEach((visitor) => {
    addFriendScore(visitor, visitScore);
  })
}

function problem7(user, friends, visitors) {
  friendsScore = {};
  friendGraph = {};

  makeFriendGraph(friends);
  calculateShareFriendsScore(user);
  calculateVisitScore(visitors);

  const friendNames = Object.keys(friendsScore);
  friendNames.sort();
  friendNames.sort((a, b) => friendsScore[b] - friendsScore[a])

  const answer = [];
  for(let i = 0; (answer.length < 5 && i < friendNames.length); i++){
    if(friendsScore[friendNames[i]] === 0) break;
    if(!friendGraph[user].includes(friendNames[i])) answer.push(friendNames[i]);
  }
  return answer;
}

module.exports = problem7;
