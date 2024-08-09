//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');  // Assuming your list has an id of 'list'
    
    // Function to create a new list item
    function createListItem(index) {
        const li = document.createElement('li');
        li.textContent = `Item ${index}`;
        return li;
    }

    // Function to add items to the list
    function addItems(count = 10) {
        const currentItemCount = list.children.length;
        for (let i = 1; i <= count; i++) {
            list.appendChild(createListItem(currentItemCount + i));
        }
    }

    // Add initial items to the list
    addItems(10);

    // Observer to detect when the user reaches the end of the list
    const observer = new IntersectionObserver(entries => {
        const lastItem = entries[0];
        if (lastItem.isIntersecting) {
            addItems(2);  // Add 2 more items when reaching the end of the list
        }
    }, {
        rootMargin: '0px',
        threshold: 1.0
    });

    // Observe the last item in the list
    observer.observe(list.lastElementChild);
    
    // Function to update the observer to the new last item
    function updateObserver() {
        observer.unobserve(list.lastElementChild);
        observer.observe(list.lastElementChild);
    }

    // Observe the last item after new items are added
    list.addEventListener('DOMNodeInserted', updateObserver);
});


