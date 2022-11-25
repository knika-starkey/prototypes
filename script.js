let an = [1, 2, 3];
let arr = [4, -5, 8];
// an.isPositive = function () {
//   for (i = 0; i < this.length; i++) {
//     if (this[i] < 0) return false;
//   }
//   return true;
// };
Array.prototype.isPositive = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] < 0) return false;
  }
  return true;
};

// Array.prototype.double = function (n) {
//     for (let i = 0; i < this.length; i++) {
//         this[i]*=n
//       }
// }
document.write(arr.isPositive() + " "); // true
an[1] = -2;
document.write(an.isPositive()); // false
