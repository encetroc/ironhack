/* say hello name
split array in half
factorial 
split and loop
*/

/* 
function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
} */

let fruits = ['orange', 'banana', 'avocado', 'kiwi', 'mango', 'grapes']

/* for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
} */

/* for (let f of fruits) {
    console.log(f)
} */

/* function addTwo(num) {
    const res = num + 2
    console.log(res)
    return res
}

let nums = [2, 4, 7, 10]

nums.forEach(addTwo) */

/* function add(a, b) {
    const result = a + b
    return result
}

const substract = (a, b) => {
    const result = a - b
    return result
}

const c = substract(1, 2)

console.log(c) */

/* const  numbers = [22, 1, 0, 45, 1000, 12]
const  numbers2 = [22, 1, 0, 45, 1000, 12, 22, 1, 0, 45, 1000, 12]

const sort = (array) => {
    const resultArray = [...array]
    for (let j=0; j<resultArray.length; j++) {
        for (let i=0; i<resultArray.length; i++) {
            if (resultArray[i] < resultArray[i+1]) {
                let arrayCopy = [...resultArray]
                resultArray[i] = arrayCopy[i+1]
                resultArray[i+1] = arrayCopy[i]
            }
        }
    }
    return resultArray
}

console.log('data in', numbers)
console.log('data out', sort(numbers)) */

/* const name1 = 'john'
name1.toUpperCase()

const capitalAndSpaceSeparated = (name) => {
    let nameCopy = name
    let resultName = ''
    for (let i=0; i<nameCopy.length; i++) {
        let transformedLetter = `${nameCopy[i].toUpperCase()}`
        if (i === 0) {
            resultName = `${resultName}${transformedLetter}`
        } else {
            resultName = `${resultName} ${transformedLetter}`
        }
    }
    return resultName
}

console.log('data in', name1)
console.log('data out', capitalAndSpaceSeparated(name1)) */

/* const name1 = 'john'
const name2 = 'doe'

const whoGoesFirst = (driver, navigator) => {
    return 'hey'
}

console.log('data in', name1, name2)
console.log('data out', whoGoesFirst(name1, name2)) */

/* let person1 = {
    name: 'john',
    age: 28,
    jobs: ['dev', 'designer'],
    maried: false
}

let person3 = {
    name: 'jake',
    age: 40,
    jobs: ['dev', 'manager'],
    maried: false
}

let person2 = {
    name: 'doe',
    age: 30,
    jobs: ['dev'],
    maried: true,
    teammates: [person1]
}

person1.teammates = [person2]

console.log(person1.teammates[0].teammates) */

const booking = {
    id: '1234AZER',
    segements: [
        {origin: 'NCE', destination: 'PAR', date: '22/11/2021', time: '6PM'},
        {origin: 'PAR', destination: 'LON', date: '22/11/2021', time: '8PM'},
        {origin: 'LON', destination: 'NCE', date: '30/11/2021', time: '2PM'}
    ],
    pax: [
        {id: '01', name: 'john', age: 28},
        {id: '02', name: 'joe', age: 35}
    ],
    baggage: [],
    seats: [],
    meals: [],
    price: 500,
    currency: '€'
}

booking.seats.push({seatNumber: '1N', price: '50'})
booking.pax.pop()

booking = {}

console.log(booking)