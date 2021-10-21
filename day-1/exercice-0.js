export const my_sum = (a, b) => {
  if (a === null || b === null || a === undefined || b === undefined || typeof a != "number" || typeof b != "number") {
    return 0;
  }
  return a + b;
}
/*
console.log(my_sum(1, 2));
console.log(my_sum(1));
console.log(my_sum(1, null));
*/