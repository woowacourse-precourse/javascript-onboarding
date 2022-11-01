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

//사용자의 타임라인에 방문한 횟수를 기준으로 점수 매기기
function visitorScore(visitors){
  //console.log(visitors);
  const visitCnt = []; //방문한 사람과 횟수에 대한 배열
  
  for(var i=0; i<visitors.length; i++){
    const name = visitors[i];
    var foundFlag= 0; //이미 있는 원소인지 알려주기 위한 지표
    visitCnt.forEach(o => {
      if (o.name === name) {
          o.score += 1;
          foundFlag = 1
      }
    });
    if (foundFlag == 0) {
      const visitor = {};
      visitor.name = name;
      visitor.score = 1;
      visitCnt.push(visitor);
    }
  }

  return visitCnt;
}

//2가지 규칙을 반영하여 최종 추천 결과 반환
function recommendFriend(friendCnt, visitorCnt){ //최종 추천 결과
  const scoreCnt = friendCnt.concat(visitorCnt); //2개의 규칙에 따른 결과(객체 배열들) 병합

  // score int 값의 크기순으로 내림차순 정렬
  for (var i=0; i<scoreCnt.length; i++){
    var cnt = 0;
    for(var j=0; j<scoreCnt.length; j++){
      if(scoreCnt[j].score > scoreCnt[i].score)  {
        cnt ++; 
      } else if(scoreCnt[j].score == scoreCnt[i].score){ //추천 점수가 같은 경우
        if(scoreCnt[j].name < scoreCnt[i].name) { //이름 비교, 이름까지 빠른 경우
          cnt ++;
        }
      }
    }
    scoreCnt[i].rank = cnt; //점수 및 이름에 따른 순위를 key로 하여 객체에 추가
  }
  
  //rank에 따라 정렬
  const scoreResultArr = scoreCnt.splice(0.5).sort(function (a, b) {
      return a.rank - b.rank; //내림차순 정렬
  });
  console.log("상위 5명의 추천 친구 결과는..",scoreResultArr);

  //키 name의 value만 추출하여 결과 반환
  
  const recommendResult = scoreResultArr.map(row=>row.name); //이름만 추출된 배열 생성, 최종 결과
  
  return recommendResult;

}

function problem7(user, friends, visitors) {
  var answer;
  var visitorCnt = [];
  var friendCnt = [];
  var currentFriend = searchCurrentFriend(friends,user);
  currentFriendArr = Array.from(currentFriend);
  //console.log(currentFriendArr, visitors);
  visitors = visitors.filter(x => !(currentFriendArr.includes(x))); //현재 친구가 아닌 방문자만 필터링

  visitorCnt = visitorScore(visitors); //방문 횟수 점수 배열 저장
  console.log(visitorCnt);
  //console.log(currentFriend);
  friendCnt = friendFriendScore(friends, currentFriend, user); //현재 친구의 친구 점수 배열 저장
  console.log(friendCnt);
  answer = recommendFriend(friendCnt, visitorCnt); //2가지 규칙에 따라 얻은 결과 병합

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