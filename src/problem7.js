function problem7(user, friends, visitors) {
  var answer = solution(user, friends, visitors);
  return answer;
}
function solution(user, friends, visitors) {
  let answer = []; recommend = [];
  let map = new Map();
  for(let friend of friends) {
    if(!friend.includes(user)) {
      for(let score of friend) {
        map.set(score, 10);
      }
    } else {
      for(let score of friend) {
        map.set(score, 0);
      }
    }
  };
  for(let visitor of visitors) {
    if(!map.has(visitor)) {
      map.set(visitor, 1);
    } else if(map.get(visitor) !== 0) {
      map.set(visitor, map.get(visitor) + 1);
    }
  };
  result = [...map].sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < result.length; i++) {
    if(result[i][1] === 0) {
      continue;
    } else {
      answer.push(result[i][0]);
    }
  };
  return answer;
};
module.exports = problem7;
