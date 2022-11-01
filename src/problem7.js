function problem7(user, friends, visitors) {
  var answer = {};

  function findFriends (u, f){
    const alreadyFriends = [];
    for(i in f){
      if(u == f[i][0]){
        alreadyFriends.push(f[i][1])
      }
      if(u == f[i][1] && alreadyFriends.indexOf(u) == -1){
        alreadyFriends.push(f[i][0])
      }
    }
    return alreadyFriends
  }
  function findFriendssFriends(alreadyFriends){
    let friendssFriends = [];

    alreadyFriends.forEach(f => {
      let r = findFriends(f,friends);
      friendssFriends.push(...r);
    });

    return friendssFriends
  }
  function scoreChecker (friendssFriends){
    //오브젝트에 키 집어넣기
    friendssFriends.forEach(f => answer[f] = 0);
    let score = 0;

    // 키 하나씩 호출
    Object.keys(answer).forEach(k => {
      for(i in friendssFriends){
        if (k == friendssFriends[i]){
          score += 10;
        }
      }
      answer[k] = score;
      score = 0;
    });
  }


  const alreadyFriends = findFriends(user,friends);
  const friendssFriends = findFriendssFriends(alreadyFriends);

  scoreChecker(friendssFriends);
  delete answer[user]

  console.log(answer);

  return answer;
}

module.exports = problem7;
