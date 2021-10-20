export const my_alpha_reverse = (str) => {
  var result = "";
  var i = 0;
  while (str[i] != undefined) {
    result = str[i] + result;
  }
  return result;
}