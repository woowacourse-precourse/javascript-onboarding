function convert_str_to_arr(str){
  let convert_arr=[]
  for (let i = 0; i < str.length; i++) {
    convert_arr.push(str[i])
  }
  return convert_arr
}

function check_repeat(arr) {
  let isRepeat = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      isRepeat = true;
      break
    }
  }
  return isRepeat;
}

function find_scope(start_idx,end_idx,convert_arr){
  for (end_idx; end_idx < convert_arr.length; end_idx++) {
          if (convert_arr[start_idx] != convert_arr[end_idx]) {
            end_idx = end_idx - 1
            findRepeat = true;
            return findRepeat;
          }
    }
}

function problem2(cryptogram) {
  let answer;
  let convert_arr = convert_str_to_arr(cryptogram);
  let findRepeat = false;
  while(check_repeat(convert_arr)){
    let start_idx = -1;
    let end_idx = -1;
    for (let i = 0; i < convert_arr.length - 1; i++) {
      if (convert_arr[i] == convert_arr[i + 1]) {
        start_idx = i;
        end_idx = i + 1;
        findRepeat = find_scope(start_idx,end_idx,convert_arr)
        if (findRepeat) {
          break;
        }
      }
    }
  }
  return answer;

}

module.exports = problem2;
