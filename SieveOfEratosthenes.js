// return all prime numbers up to 'num' in an array. 
function sieveOfEratosthenes(num) {

  var primes = [];
  // seed array
  for(i = 0; i <= num; i++){
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  
  // loop through each element, find multiples of that element up to num. make them false.
  for(i = 2; i <= Math.sqrt(num); i++){
    // loop through up to the square root of num. and make every number that is a multiple of that number, false.
    for(j = 2; i * j <= num; j++){
      mult = i * j;
      primes[mult] = false;
    }
  }
  results = [];
  // return all true
  for(i = 2; i < primes.length; i++){
    if(primes[i]){
      results.push(i);
    }
  }
  return results;
}

sieveOfEratosthenes(1000000);



