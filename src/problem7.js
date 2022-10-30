



function problem7(user, friends, visitors) {
  let answer = [];
  let friend_dic = {};
  for(let i = 0; i < friends.length; i++){
    let friend1 = friends[i][0];
    let friend2 = friends[i][1];

    if(friend1 in friend_dic){
      friend_dic[friend1].push(friend2);
    }else{
      friend_dic[friend1] = [friend2];
    }
    if(friend2 in friend_dic){
      friend_dic[friend2].push(friend1);
    }else{
      friend_dic[friend2] = [friend1];
    }  
  }

  // 추천점수 저장 객체 만들기
  let friend_score = {};
  for(let key in friend_dic){
    friend_score[key] = 0;
  }

  // 함께 아는 친구 점수 획득
  // console.log(friend_dic);
  // console.log(friend_dic[user][0], friend_dic[user][1]);
  for(let i = 0; i < friend_dic[user].length; i++){
    let friend = friend_dic[user][i];
    let temp = friend_dic[friend];
    // console.log("temp:", temp);
    for(let j = 0; j < temp.length; j++){
      friend_score[temp[j]] += 10;
    }
  }

  // 방문자 점수 획득
  for(let i = 0; i < visitors.length; i++){
    if(visitors[i] in friend_score){
      friend_score[visitors[i]] += 1;
    } else{
      friend_score[visitors[i]] = 1;
    }
  }


  // 원래 user와 친구였던 사람 제거
  for(let i = 0; i < friend_dic[user].length; i++){
    delete friend_score[friend_dic[user][i]];
  }
  delete friend_score[user];
 
  // value 기준으로 내림차순 정렬
  let result_score = sortDecreaseValue(friend_score);

  for(let i = 0; i < result_score.length; i++){    
    if(result_score[i][1] === 0){
      break;
    }
    if(answer.length > 5){
      break;
    }
    answer.push(result_score[i][0]);
  }
  // console.log(answer);
  return answer;
}

function sortDecreaseValue(friend_score){
  let result_score = [];
  for(let score in friend_score){
    result_score.push([score, friend_score[score]]);
  }
  result_score.sort(function(a, b){
    return b[1] - a[1];
  });

  return result_score;
}

// problem7("mrko",	
// [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],
// 	["bedi", "bedi", "donut", "bedi", "shakevan"]);
module.exports = problem7;
