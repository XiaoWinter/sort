const quickSort = require("./quickSoft");

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

function testSoft(): void {
  const arr = generateArr(15);

  console.log("arr", arr);
  quickSort(arr);

  console.log("softArr", arr);
}

testSoft();
