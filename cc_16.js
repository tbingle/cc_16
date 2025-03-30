function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //Log product name to the console
            data.forEach(product => {
                console.log(product.name);
            });
displayProducts(data);
        })
        .catch(error => {
            //Log any errors that occur 
            console.error('There was an error fetching the products:', error);
        });
}

//Helper function to display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; //Clear the container before rendering new products
    //Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
        //Create a product card element
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //Add the product's details (name, price, image)
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
        `;
        //Append the product card to the container
        productContainer.appendChild(productCard);
    });
}
    
//Function to handle errors
function handleError(error) {
    console.error('Error fetching products:', error);
}
window.onload = fetchProductsThen;

function handleError(error) {
    console.error('An error occurred: ', error.message);
}
