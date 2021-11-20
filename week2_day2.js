/* const log1 = (func) => {
    setTimeout(() => {
        console.log('this is function 1')
        func()
    }, 1000);
}

const log2 = () => {
    console.log('this is function 2')
}

log1(log2) */

/* const fruits = ['orange', 'banana', 'apple']

const firstLetters = fruits.map((currentElement) => {
    const firstLetter = currentElement[0]
    return firstLetter
})

console.log(firstLetters) */

/* const vaxedPeople = [
    {name: "john", age: 28, vaxed: true, quarantined: false},
    {name: "doe", age: 30, vaxed: false, quarantined: false},
    {name: "sam", age: 18, vaxed: false, quarantined: false},
    {name: "el", age: 81, vaxed: true, quarantined: false},
    {name: "done", age: 99, vaxed: true, quarantined: false},
]

const newVaxedPeople = vaxedPeople.map((currentPerson) => {
    const copyCurrentPerson = {...currentPerson}
    if (copyCurrentPerson.vaxed === false) {
        copyCurrentPerson.quarantined = true
        copyCurrentPerson.days = 15
        copyCurrentPerson.dead = false
    }
    return copyCurrentPerson
})

console.log(vaxedPeople) */

/* const cities = [
  { name: "Mirazur", owner: "Gustavo" },
  { name: "Noma", owner: "Jorge" },
  { name: "Gaggan", owner: "Alvaro" },
  { name: "Geranium", owner: "Gustavo" },
  { name: "Arpège", owner: "Luis" },
];

const findRestaurants = (arr) => {
  return arr.map((currentElement) => {
    return currentElement.name;
  });
};

const restaurants = findRestaurants(cities);

console.log(restaurants); */
//[ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']

/* const numbers = [1, 2, 3, 4, 5, 6]

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
})

console.log(sum) */

/* const fruits = ['orange', 'banana', 'apple']

const result = fruits.reduce((acc, current) => {
    console.log('acc', acc, 'current', current[0])
    return `${acc} ${current[0]}`
}, 'kiwi')

console.log(result) */

/* const scores = [50, 43, 99, 100, 30]

const result = scores.reduce((acc, current) => {
    return acc + current/scores.length
}, 0)

console.log(result) */

/* const numbers = [1, 100, 23, 53, 50, 43, 99, 81, 30]

const result = numbers.filter((current) => {
    return current < 50 && current > 20
})

console.log(result) */

/* const people = [
    {name: 'john', blood: 'A'},
    {name: 'doe', blood: 'B'},
    {name: 'sam', blood: 'AB'},
    {name: 'el', blood: 'O'},
    {name: 'nohj', blood: 'A'},
    {name: 'eod', blood: 'B'},
    {name: 'mas', blood: 'AB'},
    {name: 'le', blood: 'O'},
]

const result = people.filter((curr) => {
    return curr.blood === 'A' || curr.blood === 'B'
})

console.log(result) */

/* const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18]

numbers.sort((current, next) => {
    return next - current
})

console.log(numbers) */

/* const people = [
    {name: 'john', age: 28},
    {name: 'doe', age: 30},
    {name: 'sam', age: 90},
    {name: 'el', age: 31},
    {name: 'nohj', age: 81},
    {name: 'eod', age: 18},
    {name: 'mas', age: 65},
    {name: 'le', age: 45},
]

people.sort((current, next) => {
    return next.age - current.age
})

console.log(people) */

const object1 = {name: 'john'}

const copyString = JSON.stringify(object1)

const copy = JSON.parse(copyString)

console.log(copyString)
console.log(copy)

const copy = JSON.parse(JSON.stringify(object))