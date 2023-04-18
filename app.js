// Define the constructor function to create product objects
function Product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

// Define the array to store the product objects
const products = [];



// Define the function to render the products in the main section
function renderProducts() {
    // Get a reference to the main section element
    const main = document.querySelector('main');
    // Use the map() method to create a card element for each product object
    const cards = products.map(product => `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span>${product.price}</span>
      </div>
    `);
    // Add the cards to the main section
    main.innerHTML = cards.join('');
}


// Fetch data from API and create product objects
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        // Create a new product object for each item in the data
        data.forEach(item => {
            const product = new Product(item.title, item.price, item.description, item.image);

            // Push the new product object to the products array
            products.push(product);
            console.log(products);
        });
        // Render the products in the main section
        renderProducts();
    })
    .catch(error => console.error(error));

// // Fetch data from API and create product objects
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))