function problem2(cryptogram) {
    const cryptogram_c = [...cryptogram];
    console.log(cryptogram_c);
    while (true) {
        var arr_length = cryptogram_c.length;
        for (let i = 0; i < cryptogram_c.length - 1; i++) {
            if (cryptogram_c[i] === cryptogram_c[i + 1]) {
                cryptogram_c.splice(i, 2);
            }
        }
        if (arr_length === cryptogram_c.length) {
            var answer = cryptogram_c.join("");
            return answer;
        }
    }
}

module.exports = problem2;
