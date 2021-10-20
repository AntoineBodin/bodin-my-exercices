import { my_display_alpha } from "./exercise-1.js";

export const my_display_alpha_reverse = () => {
  var orderedAlphabet = my_display_alpha();
  var result = "";
  for (var i = 25; i >= 0; i--) {
    result += orderedAlphabet[i];
  }
  return result;
}

/*
console.log(my_display_alpha_reverse());
*/