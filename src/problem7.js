function problem7(user, friends, visitors) {
  var answer;
  let scoreObj = {};
  let knowUser = [];

  for (const [a, b] of friends) {
    scoreObj[a] = 0;
    scoreObj[b] = 0;
    if(a === user){
      knowUser.push(b);
    } else if(b === user){
      knowUser.push(a);
    }
  }

  console.log(knowUser);

  return answer;
}

module.exports = problem7;
