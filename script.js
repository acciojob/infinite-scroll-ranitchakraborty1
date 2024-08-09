//your code here!

let itemCount = 0;

function addItems() {
  const list = document.getElementById('infi-list');
  
  for(let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'Item ' + itemCount++;
    list.appendChild(listItem);
  }
}

// Call addItems initially to add the first 10 items.
for(let i = 0; i < 5; i++) {
  addItems();
}

window.addEventListener('scroll', function() {
  const list = document.getElementById('infi-list');
  
  // If user has scrolled to the bottom
  if (list.scrollHeight - list.scrollTop === list.clientHeight) {
    // Call function to add more items
    addItems();
  }
});