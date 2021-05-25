interface errorInfo {
  length?: number;
  index?: number;
}

export default class ArrayIndexOutOfBoundsError extends Error {
  constructor(errorInfo?: errorInfo) {
    let msg = `array out of bounds`;
    if (errorInfo) {
      const { length, index } = errorInfo;
      msg = `array out of bounds , the length of array is ${length},the access index is ${index}`;
    }
    super(msg);
  }
}
