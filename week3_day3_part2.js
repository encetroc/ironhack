console.log(document)
const div1 = document.getElementById('myDiv')
div1.innerHTML = '0'
div1.style.backgroundColor = 'red'
div1.style.width = '100px'
div1.style.height = '50px'
div1.style.color = 'white'

function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

const items = document.getElementsByClassName('item')
const itemsArray = Array.from(items)
console.log(itemsArray)
console.log(items)
itemsArray.forEach((item) => {
  item.innerHTML = 'john'
  item.style.backgroundColor = generateRandomColor()
});

const myButton = document.getElementById('myBtn')

let numberOfClicks = 0
myButton.addEventListener('click', () => {
  const randomColor = generateRandomColor()
  numberOfClicks += 1
  div1.innerHTML = `${numberOfClicks} ${randomColor}`
  div1.style.backgroundColor = randomColor
})