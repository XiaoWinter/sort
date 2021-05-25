import ArrayIndexOutOfBoundsError from "./ArrayIndexOutOfBoundsError";
/**
 * 堆排序条件
 * 1.完全二叉树
 * 2.父节点大于子节点
 *
 * 父子节点求取公式
 * i代表当前节点
 * parentNode floor((i-1)/2)
 * reference:https://www.bilibili.com/video/BV1Eb41147dK?from=search&seid=15869873504441001013
 *
 */

/**
 * heapify操作：使父节点大于子节点
 * @param tree 数组
 * @param n 树包括节点数
 * @param i 对哪个节点进行heapify操作
 */
function heapify(tree: number[], n: number, i: number): void {
  if (i >= n) return;
  //子节点的index
  const c1: number = 2 * i + 1;
  const c2: number = 2 * i + 2;
  //   最大值的index
  let max = i;

  if (c1 < n && tree[c1] > tree[max]) max = c1;

  if (c2 < n && tree[c2] > tree[max]) max = c2;

  if (max !== i) {
    swap(tree, i, max);
    heapify(tree, n, max);
  }
}
/**
 * 构建一个堆
 * @param tree
 * @param n 节点数
 */
function buildHeap(tree: number[], n: number): void {
  const lastNode = n - 1;
  const parentNode = Math.floor((lastNode - 1) / 2);

  for (let i = parentNode; i > -1; i--) {
    heapify(tree, n, i);
  }
}

function heapSort(tree: number[]) {
  // 节点数
  const n = tree.length;
  // 构建堆
  buildHeap(tree, n);

  for (let i = n - 1; i > -1; i--) {
    swap(tree, i, 0);
    heapify(tree, i, 0);
  }
}

/**
 * 交换数组两个元素的位置
 * @param tree
 * @param i
 * @param j
 */
function swap(tree: number[], i: number, j: number): void {
  const max = tree.length - 1;
  if (i > max || j > max) {
    throw new ArrayIndexOutOfBoundsError();
  }
  const temp = tree[i];
  tree[i] = tree[j];
  tree[j] = temp;
}

export default heapSort;
