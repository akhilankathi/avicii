const alternameNumbers = (arr) => {
  for (let i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
};
// IIFC
// (()=>{
//     let arr = [4,5,67,8,9,3,2,5,6]
//     for(let i= 0; i<arr.length ; i+=2){
//         console.log(arr[i])
//     }
//     })()

alternameNumbers([4, 5, 67, 8, 9, 3, 2, 5, 6]);
alternameNumbers([1, 2, 3, 4, 5, 67, 8, 90, 7]);
alternameNumbers([3, 4, 6, 3, 5, 7, 9, 54, 34, 9]);
