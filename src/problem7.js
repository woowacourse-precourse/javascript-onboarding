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

  function objectMaker (ls) {
    let instObj = {};
    ls.forEach(f => instObj[f] = 0);

    return instObj
  }

  function scoreChecker (ls,point){
    // 키 하나씩 호출
    let score = 0

    //answer의 모든 키를 호출해서 문제가 생김
    let instObj = objectMaker(ls)
    Object.keys(instObj).forEach(k => {
      for(i in ls){
        if (k == ls[i]){
          score += point;
        }
      }
      answer[k] = score;
      score = 0;
    });
  }

  function visitedChecker (){
    objectMaker(visitors);
    scoreChecker(visitors,1);
  }

  function delUserAndAlreadyFriends(){
    delete answer[user];
    alreadyFriends.forEach(f => delete answer[f]);
  }

  const alreadyFriends = findFriends(user,friends);
  const friendssFriends = findFriendssFriends(alreadyFriends);

  scoreChecker(friendssFriends,10);
  visitedChecker(visitors);
  delUserAndAlreadyFriends()

  return answer;
}

module.exports = problem7;
