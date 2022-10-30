function problem7(user, friends, visitors) {
  var answer = [];
  var myObj = new Object();
  
  // 친구 관계 확인을 위한 오브젝트 생성 friends에서의 관계.
  friends.forEach(element => {
    if (myObj[element[0]]){
      myObj[element[0]].push(element[1]);
    }
    else{
      myObj[element[0]] = [0];
      myObj[element[0]].push(element[1]);
    }

    if (myObj[element[1]]){
      myObj[element[1]].push(element[0]);
    }
    else{
      myObj[element[1]] = [0];
      myObj[element[1]].push(element[0]);
    }
  });

  // 단순 방문자인 경우.
  visitors.forEach(element => {
    if (!myObj[element]){
      myObj[element] = [0];
    }
  });

  //유저도 포함시켜, 유저에게 잘못된 점수를 주는것을 방지합니다.
  myObj[user].push(user);



  return answer;
}


module.exports = problem7;
