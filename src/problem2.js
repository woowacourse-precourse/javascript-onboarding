function problem2(cryptogram) {
    // 스택 (first in last out)
    // 스택의 마지막 요소와 문자열의 요소를 비교한다.
    const stack = [];
    // 연속된 단어가 3개 이상도 나올 수 있기 때문에 스택에서 버려지는 요소를 모아두는 배열
    // trash의 마지막 요소와도 문자열의 요소를 비교해야한다.
    const trash = [];

    for (let x of cryptogram) {
        if (stack[stack.length - 1] !== x) {
            if (trash[trash.length - 1] === x) {
                trash.push(x);
                continue;
            }
            stack.push(x);
            trash.push(' ');
        } else {
            trash.push(stack.pop());
        }
    }
    return stack.join('');
}

module.exports = problem2;
