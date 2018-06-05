function fibonacci(pos){
  if (pos < 3) {
    return 1;
  } else {
    return fibonacci(pos - 1) + fibonacci(pos - 2)
  }
}

fibonacci(9);