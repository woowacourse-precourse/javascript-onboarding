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

// 친구목록 점수별 정렬
function sortArr(score) {
  score.sort((a,b) =>{
    if(b[1] > a[1]) return 1
    if(b[1] < a[1]) return -1
    if(a[0] < b[0]) return -1
    if(a[0] > b[0]) return 1
  })

  return score;
}

function problem7(user, friends, visitors) {
  
}

module.exports = problem7;

// ### 기능들
// 1. 사용자들의 친구관계 정리하기
// 2. user의 친구를 함께 아는 사람들 찾기
// 3. 함께 아는 친구의 수 점수 계산
// 4. 타임라인에 방문한 횟수 점수 계산
// 5. 이미 user와 친구인 관계 제외하기
// 6. 친구목록을 점수별 정렬하기