function problem4(word) {
    let answer;
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    const arr = [...word];

    for (let i = 0; i < arr.length; i++) {
        if (upper.includes(arr[i])) {
            const idx = upper.indexOf(arr[i]);
            arr[i] = upper[25 - idx];
        } else if (lower.includes(arr[i])) {
            const idx = lower.indexOf(arr[i]);
            arr[i] = lower[25 - idx];
        }
    }
    answer = arr.join('');
    return answer;
}

module.exports = problem4;
