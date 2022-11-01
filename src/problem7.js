function problem7(user, friends, visitors) {
  let answer;
  let userFriends = [];
  userFriends = userFriendsList(user, friends);

  //사용자가 들어있는 배열의 친구목록
  function userFriendsList(user, friends) {
    let friendsList = [];
    //friends의 배열을 돌면서 user가 들어있는 배열 찾아 친구목록리스트 만들어줌
    for (let i = 0; i < friends.length; i++) {
      if (friends[i][1] === user) {
        friendsList.push(friends[i][0]);
      }
    }
    return friendsList;
  }

  
 //만들어준 친구목록의 친구가 들어간 배열의 친구에게 10점 적용
 
 //타임라인에 방문한 사람중 이미 친구는 제외시키고 나머지 방문자에게 1점씩 적용

 //점수가 0이상인 사람만 점수순으로 나열한후, 문자열 순으로 sort


  return answer;
}

module.exports = problem7;
