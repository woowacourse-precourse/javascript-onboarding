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
//사용자와 함께 아는 친구의 수를 기준으로 점수 매기기 
function friendFriendScore(friends, userFriendSet, user){
  var userFriends = Array.from(userFriendSet); //기존 친구들에 대한 집합을 배열로 변환
  var friendCnt = [];
  //console.log(userFriends);
  for(var i=0; i<friends.length; i++){
    var foundFlag = 0; //이미 있는 원소인지 알려주기 위한 지표
    var friendA = friends[i][0] //사용자  A
    var friendB = friends[i][1] //사용자 B
    if(friendA == user || friendB == user) continue; //user는 제외

    if (userFriends.includes(friendA)){ //사용자 A가 user의 기존 친구라면
      //console.log("yes");
      //friendFriends.add(friendB) //친구의 친구 집합에 사용자 B 추가
      friendCnt.forEach(o => {
        if (o.name == friendB) {
            o.score += 10;
            foundFlag = 1
        }
      });
      if (foundFlag == 0) { //아직 친구의 친구로 객체 배열에 추가된 적이 없다면
        const friendofFriend = {};
        friendofFriend.name = friendB;
        friendofFriend.score = 10;
        friendCnt.push(friendofFriend);
      }
    } else if(userFriends.includes(friendB)){ //사용자 A가 user의 기존 친구라면
      friendCnt.forEach(o => {
        if (o.name == friendA) {
            o.score += 10;
            foundFlag = 1
        }
      });
      if (foundFlag == 0) { //아직 친구의 친구로 객체 배열에 추가된 적이 없다면
        const friendofFriend = {};
        friendofFriend.name = friendA;
        friendofFriend.score = 10;
        friendCnt.push(friendofFriend);
      }
    }
  }
  //console.log(friendCnt);
  return friendCnt;
}

function problem7(user, friends, visitors) {
  var answer;
  var visitorCnt = [];
  var friendCnt = [];
  var currentFriend = searchCurrentFriend(friends,user);
  currentFriendArr = Array.from(currentFriend);

  //console.log(currentFriend);
  friendCnt = friendFriendScore(friends, currentFriend, user); //현재 친구의 친구 점수 배열 저장
  
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