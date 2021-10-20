export const my_display_comb = () => {
 var result = [];
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      result[i * 100 + j] = i + " " + j;
    }
  }
  return result;
}

/*
console.log(my_display_comb());
*/