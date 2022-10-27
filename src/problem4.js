function problem4(word) {
    const [
        ALPHABET_COUNT,
        LOWERCASE_ALPHABET_START,
        LOWERCASE_ALPHABET_END,
        UPPERCASE_ALPHABET_START,
        UPPERCASE_ALPHABET_END,
    ] = [26, 97, 122, 65, 90];

    const REVERSE_CAESAR = {};

    [...Array(ALPHABET_COUNT).keys()].map((codeStep) => {
        REVERSE_CAESAR[String.fromCharCode(UPPERCASE_ALPHABET_START + codeStep)] =
            String.fromCharCode(UPPERCASE_ALPHABET_END - codeStep);
        REVERSE_CAESAR[String.fromCharCode(LOWERCASE_ALPHABET_START + codeStep)] =
            String.fromCharCode(LOWERCASE_ALPHABET_END - codeStep);
    });

    return [...word].map((letter) => REVERSE_CAESAR[letter] || letter).join('');
}

module.exports = problem4;
