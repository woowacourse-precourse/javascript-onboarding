//문제 7번 기능 목록
//1. 사용자의 현재 친구 목록 알려주기
//2. 사용자와 함께 아는 친구의 수를 기준으로 점수 매기기 (+사용자의 친구의 친구 알려주기)
//3. 사용자의 타임라인에 방문한 횟수를 기준으로 점수 매기기 (이떄 기존 친구는 제외하기, '추천'할 친구이기 때문)
//4. 위의 2,3번 결과를 바탕으로 최종 추천 결과 알려주기

//사용자의 현재 친구 알려주기
function searchCurrentFriend(friends, user){
  const currentFriend = new Set();
  for (var i=0; i<friends.length; i++){
    var friendA = friends[i][0]
    var friendB = friends[i][1]
    if (friendA == user) currentFriend.add(friendB)
    else currentFriend.add(friendA)  
  }
  return currentFriend;
}

function problem7(user, friends, visitors) {
  var answer;
  var visitorCnt = [];
  var friendCnt = [];
  var currentFriend = searchCurrentFriend(friends,user);
  currentFriendArr = Array.from(currentFriend);
 
  return answer;
}

console.log(problem7("mrko", 
[
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
],
["bedi", "bedi", "donut", "bedi", "shakevan"])
)
module.exports = problem7;