export const my_display_alpha = () => {
  var result = "";
  for (var i = 97; i <= 122; i++) {
    result += String.fromCharCode(i);
  }
  console.log(result);
  return result;
}

/*
console.log(my_display_alpha());
*/