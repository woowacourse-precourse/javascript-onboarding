// 2022 Kimjungwon 우아한테크코스 문제풀이 7

function isException(user, friends, visitors) {
  const regex = /[a-z]/g;
  //제한사항. user는 길이가 1 이상 30 이하인 문자열이다.
  if (user.length < 1 || user.length > 30) {
    return true;
  }
  //제한사항. friends는 길이가 1 이상 10,000 이하인 배열이다.
  else if (friends.length < 1 || friends.length > 10000) {
    return true;
  }
  //제한사항. visitors는 길이가 0 이상 10,000 이하인 배열이다.
  else if (visitors < 0 || visitors > 10000) {
    return true;
  }
  //제한사항. 사용자 아이디는 알파벳 소문자로만 이루어져 있다
  else if (!user.match(regex)) {
    return true;
  }
  //제한사항. 아이디는 길이가 1 이상 30 이하인 문자열이다
  else if (!visitors.toString().match(regex)) {
    return true;
  }
  else {
    friends.forEach((friend) => {
      friend.forEach((name) => {
        //제한사항. 아이디는 길이가 1 이상 30 이하인 문자열이다
        if (name.length < 1 || name.length > 30) {
          return true;
        }
        //제한사항. 사용자 아이디는 알파벳 소문자로만 이루어져 있다
        else if (!name.match(regex)) {
          return true;
        }
      })
    })
  }
  return false;

}
/**
 * 
 * 친구 추천 알고리즘
 * 
 * user의 친구와 친구인 사람 수만큼 +10점
 * user의 타임라인에 방문한 횟수만큼 +1점을 주는 방식이다.
 * 최대 5명을 리턴한다.
 * @param {*} user 사용자를 나타내는 문자열.
 * @param {*} friends 사용자의 친구의 친구를 나타내는 2*n의 배열.
 * @param {*} visitors 방문자를 나타내는 1차원 배열.
 */
function recomendFriends(user, friends, visitors) {

  let result;

  const myFriends = {};
  const score = {};

  //친구목록 만들기 (myFriends)
  friends.forEach((friend, index) => {
    let name1 = friend[0];
    let name2 = friend[1];

    if (!myFriends[name1]) {
      myFriends[name1] = [];
    }
    if (!myFriends[name2]) {
      myFriends[name2] = [];
    }
    myFriends[name1].push(name2);
    myFriends[name2].push(name1);
  });
  console.log(myFriends);


  //함께 아는 친구 점수 반영 (score)
  for (let i in myFriends) {
    if (i === user) {
      continue;
    }
    if (!score[myFriends[i]]) {
      score[i] = 0;
    }
    myFriends[i].forEach((friend) => {
      if (myFriends[user].includes(friend)) {
        score[i] += 10;
      }
    })
  }


  //방문자 점수 반영 (score)
  visitors.forEach((visitor) => {
    if (!score[visitor]) {
      score[visitor] = 0;
    }
    score[visitor] += 1;
  })

  //{사용자 : 점수}객체를 점수기준으로 내림차순으로 sorting시킨후, 점수가 같다면 문자열상에서 오름차순을 진행한다.
  result = Object.entries(score).sort(([, a], [, b]) => b - a);
  result = result.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
    }
  });
  console.log(result);

  //점수가 1이상이고 유저와 친구가 아닌 사람을 추천.
  result = result.filter(point => point[1] > 0 && !myFriends[user].includes(point[0])).map(point => point[0]);

  //최대 5명까지 리턴한다.
  if (result.length > 5) {
    result = result.slice(0, 5);
  }
  return result;

}
function problem7(user, friends, visitors) {
  if (isException(user, friends, visitors)) {
    return -1;
  }
  let answer = recomendFriends(user, friends, visitors);
  return answer;
}

module.exports = problem7;
