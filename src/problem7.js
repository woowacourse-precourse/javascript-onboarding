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
  console.log(score); // { donut: 0, andole: 0, jun: 0, shakevan: 0 }

  // 기능 3
  bothFriendCheck(relation, userFriends, score);
  console.log(score); // { donut: 0, andole: 20, jun: 20, shakevan: 0 }

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
    if (id in userFriends) { // 이미 친구인 경우 제외
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

    let tmp = relation[friend]; // 한 사람의 친구 목록
    // console.log(tmp);

    for (let f of tmp) {
      console.log("f: ", f);
      console.log("userFriends: ", userFriends);

      if (userFriends.includes(f)) { // 함께 아는 친구인 경우
        count += 10;
      }
    }

    score[friend] += count;
  }

  return;
}


problem7(user,friends, visitors);

// module.exports = problem7;