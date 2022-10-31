function problem2(s) {
    const chars = s.split('');
    const n = s.length;

    let k = 0;
    let i = 1;

    while (i < n) {
        if (chars[i - 1] !== chars[i]) {
            chars[k] = chars[i - 1];
            k = k + 1;
        } else {
            while (i < chars.length && chars[i - 1] === chars[i]) {
                i = i + 1;
            }
        }
        i = i + 1;
    }
    chars[k] = chars[i - 1];
    k = k + 1;

    s = chars.slice(0, k).join('');

    if (k !== n && n > 0) {
        return problem2(s);
    }

    return s;
}
module.exports = problem2;
