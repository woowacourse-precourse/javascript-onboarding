function problem7(user, friends, visitors) {
  var answer;

  // 다른사용자set
  var others = new Set();
  friends.forEach(element => {
    element.forEach(v => {
      if(v != user){
        console.log(">>>>>>>>>>>>>>> " + v);
        others.add(v);
      }
    });
  });
  visitors.forEach(element => {
      if(element != user){
        console.log(">>>>>>>>>>>>>>> " + element);
        others.add(element);
      }
  });
  others = Array.from(others);
  console.log(others);

  // 유저의 친구들 set
  var usersFriends = getFriensSet(user, friends);
  console.log("usersFriends");
  console.log(usersFriends);

  var othersPoint = [];

  others.forEach(v => {
    var friendPt = 0;
    var otherFriends = getFriensSet(v, friends);
    console.log("========== otherFriends ======");
    console.log(otherFriends);

    // user의 친구 - 다른사용자의 친구
    var intersection = Array.from([... usersFriends].filter(x => !otherFriends.has(x)));

    friendPt += (usersFriends.size - intersection.length) * 10;
    console.log(v + "의 친구점수 :: " + friendPt );

    // 방문 점수 
    visitors.forEach(x => {
      if(x == v){
        friendPt += 1;
      }
    })
    console.log(v + "의 최종점수 :: " + friendPt );
    var obj = {};
    obj.name = v;
    obj.point = friendPt;
    othersPoint.push(obj);
  })

  othersPoint = othersPoint.sort(function(a, b){
    //console.log(a.point - b.point);
    var rtn;
    if(a.point < b.point){
      console.log(1);
      rtn = 1;
    }else if (a.point > b.point){
      console.log(2);
      rtn = -1;
    }else{
      console.log(3);
      // 문자열 오름차순 소팅
      var aname = a.name;
      var bname = b.name;

      if(aname > bname){
        console.log(4);
        rtn = 1;
      }else if(aname < bname){
        console.log(5);
        rtn = -1
      }else{
        console.log(6);
        rtn = 0;
      }
    }
    //console.log(rtn);
    return rtn;
  });

  console.log(othersPoint);
  answer = [];
  othersPoint.forEach(element => {
    if(element.point != 0){
      answer.push(element.name);
    }
  });

  // 이미 친구이면 빼기
  answer = Array.from([... answer].filter(x => !usersFriends.has(x)));
  console.log(answer);

  if(answer.length > 5){
    answer = answer.slice(0, 5);
  }

  return answer;
}

function getFriensSet(username, friends){
  var usersFriends = new Set();
  friends.forEach(element => {
    var index = element.indexOf(username);
    if(index > -1){
      index == 0 ? usersFriends.add(element[1]) : usersFriends.add(element[0]);
    }
  });

  return usersFriends;
}

module.exports = problem7;
