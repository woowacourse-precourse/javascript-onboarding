function findFriend(user, friends) {
  let friend = [];

  friends.forEach((left, right) => {
    if(left === user)
      friend.push(right);
    if(right === user)
      friend.push(left);
  });

  return friend;
}

function users(friends) {
  let userlist = new Set();
  
  friends.forEach((left, right) =>{
    userlist.add(left);
    userlist.add(right);
  });

  return userlist;
}

function problem7(user, friends, visitors) {
  userFriend = findFriend(user, friends);
  userlist = users(friends);
  
  let answer = [, []];
  return answer;
}
//사용자와 친구관계인 유저를 구함
//유저 목록 저장
//친구와 친구관계인 친구에 +10점
//방문자
module.exports = problem7;
