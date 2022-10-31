function problem7(user, friends, visitors) {
  //딕셔너리로 구현하기
    var relations = {};
    var checklist = {};
    var points = {};

  for( i=0;i<friends.length;i++){
    //첫째친구 기준으로
    if (friends[i][0] in relations == false){
      relations[friends[i][0]] = [friends[i][1]];
    }
    else{
      temp = relations[friends[i][0]];
      temp.push(friends[i][1]);
      relations[friends[i][0]] = temp;
    }
    //둘째친구 기준으로
    if (friends[i][1] in relations == false){
      relations[friends[i][1]] = [friends[i][0]];
    }

    else{
      temp = relations[friends[i][1]];
      temp.push(friends[i][0]);
      relations[friends[i][1]] = temp;
    }

    //checklist정리
    if (friends[i][0] == user){
      checklist[user] = true;
      checklist[friends[i][i]] = true;
    }
    else if (friends[i][1] == user){
      checklist[user]= true;
      checklist[friends[i][0]] = true;
    }
    else {
    checklist[friends[i][0]] = false;
    checklist[friends[i][1]] = false; 
    }
    // points[friends[i][0]] = 0;
    // points[friends[i][1]] = 0;
  }
  
  var friendsOfUser = relations[user];
  for (i = 0; i<friendsOfUser.length;i++){
    var friend = friendsOfUser[i];
    var candidates = relations[friend];
    for (j =0;j<candidates.length;j++){
      if (checklist[candidates[j]] == false){ //후보자들은 이미 친구가 아니어야 함
          if (candidates[j] in points == false){
            points[candidates[j]] = 10;
          }
          else points[candidates[j]] += 10;
      }
    }
  }

  for(i = 0;i<visitors.length;i++){
    if (visitors[i] in checklist==false){
      checklist[visitors[i]] = false;
    }
    if (checklist[visitors[i]] == false){
      if (visitors[i] in points == false){
        points[visitors[i]] = 1;
      }
      else points[visitors[i]]+=1;
  }
  }
  var points = Object.entries(points);

  points.sort();
  points.sort(function(a,b){return b[1]-a[1]});
  var answer = [];
  for (i =0;i<points.length;i++){
    answer.push(points[i][0]);
  }

  return answer;
}
// user = "mrko"
// friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
// problem7(user, friends, visitors);
module.exports = problem7;
