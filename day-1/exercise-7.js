export const my_is_posi_neg = (nbr) => {
  var result;
  if (nbr > 0 || nbr == null || nbr == undefined) {
    result = "POSITIF";
  }
  else if (nbr < 0) {
    result = "NEGATIF";
  }
  else {
    result = "NEUTRAL";
  }
  return result;
}

/*
console.log(my_is_posi_neg(undefined));
*/