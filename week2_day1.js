const user = {
  name: "ana",
  age: 29,
  getOlder: function () {
    setInterval(function () {
      console.log(this);
    }, 1000);
  },
};

//user.getOlder();

/* const ourString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, diam non scelerisque sodales, eros.'

const countNumberOf = (stringParent, stringChild) => {
    let count = 0
    for (let i =0; i<stringParent.length; i++) {
        if (stringParent[i] === stringChild) {
            count++
        }
    }
    return count
}

const count = countNumberOf(ourString, 'm')

console.log(count) */

// function declaration

/* console.log(add1(2, 2))

function add1(a, b) {
    return a + b
} */

// function expression

/* const add2 = function (a, b) {
    return a + b
}
 */
// hoisting

/* console.log(a)

var a = 1
let b = 2
const name = 'john' */

/* const log1 = (func) => {
    const f = () => {
        console.log('this is the fist function')
        func()
    }
    setTimeout(f, 1000)
}

const log2 = () => {
    console.log('this is the second function')
}

log1(log2) */

/* const getAge = function () {
    setTimeout(() => {
        console.log(this.age)
    }, 1000)
}

const person1 = {
    name: 'john',
    age: 28,
    getAge
}

const person2 = {
    name: 'john',
    age: 30,
    getAge
}

person1.getAge()
person2.getAge() */

/* function addMany() {
    console.log(arguments)
    const args = Array.from(arguments)
    let count = 0
    args.forEach(arg => count = count + arg)
    console.log(count)
    return count
}

addMany(1, 2, 3, 4, 5) */

/* const fruits = ['orange', 'banana', 'apple']

const kiwiAndFruits = fruits.map((fruit) => {
    const newFruit = `${fruit} kiwi`
    return newFruit
})

console.log('data in', fruits)
console.log('data out', kiwiAndFruits) */

/* const people = [
    {name: 'john', age: 28},
    {name: 'doe', age: 30},
    {name: 'Julien', age: 16}
]

const peopleGreetings  = people.map(person => {
    const greeting = `hey my name is ${person.name} and my age is ${person.age}`
    return greeting
})

const peopleGreetings = []

for (let i=0; i<people.length; i++) {
    const greeting = `hey my name is ${people[i].name} and my age is ${people[i].age}`
    peopleGreetings.push(greeting)
}

console.log('data in', people)
console.log('data out', peopleGreetings) */