//친구관계 object 만드는 함수
function makeEdge(friends) {
  let edge = {};
  for (let i of friends) {
    let [friendA, friendB] = i;
    if (friendA in edge) {
      edge[friendA].push(friendB);
    } else {
      edge[friendA] = [friendB];
    }
    if (friendB in edge) {
      edge[friendB].push(friendA);
    } else {
      edge[friendB] = [friendA];
    }
  }
  return edge;
}

//함께 아는 친구가 몇명인지 세기
function compare(arr1 = [], arr2) {
  return arr1.reduce((a, c) => a + arr2.includes(c), 0);
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
