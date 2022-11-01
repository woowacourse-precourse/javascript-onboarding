function problem2(cryptogram) {
  var answer;

  let temp_arr = cryptogram;
  let cry_len = temp_arr.length;
  let post_len = cry_len;

  while(true){
    temp_arr = DeleteOverlap(temp_arr);
    
    cry_len = temp_arr.length;
    if(post_len == cry_len)
      break;
    post_len = cry_len;
  }

  answer = temp_arr;
  return answer;
}

//어떤 문자열에서 나열된 원소가 연속해서 오는 경우 제거 (abccd -> abd)
function DeleteOverlap(arr){
  
  let arr_len = arr.length;
  let arr_new = "";

  let post_i = 0;
  for(let i=1; i<arr_len; i++){

    if(arr[post_i] != arr[i])
      arr_new = arr_new.concat(arr[post_i]);
    else
      i++
    
    post_i = i;
  }
  if(arr[arr_len-1] != arr[arr_len-2])
    arr_new = arr_new.concat(arr[arr_len-1]);
  
  return arr_new;
}

// document.write(problem2('zyelleyzaabdssdf'));

module.exports = problem2;
