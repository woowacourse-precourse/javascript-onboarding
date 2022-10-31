function problem2(cryptogram) {
    if (!cryptogram) return;

    let cryptogramArray = [...cryptogram];

    while (true) {
        let matchIndex = cryptogramArray.findIndex(
            (item, index) => (cryptogramArray[index + 1] || null) === item
        );

        if (matchIndex === -1) break;

        cryptogramArray = cryptogramArray.filter(
            (_, index) => index !== matchIndex && index !== matchIndex + 1
        );
    }

    return cryptogramArray.join('');
}

module.exports = problem2;
