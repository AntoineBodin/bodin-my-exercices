export const my_display_combv2 = () => {
  var result = [];
  var cpt = 0;
  for (var i = 0; i <= 7; i++) {
    for (var j = i + 1; j <= 8; j++) {
      for (var k = j + 1; k <= 9; k++) {
        result[cpt] = i + " " + j + " " + k;
        cpt++;
      }
    }
  }
  return result;
}

console.log(my_display_combv2());