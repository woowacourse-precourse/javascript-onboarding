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
  
  for (let i = 0; i < usersFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (usersFriend[i] == friends[j][0] && friends[j][1] !== user) {
        if (!candidate[friends[j][1]]) {
          candidate[friends[j][1]] = count;
        } else {
          candidate[friends[j][1]] += count;
        }
      } else if (usersFriend[i] == friends[j][1] && friends[j][0] !== user) {
        if (!candidate[friends[j][0]]) {
          candidate[friends[j][0]] = count;
        } else {
          candidate[friends[j][0]] += count;
        }
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

  candidate = Object.entries(candidate).sort((a, b) => {
    if (b[1] == a[1]) {
      return -1;
    } else {
      return 1;
    }
  });
  
  answer = candidate.slice(0, 5);
  answer = answer.map((item) => item[0]);

  return answer;
}

const user = "mrko";
const friends = [ ["donut", "jun"], ["donut", "andole"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"], ["asdf", "mrko"], ["asdf", "yujin"] ];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
problem7(user, friends, visitors);

module.exports = problem7;
