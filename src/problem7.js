function problem7(user, friends, visitors) {
  var answer=[];
  var user_f = [];
  var friend_f = [];
  var friend_f2 = [];
  var visitors_2 = [];

  
  for(let i=0; i<friends.length; i++) {
    if(friends[i][0] == user) {
      user_f.push(friends[i][1])
    }
    else if(friends[i][1] == user) {
      user_f.push(friends[i][0])
    }
  }

  for(let i=0; i<friends.length; i++) {
    for(let j=0; j<user_f.length; j++) {
      if(friends[i][0] == user_f[j]) {
        friend_f.push(friends[i][1]);
      }
      else if(friends[i][1] == user_f[j]) {
        friend_f.push(friends[i][0]);
      }
    }
  }

  for(let i=0; i<friend_f.length; i++) {
    if(friend_f[i] !== user) {
      friend_f2.push(friend_f[i]);
    }
  }

  for(let i=0; i<visitors.length; i++) {
    if(user_f.includes(visitors[i])) {
      continue;
    }
    else {
      visitors_2.push(visitors[i])      
    }
  }

  var sub = new Map();
  for(let result of friend_f2) {
    sub.set(result, sub.get(result) +10 || 10);
  }
  for(let result of visitors_2) {
    sub.set(result, sub.get(result) +1 || 1);
  }

  arr = [...sub]
  arr.sort((a,b) => {
    if(a[1]>b[1]) {
      return -1;
    }
    else if(a[1]<b[1]) {
      return 1;
    }
    else {
      return a[0]>b[0];
    }
  });

  for(let a of arr) {
    answer.push(a[0])
  }
  return answer;
}

module.exports = problem7;
