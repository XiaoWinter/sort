function qucikSort(arr: number[], left?: number, right?: number): void {
  if (left === undefined) left = 0;
  if (right === undefined) right = arr.length - 1;
  if (left >= right) return;

  const mid = getMid(arr, left, right);
  qucikSort(arr, left, mid - 1);
  qucikSort(arr, mid + 1, right);
}

function getMid(arr: number[], left: number, right: number): number {
  const pivot = arr[left];
  while (left < right) {
    while (arr[right] >= pivot && left < right) right--;
    arr[left] = arr[right];
    while (arr[left] <= pivot && left < right) left++;
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
}
export default qucikSort;
