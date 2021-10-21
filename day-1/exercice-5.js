import { my_size_alpha } from "./exercice-4.js";

export const my_array_alpha = (str) => {
  var result = [];
  for (var i = 0; i < my_size_alpha(str); i++) {
    result[i] = str[i];
  }
  return result;
}

/*
console.log(my_array_alpha("test"));
*/