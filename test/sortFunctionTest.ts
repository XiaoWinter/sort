// import heapSort from "../src/heapSort";
import generateArr from "../utils/generateArr";

function testSort(func: Function): void {
  const arr = generateArr(15);

  console.log("arr", arr);
  func(arr);
  console.log(`${func.name}`, arr);
  if (!ascSortTest(arr)) {
    console.error("not pass");
  }
}

function ascSortTest(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

export default testSort;
