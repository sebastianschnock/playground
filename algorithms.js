// find common characters - o(n^2)
function find_chars1(str1, str2) {
  var result = [];
  Array.prototype.forEach.call(str1, function(c) {
    if(str2.indexOf(c) !== -1) {
      result.push(c);
      str2 = str2.replace(c, '');
    }
  });
  return result;
}

// find common characters - o(n)
function find_chars2(str1, str2) {
  // use hashmap to count occurences of characters
  var chars = {}, result = [];
  // count character occurences in first string - o(n)
  Array.prototype.forEach.call(str2, function(c) {
    if(chars[c] === undefined) chars[c] = 1;
  });
  // check for same character occurences in second string - o(n)
  Array.prototype.forEach.call(str1, function(c) {
    if(chars[c] === 1) {
      result.push(c);
      chars[c]++;
    }
  });
  return result;
}

// remove duplicates from a sorted array - o(n)
function compact_sorted(arr) {
  var result = [], last;
  arr.forEach(function(elem) {
    if(elem !== last) {
      result.push(elem);
      last = elem;
    }
  });
  return result;
}

// rotate an array
function rotate(arr, n) {
  return arr.slice(-n).concat(arr.slice(0, -n));
}

// least common multiple
function lcm(a, b) {
  // a = array, b = undefined
  if(Array.isArray(a) && a.length > 1) {
    var result = a[0];
    for(var i=1; i<a.length; i++) {
      result = lcm(result, a[i]);
    }
    return result;
  }
  // a = number, b = number
  else {
    // use greatest common divisor
    return (b / gcd(a, b)) * a;  
  }
}

// greatest common divisor
function gcd(a, b) {
  // euclidian algorithm
  return b === 0 ? a : gcd(b, a % b);
}

console.log(find_chars1('test', 'sennt'));
console.log(compact_sorted([1,1,2,2,2,2,2,3,4,5,5,5,5,6,6,7]));
console.log(rotate([1,2,3,4,5,6], 2));
console.log(lcm([4, 6]));