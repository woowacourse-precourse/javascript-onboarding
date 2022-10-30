function problem7(user, friends, visitors) {
  let friendGraph = {};
  let notRecommendationFriends = {};
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
    notRecommendationFriends[user] = 1; 
    notRecommendationFriends[alreadyFriend] = 1;

    friendGraph[alreadyFriend].forEach(newFriend => {
      recommendationScore[newFriend] += 10;
    });
  });

  console.log(recommendationScore);
}

problem7("mrko", 	[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"], ["andole", "jun", "bedi"])

module.exports = problem7;
