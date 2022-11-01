/*
[기능 목록]
1. 친구 목록 만들기
2. 사용자와 함께 아는 친구 점수 계산
3. 사용자의 타임 라인에 방문한 친구 점수 계산
4. 원래 친구였던 사람 제거
5. value값 기준으로 내림차순 정렬
6. 추천점수가 0점이 아닌 친구 중 점수가 높은 순으로 최대 5명 return
*/

function getFriendList(friends){
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
  return friend_dic;
}


function getPoint(user, friend_dic, visitors){
  let friend_score = {};
  friend_score = getPointWithFriend(user, friend_dic, friend_score);
  friend_score = getPointVisitor(visitors, friend_score);
  return friend_score;
}


function getPointWithFriend(user, friend_dic, friend_score){
  for(let i = 0; i < friend_dic[user].length; i++){
    let user_friend = friend_dic[user][i];
    let with_friends = friend_dic[user_friend];
    for(let j = 0; j < with_friends.length; j++){
      if(with_friends[j] in friend_score){
        friend_score[with_friends[j]] += 10;
      } else{
        friend_score[with_friends[j]] = 10;
      }
    }
  }
  return friend_score;
}


function getPointVisitor(visitors, friend_score){
  for(let i = 0; i < visitors.length; i++){
    if(visitors[i] in friend_score){
      friend_score[visitors[i]] += 1;
    } else{
      friend_score[visitors[i]] = 1;
    }
  }
  return friend_score;
}


function deleteAlreadyFriend(user, friend_dic, friend_score){
  for(let i = 0; i < friend_dic[user].length; i++){
    delete friend_score[friend_dic[user][i]];
  }
  delete friend_score[user]; 
  return friend_score;
}


function sortArrayDecreaseValue(friend_score){
  let result_score = [];
  for(let key in friend_score){
    result_score.push([key, friend_score[key]]);
  }
  result_score.sort(function(a, b){
    return b[1] - a[1];
  });

  return result_score;
}


function getResult(result_score){
  let answer = [];
  for(let i = 0; i < result_score.length; i++){    
    if(result_score[i][1] === 0){
      break;
    }
    if(answer.length > 5){
      break;
    }
    answer.push(result_score[i][0]);
  }
  return answer;
}


function problem7(user, friends, visitors) {
  let answer = [];
  let friend_dic = getFriendList(friends);
  let friend_score = getPoint(user, friend_dic, visitors);
  friend_score = deleteAlreadyFriend(user, friend_dic, friend_score);
  answer = getResult(sortArrayDecreaseValue(friend_score));
  return answer;
}

module.exports = problem7;
