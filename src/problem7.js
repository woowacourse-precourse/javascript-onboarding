/*
  기능목록
  1. 아이디를 key로 추천점수를 value로 가지는 Map 자료구조 생성
  2. 방문횟수에 따라 추천점수를 적립해주는 addVisitorsPoint 함수 구현
  3. 친구의친구인 경우에 추천점수를 적립해주는 addFriendsPoint 함수 구현
  4. 추천친구 목록에 유저의친구가 있는 경우 추천점수를 0으로 바꿔주는 함수 구현
  5. 추천점수에 따른 정렬, 점수 동일시 이름순으로 정렬
  6. 최종목록은 5명이하로 , 추천점수 0점 여부 검사 후 정답 리턴
*/

function addVisitorsPoint(recommendPoints,userFriends,visitors) {
  visitors.map((visitor)=> {
    if(!userFriends.includes(visitor))
    recommendPoints.set(visitor,recommendPoints.get(visitor) ? recommendPoints.get(visitor)+1 : 1); 
  })
}

function addFriendsPoint(user,recommendPoints,userFriends,friends) {
  userFriends.map((userFriend)=> {
    friends.map((friends)=> {
      if(friends.includes(userFriend) && !friends.includes(user)) {  // 유저친구의 친구이면서 유저본인은 아닌경우에
        console.log(friends,userFriend);
        if(friends[0] == userFriend) { // 유저의친구의 친구만
          recommendPoints.set(friends[1],recommendPoints.get(friends[1]) ? recommendPoints.get(friends[1])+10 : 10)
        }else recommendPoints.set(friends[0],recommendPoints.get(friends[0]) ? recommendPoints.get(friends[0])+10 : 10) 
        
      }
    })
  })
}

function problem7(user, friends, visitors) {
  const answer = [];

  let recommendPoints = new Map();
  let user_friends = [];
  
  friends.map((users)=> {
    if(users[0] === user) {
      user_friends.push(users[1]);
    }else if (users[1] === user) {
      user_friends.push(users[0]);
    }
  })

  addVisitorsPoint(recommendPoints,user_friends,visitors);
  addFriendsPoint(user,recommendPoints,user_friends,friends);

  for(let username of recommendPoints.keys()) {
    if(user_friends.includes(username)) {
      recommendPoints.set(username,0);
    }
  }

  let sortedAnswer = [...recommendPoints].sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0] - b[0]
    }
    return b[1] - a[1]
  });

  sortedAnswer.map((user, idx)=> {
    if(idx <5 && user[1] !== 0) answer.push(user[0]);
  })
  console.log(sortedAnswer);
  console.log(answer);

  return answer;
}

problem7(
  "andole",
  [ 
    ["andole", 'jun'], ["donut", "jun"], ["donut", "shakevan"], ["shakevan", "andole"], 
    ["shakevan", "jun"], ["shakevan", "bedi"], ["anne", "jun"] ,['anne','andole'],['bedi','andole']
  ],
  ["donut", "mrko", "peter", "sam",'shakevan']
);

module.exports = problem7;
