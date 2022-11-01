function problem7(user, friends, visitors) {
  var answer = [];
  var dict = {};
  var friends_dict = {};
  for (var i = 0; i < friends.length; i++){ // 모든 친구 이름 추가
    for(var j = 0; j < 2; j++){
      if (friends[i][j] == user){
        if (j == 0) friends_dict[friends[i][1]] = true;
        if (j == 1) friends_dict[friends[i][0]] = true;
      }
      dict[friends[i][j]] = 0;
    }
  }
  for (var i = 0; i < visitors.length; i++){ // 모든 친구 이름 추가
      if (visitors[i] == user) continue;
      dict[visitors[i]] = 0;
  }
  for (var i = 0; i < visitors.length; i++){ // 모든 친구 이름 추가
    if (visitors[i] == user) continue;
    dict[visitors[i]] += 1;
  }

  for (var i = 0; i < friends.length; i++){
    for(var j = 0; j < 2; j++){
      if (friends[i][j] == user) continue;
      if (friends[i][j] in friends_dict){
        if (j == 0) dict[friends[i][1]] += 10;
        if (j == 1) dict[friends[i][0]] += 10;
      }
    }
  }

  var sortable = [];
  for (var name in dict) {
    if (name == user) continue;
    sortable.push([name, dict[name]]);
  }

  sortable.sort(function(a, b) {
    return (b[1] - a[1]);
  });

  //console.log(friends_dict)
  console.log(dict)
  console.log(sortable);
  if (sortable[user])sortable[user] = 0;
  for (var i = 0; i < 5; i++){
    // if (sortable[i][1] <= 1) continue; // ??
    answer.push(sortable[i][0])
  }
  //console.log(answer)
  return answer;
}

// user = "mrko";
// friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
// problem7(user, friends, visitors)

module.exports = problem7;
