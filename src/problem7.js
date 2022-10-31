function problem7(user, friends, visitors) {
  var answer = solution(user, friends, visitors);
  return answer;
}

function solution(user, friends, visitors){
  let result = new Array();
  let suggestion = {};
  let f_lst = new Array();

  friends.forEach((f_arr) => {
    idA = f_arr[0];
    f_lst.push(idA);

    idB = f_arr[1];
    if(idB != user){
      if(idB in suggestion){
        suggestion[idB] += 10;
      }
      else{
        suggestion[idB] = 10;
      }
    }
  });

  visitors.forEach((visitor) =>{
    if(!(f_lst.includes(visitor))){
      if(visitor in suggestion){
        suggestion[visitor] += 1;
      }
      else{
        suggestion[visitor] = 1;
      }
    }
  });
  
  let max = 0;
  let max_indx = [];
  let limit = (Object.keys(suggestion) > 5 ? 5 : Object.keys(suggestion).length);
  while(true){
    let k_arr = Object.keys(suggestion);
      max_indx.length = 0;
//    console.log("[*] SUGGEST LIST: " + Object.keys(suggestion));
//    console.log("[*] SUGGEST SCORE: " + Object.values(suggestion));

    // 추천 점수 최대값 검색
    k_arr.forEach((key, index) => {
      if(index == 0 || suggestion[key] >= max){
        max = suggestion[key];
        if(suggestion[key] > max) max_indx = [];
        max_indx.push(index);
      }
    });
      
    // result 배열에 추천 친구 추가
    if(max_indx.length == 1){
      result.push(k_arr[max_indx[0]]);
      delete suggestion[k_arr[max_indx[0]]];
    }

    else if(max_indx.length > 1){
      let tmp_stk = [];
      
      for(i of max_indx){
        tmp_stk.push(k_arr[i]);
         delete suggestion[k_arr[i]];
      }
      
      tmp_stk.sort();
      //console.log("[*] TEMPORARY STACK: " + tmp_stk);
      for(k of tmp_stk){
        if(result.length < 5) result.push(k);
        else  break;
      }

    }

    if(result.length === limit){
      break;
    }     
  }

  
  return result;
}

module.exports = problem7;
