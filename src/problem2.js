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
function problem2(cryptogram) {
  let answer;
  let convert_arr = convert_str_to_arr(cryptogram);
  while(check_repeat(convert_arr)){
    
  }
  return answer;

}

module.exports = problem2;
