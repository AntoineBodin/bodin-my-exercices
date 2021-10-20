export const my_string_is_number = (str) => {
  if (str == null ||str == undefined) {
    return false;
  }

  var i = 0;
  while (str[i] != undefined) {
    if (str[i] >= '0' && str[i] <= '9') {
      return true;
    }
    i++;
  }
  return false;
}

/*
console.log(my_string_is_number("salut"));
console.log(my_string_is_number("salut3"));
console.log(my_string_is_number());
console.log(my_string_is_number(undefined));
console.log(my_string_is_number(null));
*/