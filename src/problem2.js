function problem2(cryptogram) {
    const array = cryptogram.split('');
    let stack = [];
    for (let i = 0; i < array.length; i++) {
        if (stack.length === 0) {
            stack.push(array[0]);
        }
        if (array[i] == stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        stack.push(array[i]);
    }
    var answer = stack.toString().replace(/,/g, '');
    return answer;
}

module.exports = problem2;
