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



function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
