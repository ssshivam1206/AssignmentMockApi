function counter(initialValue) {
  let count = initialValue;

  function getCurrentValue() {
    return count;
  }

  function increment() {
    count++;
  }

  return [getCurrentValue, increment];
}

const [getCount1, incrementCount1] = counter(10); 
const [getCount2, incrementCount2] = counter();   

console.log(getCount1()); 
console.log(getCount2()); 

incrementCount1();
incrementCount1();
incrementCount2();

console.log(getCount1()); 
console.log(getCount2());
