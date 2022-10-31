function problem2(cryptogram) {
    const stack = [];

    for (let x of cryptogram) {
        if (stack[stack.length - 1] !== x) {
            stack.push(x);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}

module.exports = problem2;
