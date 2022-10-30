function problem2(cryptogram) {
    let splitted = cryptogram.split("");
    let queue = [];

    splitted.forEach((ele) => {
        if (ele === queue[queue.length - 1]) {
            queue.pop();
            return;
        }
        queue.push(ele);
    });

    return queue.join("");
}

module.exports = problem2;
