const items = document.querySelectorAll(".itemList .item")

const mydiv = document.querySelector('div > .item')

const mylist = document.querySelector('.itemList')

const myBtn = document.querySelector('.addBtn')

const myInput = document.querySelector('.input')

const deleteBtns = document.querySelectorAll('.deleteBtn')

deleteBtns.forEach(deleteBtn => {
  deleteBtn.onclick = () => {
    const parent = deleteBtn.parentElement
    parent.remove()
  }
})

items.forEach(item => {
  item.onclick = () => {
    item.classList.toggle("completedItem")
  }
})

/* const newText = document.createTextNode('item 4')
newItem.appendChild(newText) */

const addListitem = (itemText) => {
  // create list item
  const newItem = document.createElement('li')
  newItem.className = 'item'
  // create text of the list item
  const newText = document.createTextNode(`${itemText} `)
  newItem.appendChild(newText)
  // create the delete button
  const newDeleteBetn = document.createElement('button')
  newDeleteBetn.innerText = 'delete'
  newItem.appendChild(newDeleteBetn)
  // add the list item to our list
  mylist.appendChild(newItem)
  // add the click listener to the delete button
  newDeleteBetn.onclick = () => {
    const parent = newDeleteBetn.parentElement
    parent.remove()
  }
}

myBtn.onclick = () => {
  if (myInput.value === '') return 
  addListitem(myInput.value)
  myInput.value = ''
}

console.log(myInput.value)