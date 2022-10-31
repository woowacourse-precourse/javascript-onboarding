function algorithm(user, friends, visitors){
  var result=[];
  //기능목록1: 사용자와 함께 아는 친구수 점수
  var userFriends = new Set();
  var score = {};
  for(var i=0; i<friends.length; i++){
    var f1 = friends[i][0];
    var f2 = friends[i][1];
    if(f1==user){
      userFriends.add(f2);
    }else if(f2==user){
      userFriends.add(f1);
    }
  }
  for(var i=0; i<friends.length; i++){
    var f1 = friends[i][0];
    var f2 = friends[i][1];
    if(userFriends.has(f1) && f2!=user){
      if(f2 in score){
        score[f2]+=10;
      }else{
        score[f2]=10;
      }
    }else if(userFriends.has(f2) && f1!=user){
      if(f1 in score){
        score[f1]+=10;
      }else{
        score[f1]=10;
      }
    }
  }

}
function problem7(user, friends, visitors) {
  var answer;
  answer = algorithm(user,friends,visitors);
  return answer;
}
module.exports = problem7;
