function problem2(cryptogram) {
    var strArray = cryptogram.split('');
    let stack = [];
    let prevLength;

    do {
        prevLength = strArray.length;
        stack = [];
        let duplicateCount = 0;

        for (let i = 0; i < strArray.length; i++) {
            let peek = stack[stack.length - 1];

            if (stack.length === 0) {
                stack.push(strArray[i]);
                continue;
            }

            if (peek !== strArray[i]) {
                if (duplicateCount > 0) {
                    stack.pop();
                    duplicateCount = 0;
                }
                stack.push(strArray[i]);
            } else {
                duplicateCount++;
            }
        }
        if (duplicateCount > 0) stack.pop();
        strArray = stack;
    } while (prevLength !== stack.length);

    return strArray.join('');
}

module.exports = problem2;
