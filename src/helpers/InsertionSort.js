function InsertionSort(array, field) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j = i - 1;

    for (
      j = i - 1;
      j >= 0 && array[j][field] < currentVal[field];
      j--
    ) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

export default InsertionSort;
