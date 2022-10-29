/*
스택 사용하는 문제

중복 문자는 동시에 없어짐
  brownoonnn >> brown
중복 문자를 없앤 후 중복 문자가 있으면 다시 해독
  brownoon >> brownn >> brow
qweeweew >> qwwww >> q

1. 스택에 넣기 전에 현재 넣으려는 문자 뒤로 중복문자가 있는지 확인
  >> 있다면 본인 포함 중복문자들은 건너뜀 (스택에 넣지 않음)
2. 없다면 (본인 다음문자가 본인과 다르다면) 스택 꼭대기와 비교해서 push
  >> 다르면 push 전에 현재 스택 꼭대기에 쌓여있는 중복문자들 제거
*/

function problem2(cryptogram) {
  let answer;
  let stack = [];
  let i = 0;

  cryptogram = cryptogram.split('');
  cryptogram.push('');
  
  while (i < cryptogram.length)
  {
    // 현재 넣으려는 문자 뒤로 중복문자가 있다면 전부 제거
    let start, end;
    for (start=i, end=i+1; 
        end < cryptogram.length && cryptogram[start]==cryptogram[end]; 
        end++) {}
    if (start + 1 < end)
    {
      i = end;
      continue;
    }

    // 본인과 다를 경우 스택 꼭대기의 중복 문자 제거
    if (stack.length > 0 && stack[stack.length - 1] != cryptogram[i])
    {
      let stack_top = stack[stack.length - 1];
      
      if (stack[stack.length - 2] == stack_top)
      {
        while (stack[stack.length - 1] == stack_top)
          stack.pop();
      }
    }

    // 스택에 넣음
    stack.push(cryptogram[i]);
    i++;
  }

  answer = stack.join('');
  return answer;
}

module.exports = problem2;
