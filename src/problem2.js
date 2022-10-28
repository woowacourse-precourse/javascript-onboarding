function problem2(cryptogram) {
    let answer = '';
    const arr = [...cryptogram];

    let i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = -1;
        }
        i++;
    }
    answer = arr.join('');
    return answer;
}

module.exports = problem2;
