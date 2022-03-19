function concat(arr1, arr2) {
  arr2.forEach(element => {
    arr1.push(element);
  });
  return arr1;
}