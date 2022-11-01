const deleteDup = (str) => {
    let deletedstr = str;
    let isKeep = false;
    for (let i = 0; i < deletedstr.length - 1; i++) {
        if (deletedstr[i] === deletedstr[i + 1]) {
            if (i === 0) deletedstr = deletedstr.slice(i + 2, deletedstr.lengh);
            else if (i === deletedstr.length - 1)
                deletedstr = deletedstr.slice(0, i);
            else
                deletedstr =
                    deletedstr.slice(0, i) +
                    deletedstr.slice(i + 2, deletedstr.lengh);
            isKeep = true;
        }
    }
    return { deletedstr, isKeep };
};

function problem2(cryptogram) {
    let newstr = cryptogram;
    let keep = true;
    while (keep) {
        newstr = deleteDup(newstr).deletedstr;
        keep = deleteDup(newstr).isKeep;
    }
    console.log(newstr);
}

problem2("browoanoommnaon");
problem2("zyelleyz");
module.exports = problem2;
