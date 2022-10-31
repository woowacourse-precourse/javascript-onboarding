function problem2(cryptogram) {
    const stack = [];
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
