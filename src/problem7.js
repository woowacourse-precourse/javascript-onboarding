function problem7(user, friends, visitors) {
  var answer = [];
  var people = new Map();
  var score = new Map();

  // Make people objects
  for(var i = 0; i < friends.length; i++){
    for(var x = 0; x < 2; x++){
      var friend = people.get(friends[i][x]);
      if(friend != undefined){
        friend.add(friends[i][1-x]);
        people.set(friends[i][x], friend);
      }
      else{
        var newFriend = new Set([friends[i][1-x]]);
        people.set(friends[i][x], newFriend);
      }
    }
    
  }

  // Score every person object
  // First, count the number of friends user know with
  var userFriend = people.get(user);
  for (const person of people.entries()) {
    if(person[0] != user && !userFriend.has(person[0])){
      var intersection = new Set([...person[1]].filter(x => userFriend.has(x)));
      score.set(person[0], intersection.size * 10);
    }
  }
  // Second, score a person who visited user's time line
  for(var i = 0; i < visitors.length; i++){
    if(visitors[i] != user && !userFriend.has(visitors[i])){
      var thisScore = score.get(visitors[i]);
      if(thisScore != undefined){
        score.set(visitors[i], thisScore+1);
      }
      else{
        score.set(visitors[i], 1);
      }
    }
  }

  
  var scoreArray = [...score];
  // Sort by name first
  scoreArray.sort();
  // Sort by score
  scoreArray.sort(function(a,b){
      return b[1] - a[1];
  });
  
  // Return answer
  for(var i = 0; i < scoreArray.length; i++){
    if(i < 5){
      answer.push(scoreArray[i][0]);
    }
    else{
      break;
    }
  }
  return answer;
}

module.exports = problem7;
