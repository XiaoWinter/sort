import quickSort from "../src/quickSort";

function generateArr(size = 10): number[] {
  const arr = [];

  if (size < 1) {
    throw new Error("size is 10 at least");
  }

  const max = size * 10;

  for (let i = 0; i < size; i++) {
    arr[i] = (Math.random() * max) >> 0;
  }

  return arr;
}

function testSort(): void {
  const arr = generateArr(15);

  console.log("arr", arr);
  quickSort(arr);
  console.log("softArr", arr);
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
