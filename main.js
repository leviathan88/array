let arr = [8, 6, 9, 5, 10, 7]

for (let i = 0; i < arr.length; i++) {
  let num = arr[i]  // arrayin elementləri

  // task 1 -----------------------------------------------------
  if (num % 2 != 0) {
    console.log(`tək ədəd : ${num}`);
    console.log(`1 vahid artırıldı : ${++num}`);
  } else {
    console.log(`cüt ədəd : ${num}`);
  }

  // task 2 ----------------------------------------------------------------------------
  if (num % 2 == 0) {
    console.log(`birinci element : ${arr[0]}`);
    console.log(`cüt ədəd : ${num}`);
    console.log(`cüt ədəd * birinci element : ${num * arr[0]}`);
  } else {
    let lastIndex = arr.length - 1
    let lastElement = arr[lastIndex]
    console.log(`sonuncu element : ${lastElement}`);
    console.log(`tək ədəd : ${num}`);
    console.log(`tək ədəd * sonuncu element : ${num * lastElement}`);
  }
}

// task 3 -------------------------------------------------
let min = Math.min(...arr)
let max = Math.max(...arr)
let result = min * max
console.log(`ən kiçik element : ${min}`);
console.log(`ən böyük element : ${max}`);
console.log(`kiçik * böyük : ${result}`);
