user = "mrko",
friends = [["donut", "andole"],["donut", "jun"],["donut", "mrko"],["shakevan", "andole"],["shakevan", "jun"],["shakevan", "mrko"],]
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]

function problem7(user, friends, visitors) {
  let answer;
  let relation = {};
  let score = {};

  // 기능 1
  relation = makeRelation(friends);
  console.log(relation); // { donut: [ 'andole', 'jun', 'mrko' ], andole: [ 'donut', 'shakevan' ], ... }
 
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

problem7(user,friends, visitors);

// module.exports = problem7;