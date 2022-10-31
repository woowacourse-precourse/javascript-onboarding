user = "mrko",
friends = [["donut", "andole"],["donut", "jun"],["donut", "mrko"],["shakevan", "andole"],["shakevan", "jun"],["shakevan", "mrko"],]
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]

function problem7(user, friends, visitors) {
  let answer;
  let relation = {};
  let userFriends;
  let score = {};

  // 기능 1
  relation = makeRelation(friends);
  console.log(relation); // { donut: [ 'andole', 'jun', 'mrko' ], andole: [ 'donut', 'shakevan' ], ... }
 
  // userFriends(user의 친구 목록) 배열 할당
  userFriends = relation[user];
  console.log(userFriends); // [ 'donut', 'shakevan' ]

  // 기능 2
  score = makeScore(relation, userFriends);
  console.log(score); // { andole: 0, jun: 0 }

  // 기능 3
  bothFriendCheck(relation, userFriends, score);
  console.log(score); // { andole: 20, jun: 20 }

  // 기능 4
  checkVisitors(visitors, score);
  console.log(score); // { andole: 20, jun: 20, bedi: 3, donut: 1, shakevan: 1 }

  // 기능 5
  scoreArray = sortScore(score);
  console.log("scoreArray: ", scoreArray);

  // 기능 6
  answer = maxFive(scoreArray);
  console.log("answer: ", answer);
  return answer;
}

// 기능 1. relation 딕셔너리에 친구 관계 정리
function makeRelation(friends) {
  let relation = {};

  for (let f of friends) {
    for (let i = 0; i < 2; i++) {
      if (!(f[i] in relation)) {
        relation[f[i]] = []
      }
      relation[f[i]].push(f[(i + 1) % 2]);
    }
  }

  return relation;
}  

// 기능 2. score 딕셔너리에 id 할당
function makeScore(relation, userFriends) {
  let score = {};
  let relationKey = Object.keys(relation); // "key"값만
  
  for (let id of relationKey) {
    if (id === user) { // 본인 제외
      continue;
    }
    if (userFriends.includes(id)) { // 이미 친구인 경우 제외
        continue;
    }
    score[id] = 0;
  }

  return score;
}

// 기능 3. 함께 아는 친구 count
function bothFriendCheck(relation, userFriends, score) {
  let relationKey = Object.keys(relation); // "key"값만

  for (let friend of relationKey) {
    let count = 0;
    // console.log(friend);

    if (friend === user) { // 본인 제외
      continue;
    }
    if (userFriends.includes(friend)) { // 이미 친구인 경우 제외
      continue;
    }

    let tmp = relation[friend]; // 한 사람의 친구 목록
    // console.log(tmp);

    for (let f of tmp) {
      // console.log("f: ", f);
      // console.log("userFriends: ", userFriends);

      if (userFriends.includes(f)) { // 함께 아는 친구인 경우
        count += 10;
      }
    }

    score[friend] += count;
  }

  return;
}

// 기능 4. 방문 횟수 확인
function checkVisitors(visitors, score) {
  let scoreKey = Object.keys(score); // "key"값만
  console.log(scoreKey);
  console.log(visitors);

  for (let v of visitors) {
    console.log("v: ", v);
    if (scoreKey.includes(v)) { // score 배열에 이미 존재하는 경우
      console.log("이미 존재");
      score[v] += 1;
    } else { // 존재하지 않는 경우
      console.log("존재하지 않음");
      score[v] = 1;
      scoreKey = Object.keys(score); // "key"값만
    }
    console.log(score);
  }
  
  return;
}

// 기능 5. 점수는 내림차순, 이름은 오름차순
function sortScore(score) {
  let scoreArray = Object.entries(score);

  scoreArray.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] == b[1]) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
    }
    
  });

  return scoreArray;
}

// 기능 6. 최대 5명 return
function maxFive(scoreArray) {
  let answer = [];
  let scoreLength = scoreArray.length;  

  if (scoreLength > 5) {
    for (let i = 0; 5; i++) {
      if (checkZero(i) == true) { // 기능 7
        answer.push(score[i][0]);
      }
    }
  } else {
    for (score of scoreArray) {
      if (checkZero(i) == true) { // 기능 7
        answer.push(score[0]);
      }
    }
  }

  return answer;
}

// 기능 7. 추천 점수가 0인 경우 확인
function checkZero(score) {
  if (score[1] === 0) {
    return false;
  } else {
    return true;
  }
}


problem7(user,friends, visitors);

// module.exports = problem7;