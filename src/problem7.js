// 친구 관계를 저장하기 위한 그래프 생성
const makeRelation = (friends) => {
  const relation = {};

  friends.map(x => {
    if(!Object.keys(relation).includes(x[0])) {
      relation[x[0]] = [];
    }

    if(!Object.keys(relation).includes(x[1])) {
      relation[x[1]] = [];
    }

    if(!relation[x[0]].includes(x[1])) {
      relation[x[0]].push(x[1]);
    }

    if(!relation[x[1]].includes(x[0])) {
      relation[x[1]].push(x[0]);
    }
  });
  
  return relation;
}

// 함께 아는 친구 점수 계산
const calcAcquaintanceScore = (scores, user, friends) => {
  const relation = makeRelation(friends);
  Object.keys(relation).map(friend => {
    if(friend !== user && !relation[friend].includes(user)) {
      scores[friend] = 0;
      relation[friend].map(x => {
        if(relation[x].includes(user)) {
          scores[friend] += 10;
        }
      })
    }
  })
}


function problem7(user, friends, visitors) {
  const scores = {};
  let scoreArr = [];

  calcAcquaintanceScore(scores, user, friends);
}

module.exports = problem7;
