function problem2(cryptogram) {
  var answer;
  let arr = [...cryptogram]; //문자열을 배열로 변환
  let arr_stack = []; //스택 array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr_stack[arr_stack.length - 1]) {
      // arr(i)과 stack(i-1)비교 이전 문자와 같으면 pop
      arr_stack.pop();
    } else {
      //이외의 경우에는 push하여 stack쌓기
      arr_stack.push(arr[i]);
    }
  }
  answer = arr_stack.join(""); //배열을 다시 문자열로 바꾸기
  return answer;
}

module.exports = problem2;
