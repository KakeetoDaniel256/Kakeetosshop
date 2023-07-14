/*
const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', function() {
    myDiv.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/
function searchById() {
    var input = document.getElementById('searchInput');
    var searchValue = input.value.trim();

    // Perform search logic based on the ID entered
    // You can modify this logic as per your requirements

    // Example logic: Assume each product div has a unique ID as a data attribute
    var productDivs = document.getElementsByClassName('product');
    for (var i = 0; i < productDivs.length; i++) {
        var productId = productDivs[i].getAttribute('data-id');
        if (productId === searchValue) {
            // Found a match, perform any desired action (e.g., highlighting, showing, etc.)
            productDivs[i].style.backgroundColor = 'yellow';
        } else {
            // Not a match, reset any previous changes (e.g., removing highlighting)
            productDivs[i].style.backgroundColor = '';
        }
    }

    // Clear the search input
    input.value = '';
}
