function problem7(user, friends, visitors) {
  const scores = {};
  const userFriend = [];
  for (let rel of friends){
    if (rel.includes(user)){
      userFriend.push(rel.filter(x => x !== user)[0]);
    } else{
      for (let id of rel){
        scores[id] = 0;
      }
    }
  }

  for (let rel of friends.filter(x => !(x.includes(user)))) {
    for (let friend of userFriend) {
      if (rel.includes(friend)) {
        scores[rel.filter(x => x !== friend)[0]] += 10;
      }
    }
  }

  for (let visitor of visitors.filter(x => !(userFriend.includes(x)))){
    if (!(scores.hasOwnProperty(visitor))){
      scores[visitor] = 0;
    }
    scores[visitor]++;
  }

  const scoreOverZero = Object.keys(scores).filter(x => scores[x] > 0);

  return scoreOverZero.slice(0, 5);

}



module.exports = problem7;
