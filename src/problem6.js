function problem6(forms) {
  const getNickname = (arr) => {
    return arr.map((item) => {
      return item[1];
    });
  };

  const getEmail = (arr) => {
    return arr.map((item) => {
      return item[0];
    });
  };

  const getOverlapEmail = (nickname_list, email_list) => {
    const slice_keyword = {};
    const overlap_email = new Set();

    for (let i = 0; i < nickname_list.length; i++) {
      const current_nickname = nickname_list[i];
      // 정해진 닉네임 두글자씩 slice해서 검사
      for (let j = 0; j < current_nickname.length - 1; j++) {
        const slice_nickname = current_nickname.substr(j, 2);
        if (!slice_keyword[slice_nickname]) {
          slice_keyword[slice_nickname] = email_list[i];
        } else if (!(slice_keyword[slice_nickname] === email_list[i])) {
          overlap_email.add(slice_keyword[slice_nickname]);
          overlap_email.add(email_list[i]);
        }
      }
    }
    return overlap_email;
  };

  const nickname_list = getNickname(forms);
  const email_list = getEmail(forms);

  let answer = getOverlapEmail(nickname_list, email_list);
  return Array.from(answer).sort();
}

module.exports = problem6;
