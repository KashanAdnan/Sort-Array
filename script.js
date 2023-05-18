function getSortedData() {
  /// Defining Array
  let arr = [5, 1, 4, 32, 64, 128, 256, 512, 1024];
  // making for loop
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let a = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
      i = -1;
    }
  }

  document.getElementById("result").innerHTML = arr;
}
