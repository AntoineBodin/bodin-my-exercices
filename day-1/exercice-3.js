export const my_alpha_number = (nbr) => {
  var result = "";
  var sign = "";
  if (nbr == 0) {
    return "0";
  }
  if (nbr < 0) {
    sign = "-";
    nbr *= -1;
  }
  while (nbr > 0) {
    var digit = nbr % 10;
    nbr = Math.floor(nbr / 10);
    result = String.fromCharCode(48 + digit) + result;
  }
  return sign + result;
}

console.log(my_alpha_number(-0));