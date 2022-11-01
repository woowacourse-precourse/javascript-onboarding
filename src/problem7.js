/*
  기능목록
  1. 아이디를 key로 추천점수를 value로 가지는 Map 자료구조 recommendPoints 생성
  2. 사용자의 친구를 모두 찾는 findFriends 함수 구현
  3. 방문횟수에 따라 추천점수를 적립해주는 addVisitorsPoint 함수 구현
  4. 친구의친구인 경우에 추천점수를 적립해주는 addFriendsPoint 함수 구현
  5. 추천점수에 따른 정렬, 점수 동일시 아이디순으로 정렬 하는 sortRecommendList 함수 구현
  6. 최종목록은 최대 5명이하로 리턴
*/

function findFriends(user,friends) {
  const userFriedns = [];
  friends.map((users)=> {
    if(users[0] === user) {
      userFriedns.push(users[1]);
    }else if (users[1] === user) {
      userFriedns.push(users[0]);
    }
  })
  return userFriedns;
}

function addVisitorsPoint(recommendPoints,userFriends,visitors) {
  visitors.map((visitor)=> {
    if(!userFriends.includes(visitor))
    recommendPoints.set(visitor,recommendPoints.get(visitor) ? recommendPoints.get(visitor)+1 : 1); 
  })
}

function addFriendsPoint(recommendPoints,userFriends,friends,user) {
  userFriends.map((userFriend)=> {
    friends.map((friends)=> {
      if(friends.includes(userFriend) && !friends.includes(user)) {  // 사용자친구의 친구이면서 사용자 본인은 아닌경우
        if(friends[0] !== userFriend && !userFriends.includes(friends[0])) { // 사용자친구의 친구만(사용자친구의 친구가 사용자의 친구는 아니여야함)
          recommendPoints.set(friends[0],recommendPoints.get(friends[0]) ? recommendPoints.get(friends[0])+10 : 10)
        }else if(friends[1] !== userFriend && !userFriends.includes(friends[1])){
          recommendPoints.set(friends[1],recommendPoints.get(friends[1]) ? recommendPoints.get(friends[1])+10 : 10) 
        } 
        
      }
    })
  })
}

function sortRecommendList(recommendPoints) {
  const sortedList = [...recommendPoints].sort((a, b) => {
    if(a[1] === b[1]) { // 추천 점수가 같은경우 아이디순으로 정렬
      if (a[0] > b[0]) return 1;
      else if (b[0] > a[0]) return -1;
      else return 0;
    }
    return b[1] - a[1];  // 추천 점수순으로 내림차순 정렬
  });
  return sortedList;
}

function problem7(user, friends, visitors) {
  const answer = [];
  const recommendPoints = new Map();
  let userFriends = findFriends(user,friends);

  addVisitorsPoint(recommendPoints,userFriends,visitors);
  addFriendsPoint(recommendPoints,userFriends,friends,user);

  const sortedList = sortRecommendList(recommendPoints);

  sortedList.map((user, idx)=> {
    if(idx <5) answer.push(user[0]); // 추천친구 최대 5명 리스트
  })

  return answer;
}

module.exports = problem7;
