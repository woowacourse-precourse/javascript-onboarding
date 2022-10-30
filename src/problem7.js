function problem7(user, friends, visitors) {
  let friendGraph = {};
  let notRecommendationFriends = {};
  let recommendationScore = {};

  friends.forEach(friendArray => {
    const A = friendArray[0];
    const B = friendArray[1];

    if(!(A in friendGraph)) { friendGraph[A] = []; recommendationScore[A] = []; }
    if(!(B in friendGraph)) { friendGraph[B] = []; recommendationScore[B] = []; }
    friendGraph[A].push(B);
    friendGraph[B].push(A);
  });

  friendGraph[user].forEach(alreadyFriend => {
    notRecommendationFriends[user] = 1; 
    notRecommendationFriends[alreadyFriend] = 1;

  })


}

problem7("mrko", 	[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"], ["andole", "jun", "bedi"])

module.exports = problem7;
