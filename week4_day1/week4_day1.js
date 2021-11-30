const itemList = document.querySelectorAll(".itemList .item")

const mydiv = document.querySelector('div > .item')

const mylist = document.querySelector('.itemList')

const myBtn = document.querySelector('.addBtn')

const myInput = document.querySelector('.input')

/* const newText = document.createTextNode('item 4')
newItem.appendChild(newText) */

const addListitem = (itemText) => {
  const newItem = document.createElement('li')
  newItem.className = 'item'
  newItem.innerHTML = itemText
  mylist.appendChild(newItem)
}

myBtn.onclick = () => {
  if (myInput.value === '') return 
  addListitem(myInput.value)
  myInput.value = ''
}

console.log(myInput.value)