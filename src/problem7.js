const MAX_RETURN_LENGTH = 5;

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

// 사용자의 타임라인 방문 점수 계산 
const calcVisitScore = (scores, user, friends, visitors) => {
  const relation = makeRelation(friends);
  visitors.map(visitor => {
    if(!relation[user].includes(visitor)) {
      if(!Object.keys(scores).includes(visitor)) {
        scores[visitor] = 1;
      }
      else {
        scores[visitor] += 1;
      }
    }
  })
}

// 점수 배열 정렬
const sortScore = (scoreArr) => {
  scoreArr.sort((a, b) => {
    [aName, aScore] = a;
    [bName, bScore] = b;
    
    if(aScore > bScore) return -1;
    if(aScore < bScore) return 1;
    if(aScore === bScore) {
      if(aName > bName) return 1;
      if(aName <= bName) return -1;
    }
  });
}

// 출력 형태 맞추기
const printResult = (scoreArr) => {
  const result = [];
  for(let i = 0; i<scoreArr.length; i++) {
    if(i === MAX_RETURN_LENGTH) break;
    result.push(scoreArr[i][0]);
  }
  return result;
}

// 메인 함수 
function problem7(user, friends, visitors) {
  const scores = {};
  let scoreArr = [];

  calcAcquaintanceScore(scores, user, friends);
  calcVisitScore(scores, user, friends, visitors);
  scoreArr = [...Object.entries(scores)];
  sortScore(scoreArr);

  return [...printResult(scoreArr)]
}

module.exports = problem7;
