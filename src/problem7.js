function visitCount(visitors){
  return visitors.reduce((prev, curr) => {
    if (curr in prev){
      prev[curr] += 1;
    }
    else{
      prev[curr] = 1;
    }
    return prev;
  }, {});
};

function friendRelation(friends){
  const relation = {};
  friends.map(friend =>{
    let a = friend[0];
    let b = friend[1];
    if (a in relation){
      relation[a].push(b);
    }
    else{
      relation[a] = [b];
    }
    if (b in relation){
      relation[b].push(a);
    }
    else{
      relation[b] = [a];
    }
  })
  return relation;
}

function knowFriend(arr, user, algorithm){
  //존재하는 경우
  userFriend = arr[user];
  userFriend.map(commonFriend => {
    arr[commonFriend].map(name => {
      (name in algorithm) ? algorithm[name] += 10 : algorithm[name] = 10;
    })
  })
  return algorithm;
}

function problem7(user, friends, visitors) {
  //const answer = friendRelation(friends)
  const algorithm = visitCount(visitors);
  const relation = friendRelation(friends);
  const answer = knowFriend(relation, user, algorithm);
  return answer;
}

module.exports = problem7;

console.log(problem7('mrko', [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]))

/*
user = "mrko";
friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ];
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
result = ["andole", "jun", "bedi"]

*/