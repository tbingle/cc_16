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