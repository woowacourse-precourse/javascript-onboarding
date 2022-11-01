// 사용자들의 친구관계 배열 생성
function setFriendsArr(friends) {
  const friendsArr = new Map()

  friends.forEach(value => {
    friendsArr.has(value[0]) ? friendsArr.get(value[0]).push(value[1]) : friendsArr.set(value[0],[value[1]])
    friendsArr.has(value[1]) ? friendsArr.get(value[1]).push(value[0]) : friendsArr.set(value[1],[value[0]])
  });

  return friendsArr;
}

// 사용자에게 방문한 사람들 배열 생성
function setVisitersArr(visitors) {
  const visitorsArr = new Map();

  visitors.forEach(value => {
    visitorsArr.has(value) ? visitorsArr.set(value, visitorsArr.get(value) + 1) : visitorsArr.set(value, 1)
  })

  return visitorsArr;
}

// sort
function sortArr(score) {
  
}

function problem7(user, friends, visitors) {
  const friendsArr = setFriendsArr(friends);
  const visitorsArr = setVisitersArr(visitors);

  // 사용자의 친구 제외한 배열
  if(friendsArr.has(user)) {
    friendsArr.get(user).forEach(value => {
      friendsArr.delete(value)
      visitorsArr.delete(value)
    });
  }
  friendsArr.delete(user)

  friendsArr.forEach((value, key) =>{
    visitorsArr.has(key) ? visitorsArr.set(key,visitorsArr.get(key) + (value.length*10)) : visitorsArr.set(key, value.length * 10)
  })

  console.log(visitorsArr);
  let score = [...visitorsArr];
  console.log(score);

  score.sort((a, b) => (b[1] - a[1]));

  console.log(score);

  let result = new Array()

  score.forEach(value => {
    value[1] !== 0 ? result.push(value[0]):false
  });

  return result;
}


//   friends_map.forEach((value,key) =>{
//     visitors_map.has(key)? visitors_map.set(key,visitors_map.get(key)+(value.length*10)):visitors_map.set(key,value.length*10)
//   })

//   let score = [...visitors_map]

//   score.sort((a,b) =>{
//     if(b[1] > a[1]) return 1
//     else if(b[1] < a[1]) return -1
//     else if(a[0] < b[0]) return -1
//     else if(a[0] > b[0]) return 1
//   })

//   let result = new Array()

//   score.forEach(value => {
//     value[1] !== 0 ? result.push(value[0]):false
//   });

//   return result





// problem7("mrko", [ ["donut", "bndole"], ["donut", "ajun"], ["donut", "mrko"], ["shakevan", "bndole"], ["shakevan", "ajun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]);


module.exports = problem7;

// ### 기능들
// 1. 사용자들의 친구관계 정리하기
// 2. user의 친구를 함께 아는 사람들 찾기
// 3. 함께 아는 친구의 수 점수 계산
// 4. 타임라인에 방문한 횟수 점수 계산
// 5. 이미 user와 친구인 관계 제외하기
// 6. 친구목록을 점수별 정렬하기