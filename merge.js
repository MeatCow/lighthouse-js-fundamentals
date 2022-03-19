function merge(arr1, arr2) {
  arr2.forEach(element => {
    arr1.push(element);
  });
  arr1.sort();
  return arr1;
}