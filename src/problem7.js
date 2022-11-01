const FRIENDFRIENDSCORE = 10;
const MAXRECOMMENDATIONS = 5;

let friendMap = new Map();
let recommendScore = {};

function isAwayFriend(userName, friendName){
  if(friendMap[friendName] === undefined  && friendName !== userName) {
    return true;
  }
  return false;
}

function problem7(user, friends, visitors) {

  for(let i = 0; i < friends.length; i++) {
    if(friendMap[friends[i][0]] === undefined) {
      friendMap[friends[i][0]] = 1;
    }
    if(isAwayFriend(user, friends[i][1])) {
      recommendScore[friends[i][1]] = FRIENDFRIENDSCORE;
    }
  }

  for(let i = 0; i < visitors.length; i++) {
    if(!friendMap[visitors[i]] && recommendScore[visitors[i]] === undefined) {
      recommendScore[visitors[i]] = 0;
    }
    if(isAwayFriend(user, visitors[i])) {
      recommendScore[visitors[i]]++;
    }
  }

  let recommendArray = Object.entries(recommendScore);
  // in some day, there would be minus score logic. So there is possibility that there is some negative score.
  recommendArray = recommendArray.filter((value) => value[1] > 0);
  recommendArray.sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return b[1] - a[1];
  });


  if(recommendScore.length > MAXRECOMMENDATIONS) {
    recommendScore = recommendScore.slice(0, MAXRECOMMENDATIONS);
  }

  return recommendArray.map((value) => value[0]);
}

module.exports = problem7;
