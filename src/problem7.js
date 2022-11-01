function problem7(user, friends, visitors) {
  var answer = [];
  
  const myFr = [];
  const point = [];
  friends.forEach((value)=>{
    if(!myFr.includes(value[0])){
      myFr.push(value[0]);
    }
    if(!point[value[1]]){
      point[value[1]] = 0;
    }
    point[value[1]] += 10;
  })

  visitors.forEach((value)=>{
    if(!point[value]){
      point[value] = 0;
    }
    point[value]++;
  })

  myFr.forEach((value)=>{
    delete point[value];
    if(point[user]){
      delete point[user]
    }
  })

  for(const key in point){
    answer.push(key)
  }

  return answer;
}

module.exports = problem7;
