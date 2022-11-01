// 기능 요구 사항
// 친구 추천 알고리즘!
// 사용자와 함께 아는 친구의 친구 = 10점 (friends)
// 사용자의 타임라인에 방문한 횟수 = 1점 (visitors)
// - [o] user의 친구를 담는 배열을 생성한다.
// - [o] user의 친구의 친구를 count += 10 해준다.
// - [o] user의 친구가 아닌 사람 중 visitors에 있는 사람을 count += 1 해준다.
// - [o] count가 큰 순서대로 정렬한다.
//   - [o] 단, 점수가 같은 경우 이름순으로 정렬한다.
//   - [o] 정렬된 배열을 5개로 잘라 이름만 return 하도록 한다.
// 추가작업
// - [o] user의 친구끼리 친구인 경우 candidate에 push 하지 않는다.

function problem7(user, friends, visitors) {
  let answer;
  let usersFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      usersFriend.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      usersFriend.push(friends[i][0]);
    }
  }

  let candidate = {};
  let count = 10;

  function pushCandidate(usersFriendsFriend, usersFriend) {
    let isUsersFriend = false;
    for (let i = 0; i < usersFriend.length; i++) {
      if (usersFriendsFriend == usersFriend[i]) { // user의 친구의 친구가 user의 친구인 경우..
        isUsersFriend = true;
      }
    }
    if (!isUsersFriend) {
      if (!candidate[usersFriendsFriend]) {
        candidate[usersFriendsFriend] = count;
      } else {
        candidate[usersFriendsFriend] += count;
      }
    }
  }
  
  for (let i = 0; i < usersFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (usersFriend[i] == friends[j][0] && friends[j][1] !== user) {
        let usersFriendsFriend = friends[j][1];
        pushCandidate(usersFriendsFriend, usersFriend);
      } else if (usersFriend[i] == friends[j][1] && friends[j][0] !== user) {
        let usersFriendsFriend = friends[j][0];
        pushCandidate(usersFriendsFriend, usersFriend);
      }
    }
  }
  
  let visitorCount = 1;

  for (let i = 0; i < visitors.length; i++) {
    if (!usersFriend.includes(visitors[i])) { 
      if (!candidate[visitors[i]]) {
        candidate[visitors[i]] = visitorCount;
      } else {
        candidate[visitors[i]] += visitorCount;
      }
    }
  }
  // console.log(candidate);

  candidate = Object.entries(candidate).sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
  // console.log(candidate);
  
  answer = candidate.slice(0, 5);
  answer = answer.map((item) => item[0]);

  return answer;
}

// const user = "mrko";
// const friends = [ ["donut", "jun"], ["donut", "andole"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ];
// const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
// user = "andole";
// friends = [ ["andole", 'jun'], ["donut", "jun"], ["donut", "shakevan"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "bedi"], ["anne", "jun"] ];
// visitors = ["donut", "mrko", "aeter", "sam", "sam"];
// console.log(problem7(user, friends, visitors));

module.exports = problem7;
