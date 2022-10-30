function problem6(forms) {
  var email_list = [];

  for (var i in forms) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      email_list = email_list.concat(
        check_name(forms, forms[i][1].substring(j, j + 2), forms[i][0])
      );
    }
  }
  var email_set = new Set(email_list);
  var sorted_email_list = Array.from(email_set).sort();
  return sorted_email_list;
}

function check_name(forms, now_2name, now_email) {
  var arr = [];
  for (var i in forms) {
    if (forms[i][1].includes(now_2name)) {
      if (forms[i][0] == now_email) {
        continue;
      }
      arr.push(forms[i][0]);
    }
  }
  return arr;
}

module.exports = problem6;
