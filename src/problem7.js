function problem7(user, friends, visitors) {
  const graphLi = [];
  const graph = {}
  let score = {}
  let result;
  
  friends.forEach((friend) => {
    graphLi.push(friend[0]);
    graphLi.push(friend[1]);
  });
  
  graphLi.sort();
  
  graphLi.forEach((val) => {
    graph[val] = [];
  });
  

  friends.forEach(element => {
    graph[element[0]].push(element[1]);
    graph[element[1]].push(element[0]);
  });
  
  Object.keys(graph).forEach((val) => {
    score[val] = 0;
  });
  

  visitors.forEach((val) => {
    score[val] = 0;
  });

  graph[user].forEach((val) => {
    graph[val].forEach((friend) => {
      score[friend] += 10;
    });
  });

  visitors.forEach((friend) => {
    score[friend] += 1;
  })
  
  delete score[user];
  graph[user].forEach((val) => {
    delete score[val];
  });
  const scTable = [];
  
  for (let name in score) {
    if (score[name] == 0) {
      continue
    }
    scTable.push([name, score[name]]);
  }
  
  scTable.sort((a,b) => {
    return b[1] - a[1];
  });
  
  let fr = [];
  scTable.forEach((val) => {
    fr.push(val[0]);
  })
  
  if (fr.length > 5) {
    result = fr.slice(0,5);
  } else{
    result = fr.slice(0,fr.length);
  }
  return result;
  
  
}




problem7("mrko",[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],["bedi", "bedi", "donut", "bedi", "shakevan"])

module.exports = problem7;
