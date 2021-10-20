export const my_size_alpha = (str) => {
  if (typeof(str) != String) {
    return 0;
  }
  var i = 0;
  while (str[i] != undefined) {
    i++;
  }
  return i;
}

/*
console.log(my_size_alpha(8));
*/