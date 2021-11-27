/* let a = 1

if (true) {
  let a = 2
}

console.log(a) */

// range error
/* const arr = new Array(-3)

console.log(arr) */

// ref error
/* let name = 'john'
console.log(nme) */

// syntax error
/* console.log('this is a console log')

if (true) */

// type error
/* const myNumber = 1

myNumber.push(3) */

// uri error
//decodeURI('http:/google.com%')

/* const a = 3

let b
setTimeout(() => {
  b = 5
}, 1000);

let c
setTimeout(() => {
  c = a + b
}, 1001);

console.log('a', a)
console.log('b', b)
console.log('c', c) */

/* let count = 0

const intervalId = setInterval(() => {
  count += 1
  console.log(count)
}, 1000);

const interval2Id = setInterval(() => {
  if (count > 10) {
    clearInterval(intervalId)
    clearInterval(interval2Id)
  }
}, 2000); */

function logSomething() {
  console.log('hello world')
}

/* const setTimeoutId = setTimeout(logSomething, 5000)

clearTimeout(setTimeoutId) */

let timeLeft = 30
const myInterval = setInterval(() => {
  timeLeft -= 5
  console.log(`you only have ${timeLeft} seconds left`)
  if (timeLeft === 0) clearTimeout(myInterval)
}, 1000);