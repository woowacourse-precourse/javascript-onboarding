function countYourFriend(user, friends, notRecommendationFriends){
  let friendGraph = {};
  let recommendationScore = {};

  friends.forEach(friendArray => {
    const A = friendArray[0];
    const B = friendArray[1];

    if(!(A in friendGraph)) { friendGraph[A] = []; recommendationScore[A] = 0; }
    if(!(B in friendGraph)) { friendGraph[B] = []; recommendationScore[B] = 0; }
    friendGraph[A].push(B);
    friendGraph[B].push(A);
  });

  friendGraph[user].forEach(alreadyFriend => {
    notRecommendationFriends[alreadyFriend] = 1;

    friendGraph[alreadyFriend].forEach(newFriend => {
      if(newFriend != user){
        recommendationScore[newFriend] += 10;
      }
    });
  });

  return [notRecommendationFriends, recommendationScore];
}

function countVisitFriend(visitors, notRecommendationFriends, recommendationScore){
  for(const visitUser of visitors){
    if((visitUser in notRecommendationFriends)) { continue; }
    if(!(visitUser in recommendationScore)) { recommendationScore[visitUser] = 0; }
    recommendationScore[visitUser] += 1;
  }
  return recommendationScore;
}

function problem7(user, friends, visitors) {
  let notRecommendationFriends = {};
  let recommendationScore = {};
  let recommendationScoreArray = [];
  let resultName = [];

  [notRecommendationFriends, recommendationScore] = countYourFriend(user, friends, notRecommendationFriends);
  recommendationScore = countVisitFriend(visitors, notRecommendationFriends, recommendationScore);

  for(const name in recommendationScore){ 
    recommendationScoreArray.push([recommendationScore[name], name]);
  }

  recommendationScoreArray.sort((a, b) => {
    if(a[0] == b[0]) { 
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    }
    return b[0] - a[0];
  });

  for(i = 0; i < 5; i++){
    const score = recommendationScoreArray[i][0];
    const name = recommendationScoreArray[i][1];
    if(score == 0) { break; }
    resultName.push(name);
  }
  return resultName;
}

console.log(problem7("mrko", 	[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]));

module.exports = problem7;
