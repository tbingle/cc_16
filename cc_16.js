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
        })
        .catch(error => {
            //Log any errors that occur 
            console.error('There was an error fetching the products:', error);
        });
}
window.onload = fetchProductsThen;

async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        //Call function to display products
        displayProducts(products);
    } catch (error) {
        //Pass errors to handleError
        handleError(error);
    }
}
//Helper function to display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; //Clear the container before rendering new products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productCard);
    });
}
//Function to handle errors
function handleError(error) {
    console.error('Error fetching products:', error);
}
//Call fetchProductsAsync when the page loads
window.onload = fetchProductsAsync;