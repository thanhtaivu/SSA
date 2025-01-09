// Shop page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Product data
    // "styles/assets/merch/backpack1.png"
    const products = [
        {
            id: 1,
            name: 'SSA Backpack',
            price: 39.99,
            image: 'styles/assets/merch/backpack1.png',
        },
        {
            id: 2,
            name: 'SSA Cross-body Bag',
            price: 29.99,
            image: 'styles/assets/merch/backpack2.png',
        },
        {
            id: 3,
            name: 'SSA Tote Bag',
            price: 24.99,
            image: 'styles/assets/merch/bag1.png',
        },
        {
            id: 4,
            name: 'SSA Water Bottle',
            price: 19.99,
            image: 'styles/assets/merch/bottle1.png',
        },
        {
            id: 5,
            name: 'SSA Tumbler',
            price: 24.99,
            image: 'styles/assets/merch/bottle2.png',
        },
        {
            id: 6,
            name: 'SSA White Ceramic Tumbler',
            price: 24.99,
            image: 'styles/assets/merch/bottle3.png',
        },
        {
            id: 7,
            name: 'SSA Coffee Cup',
            price: 24.99,
            image: 'styles/assets/merch/cup.png',
        },
        {
            id: 8,
            name: 'SSA Cap',
            price: 19.99,
            image: 'styles/assets/merch/cap.png',
        },
        {
            id: 9,
            name: 'SSA Baseball Cap',
            price: 19.99,
            image: 'styles/assets/merch/cap2.png',
        },
        {
            id: 10,
            name: 'SSA Hoodie',
            price: 24.99,
            image: 'styles/assets/merch/hoodie.png',
        },
        {
            id: 11,
            name: 'SSA T-Shirt',
            price: 24.99,
            image: 'styles/assets/merch/t-shirt1.png',
        },
        {
            id: 12,
            name: 'SSA Pen',
            price: 24.99,
            image: 'styles/assets/merch/pen.png',
        },
        {
            id: 13,
            name: 'SSA Notebook',
            price: 24.99,
            image: 'styles/assets/merch/notebook.png',
        }
    ];

    let cart = [];

    // Initialize shop page
    function initShop() {
        const productsContainer = document.getElementById('products-container');
        
        // Create product cards
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });

        updateCartDisplay();
    }

    // Create product card element
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">€${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        `;

        // Add to cart functionality
        const addButton = card.querySelector('.add-to-cart');
        addButton.addEventListener('click', () => addToCart(product));

        return card;
    }

    // Add product to cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        updateCartDisplay();
    }

    // Update cart display
    function updateCartDisplay() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.name} x ${item.quantity}</p>
                <p>€${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item" data-product-id="${item.id}">Remove</button>
            `;
            
            cartItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `€${total.toFixed(2)}`;
    }

    // Initialize shop if on shop page
    if (document.querySelector('.shop-container')) {
        initShop();
    }
});