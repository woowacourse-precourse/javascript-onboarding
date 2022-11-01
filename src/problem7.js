function problem7(user, friends, visitors) {
  var answer;
  let friend_list = {};
  let score = {};
  for (i=0;i<friends.length;i++){
      const A = friends[i][0];
      const B = friends[i][1];
      if (!(A in friend_list)){
          friend_list[A]=[];
          score[A]=0;
      }
      if (!(B in friend_list)){
          friend_list[B]=[];
          score[B]=0;
      }
      friend_list[A].push(B);
      friend_list[B].push(A);
  }
  for (j=0;j<friend_list[user].length;j++){
      const A = friend_list[user][j];
      for(k=0;k<friend_list[A].length;k++){
          score[friend_list[A][k]]+=10;
      }
  }

  visitors.forEach(visit => {
      if(!(visit in friend_list)){
          friend_list[visit]=[]
          score[visit]=0;
      }
      score[visit]++;
  });

  let temp_res = {};
  for(const nm in score){
      if (nm==user){
          continue;
      }
      if (friend_list[user].includes(nm)){
          continue;
      }
      if (score[nm]==0){
          continue;
      }
      else{
          temp_res[nm]=score[nm];
      }
  }

  var sort_list = [];
  for (var nam in temp_res) {
      sort_list.push([nam, temp_res[nam]]);
  }
  sort_list.sort(function(a, b) {
      if (a[1] != b[1]){ return b[1] - a[1]; }
      else {
          return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      }
  });

  answer = [];
  for (i=0;i<5;i++){
      if (i==sort_list.length){ break;}
      answer.push(sort_list[i][0]);
  }
  return answer;
}

module.exports = problem7;