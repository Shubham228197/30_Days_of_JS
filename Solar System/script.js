
// Question: Make a Array with smallest element taken from products array and making its adjecent element deleted form the products 
// Answer: idea is to iterate within the array and then take the elements as we find the minimum then remoke the values as we proceed to next search
// key factor: modify the array as we procced and when 1 Element left push it inot the final result array
// const products = [5, 9, 2, 8, 3, 7, 1, 6, 4, 10];
// function getProduct(products) {
//   const array = [];
//   let min = 0;
// //   Array to iterate within the product array with 1 index element at a time
//   for (let i = 0; i <= products.length; i++) {
//     if (products.length != i) {
//       min = products[i];
//     //   taking minIndex to remember the place where we finnd the minimum element
//       let minIndex = 0;
//       if (products[i] != 0) {
//         for (let j = 0; j < products.length; j++) {
//           if (min >= products[j] && products[j] != 0) {
//             min = products[j];
//             minIndex = j;
//           }
//         }
//         // setting all index, index+1 & index-1 value to 0
//         products[minIndex] = 0;
//         array.push(min);
//         if (products[minIndex + 1] >= 0 && minIndex < products.length) {
//           products[minIndex + 1] = 0;
//         }
//         if (minIndex >= 0) {
//           products[minIndex - 1] = 0;
//         }
//       }
//     //   then filter on basis of non-zero value
//       products = products.filter((value) => value != 0);
//     }
//   }
//   array.push(products[0])
//   console.log("FINAL: ", array)
//   return min;
// }
// console.log("Result: ", getProduct(products));
const arr = [5,8,1,6,3, 10]
const demo = arr.sort();
console.log(demo)
console.log(arr.sort()[arr.length -2])