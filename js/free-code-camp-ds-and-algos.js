function convertCtoF(celsius) {
    let fahrenheit= celsius*9/5+32;
    return fahrenheit;
  }
  
  console.log(convertCtoF(30));

  //

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); 
  //


  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  
  factorialize(5);

  //
  function findLongestWordLength(s) {
    return s
      .split(' ')
      .reduce((longest, word) => Math.max(longest, word.length), 0);
  }
  /////

  function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }
  
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]);
  ////



  function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");
////////////////


function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }
  
  repeatStringNumTimes('abc', 3);


  /////

  function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  truncateString('A-tisket a-tasket A green and yellow basket', 8);


  /////


  function findElement(arr, func) {
    return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  //////


  function booWho(bool) {
    return typeof bool === "boolean";
  }
  booWho(null);



  /////


  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  titleCase("I'm a little tea pot");


  ///////


  function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  ///////


  function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  /////

  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  }
  getIndexToIns([40, 60], 50);


  /////////////


  function mutation(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
  }
  
  mutation(['hello', 'hey']);

  ////////


  function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
  }
  chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

  

