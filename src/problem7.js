function findFriend(user, friends) {
  let friend = [];

  friends.forEach((a1, a2) => {
    if(a1 === user)
      friend.push(a2);
    if(a2 === user)
      friend.push(a1);
  });

  return friend;
}

function problem7(user, friends, visitors) {
  userFriend = findFriend(user, friends);
  
  let answer = [, []];
  return answer;
}
//사용자와 친구관계인 사람을 구함
//친구와 친구관계인 친구에 +10점
//방문자
module.exports = problem7;
