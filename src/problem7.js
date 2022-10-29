// function testFn(){
  // 문자열 정렬에 대한 코드.
//   var tmp = "";
//   var forAnswer = [
//     [20, 'E'],
//     [20, 'D'],
//     [10, 'C'],
//     [10, 'B'],
//     [1, 'A']
//   ]

//   for(let i=0 ; i<forAnswer.length-1 ; i++){
//     // 숫자가 같다면.
//     if(forAnswer[i][0] === forAnswer[i+1][0]){
//       for(let j=0 ; j<forAnswer.length - 1 - i; j++){
//         if(forAnswer[j][1] > forAnswer[j+1][1] && forAnswer[j][0] === forAnswer[j+1][0]){
//           console.log(`${forAnswer[i][1]} and ${forAnswer[j][1]} 교환`);
//           tmp = forAnswer[j][1];
//           forAnswer[j][1] = forAnswer[j+1][1];
//           forAnswer[j+1][1] = tmp;
//         }
//       }
//       tmp = "";
//     }
//   }

//   console.log(forAnswer);
// }

function problem7(user, friends, visitors) {
  var answer = [];
  var myObj = new Object();
  var check = 0;
  var realFriend = "";
  var insideFriend = "";
  var tmp = "";
  var forAnswer = [];
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

  myObj[user].push(user);

  // console.log(myObj[user]);

  for (let i=1; i < myObj[user].length-1 ; i++){
    realFriend = myObj[user][i];
    // console.log(realFriend);
    for (let j=1; j < myObj[realFriend].length ; j++){
      insideFriend = myObj[realFriend][j];

      for(let k = 1; k < myObj[user].length ; k++){
        if (insideFriend === myObj[user][k]){
          check = 1;
          break;
        }
      }
      if (!check){
        myObj[insideFriend][0] += 10;
      }
      else{
        check = 0;
      }
    }
  }


  visitors.forEach(element => {
    for (let i=1 ; i<myObj[user].length ; i++){
      if (element === myObj[user][i]){
        check = 1;
        break;
      }
    }
    if(!check){
      myObj[element][0] += 1;
    }
    else{
      check = 0;
    }
    
    
  });


  for(let el in myObj){
    forAnswer.push([myObj[el][0], el]);
  }

  // 숫자에 대한 정렬.
  forAnswer.sort(function(a,b) {
    return b[0] - a[0];
  })

  

  for(let i=0 ; i<forAnswer.length-1 ; i++){
    // 숫자가 같다면.
    if(forAnswer[i][0] === forAnswer[i+1][0]){
      for(let j=0 ; j<forAnswer.length - 1 - i; j++){
        if(forAnswer[j][1] > forAnswer[j+1][1] && forAnswer[j][0] === forAnswer[j+1][0]){
          // console.log(`${forAnswer[i][1]} and ${forAnswer[j][1]} 교환`);
          tmp = forAnswer[j][1];
          forAnswer[j][1] = forAnswer[j+1][1];
          forAnswer[j+1][1] = tmp;
        }
      }
      tmp = "";
    }
  }

  // console.log(forAnswer);

  forAnswer.forEach(element => {
    if (element[0] != 0){
      answer.push(element[1]);
    }
  });

  // 숫자가 같은 경우 사전순으로 정렬을 어떻게 할 것인가?
  
  // console.log(answer);

  return answer;
}

// 친구 추천 알고리즘
// 사용자와 함께 아는 친구의 수 10점 || 사용자의 타임라인에 방문한 횟 수 1점


// donut(1 + ) - andole, jun, mrko
// andole(10 + 10) - donut, shakevan
// jun(10 +  10) - donut, shakevan
// shakevan(1 + ) - mrko, jun, andole
// bedi(3 + )
// mrko - donut, shakevan


problem7("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]);





module.exports = problem7;
