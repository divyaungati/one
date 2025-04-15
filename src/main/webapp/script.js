document.addEventListener('DOMContentLoaded', function() {
    // Products data
    const products = {
        mobiles: [
            {
                id: 'm1',
                name: 'iPhone 14 Pro',
                description: '6.1-inch Super Retina XDR display, A16 Bionic chip',
                price: 129999,
                image: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm2',
                name: 'Samsung Galaxy S23 Ultra',
                description: '6.8-inch Dynamic AMOLED, Snapdragon 8 Gen 2',
                price: 124999,
                image: 'https://images.unsplash.com/photo-1676046187534-1a7e82f100a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm3',
                name: 'OnePlus 11 5G',
                description: '6.7-inch Fluid AMOLED, Snapdragon 8 Gen 2',
                price: 56999,
                image: 'https://images.unsplash.com/photo-1678286770019-0a8b8c8f9f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm4',
                name: 'Google Pixel 7 Pro',
                description: '6.7-inch LTPO OLED, Google Tensor G2',
                price: 84999,
                image: 'https://images.unsplash.com/photo-1664474614089-269c0a809c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm5',
                name: 'Xiaomi 13 Pro',
                description: '6.73-inch AMOLED, Snapdragon 8 Gen 2',
                price: 79999,
                image: 'https://images.unsplash.com/photo-1675869884075-8473b3f4a126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm6',
                name: 'Vivo X90 Pro',
                description: '6.78-inch AMOLED, MediaTek Dimensity 9200',
                price: 84990,
                image: 'https://images.unsplash.com/photo-1675869884075-8473b3f4a126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm7',
                name: 'Oppo Find X5 Pro',
                description: '6.7-inch LTPO AMOLED, Snapdragon 8 Gen 1',
                price: 79990,
                image: 'https://images.unsplash.com/photo-1646753522408-077ef98393af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm8',
                name: 'Nothing Phone (1)',
                description: '6.55-inch OLED, Snapdragon 778G+',
                price: 32999,
                image: 'https://images.unsplash.com/photo-1658326285858-32f6ea0a3e7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm9',
                name: 'Realme GT Neo 3',
                description: '6.7-inch AMOLED, MediaTek Dimensity 8100',
                price: 34999,
                image: 'https://images.unsplash.com/photo-1644302293433-5a8b4a8b0b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'm10',
                name: 'Motorola Edge 30 Ultra',
                description: '6.67-inch OLED, Snapdragon 8+ Gen 1',
                price: 59999,
                image: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            }
        ],
        laptops: [
            {
                id: 'l1',
                name: 'MacBook Pro 14-inch',
                description: 'M2 Pro chip, 16GB RAM, 512GB SSD',
                price: 194900,
                image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l2',
                name: 'Dell XPS 15',
                description: 'Intel Core i7, 16GB RAM, 512GB SSD',
                price: 149990,
                image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l3',
                name: 'HP Spectre x360',
                description: 'Intel Core i7, 16GB RAM, 1TB SSD',
                price: 139990,
                image: 'https://images.unsplash.com/photo-1587202372775-e229f1723e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l4',
                name: 'Lenovo ThinkPad X1 Carbon',
                description: 'Intel Core i5, 16GB RAM, 512GB SSD',
                price: 124990,
                image: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l5',
                name: 'Asus ROG Zephyrus G14',
                description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD',
                price: 129990,
                image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l6',
                name: 'Acer Swift 5',
                description: 'Intel Core i7, 16GB RAM, 1TB SSD',
                price: 99990,
                image: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l7',
                name: 'Microsoft Surface Laptop 5',
                description: 'Intel Core i5, 8GB RAM, 512GB SSD',
                price: 109990,
                image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l8',
                name: 'LG Gram 16',
                description: 'Intel Core i7, 16GB RAM, 1TB SSD',
                price: 119990,
                image: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l9',
                name: 'Razer Blade 15',
                description: 'Intel Core i7, 16GB RAM, 1TB SSD',
                price: 199990,
                image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'l10',
                name: 'MSI Creator Z16',
                description: 'Intel Core i7, 32GB RAM, 1TB SSD',
                price: 219990,
                image: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            }
        ],
        clothes: [
            {
                id: 'c1',
                name: 'Men\'s Formal Shirt',
                description: 'Premium cotton formal shirt',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c2',
                name: 'Women\'s Silk Saree',
                description: 'Handwoven Banarasi silk saree',
                price: 4999,
                image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c3',
                name: 'Men\'s Jeans',
                description: 'Slim fit stretchable jeans',
                price: 1999,
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c4',
                name: 'Women\'s Kurti',
                description: 'Cotton printed kurti with embroidery',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c5',
                name: 'Men\'s T-Shirt',
                description: 'Premium quality cotton t-shirt',
                price: 799,
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c6',
                name: 'Women\'s Dress',
                description: 'Floral print summer dress',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb595d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c7',
                name: 'Men\'s Blazer',
                description: 'Slim fit formal blazer',
                price: 3999,
                image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c8',
                name: 'Women\'s Lehenga',
                description: 'Bridal lehenga with heavy work',
                price: 8999,
                image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c9',
                name: 'Men\'s Kurta',
                description: 'Cotton printed kurta with pajama',
                price: 1799,
                image: 'https://images.unsplash.com/photo-1595341595379-cf0f0f02b6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                id: 'c10',
                name: 'Women\'s Top',
                description: 'Casual wear crop top',
                price: 899,
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            }
        ]
    };

    // Cart data
    let cart = [];

    // Display products
    function displayProducts() {
        // Mobiles
        const mobileGrid = document.getElementById('mobile-grid');
        products.mobiles.forEach(product => {
            mobileGrid.appendChild(createProductCard(product));
        });

        // Laptops
        const laptopGrid = document.getElementById('laptop-grid');
        products.laptops.forEach(product => {
            laptopGrid.appendChild(createProductCard(product));
        });

        // Clothes
        const clothesGrid = document.getElementById('clothes-grid');
        products.clothes.forEach(product => {
            clothesGrid.appendChild(createProductCard(product));
        });
    }

    // Create product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        return card;
    }

    // Initialize modal
    const modal = document.getElementById('cart-modal');
    const cartBtn = document.querySelector('a[href="#cart"]');
    const closeBtn = document.querySelector('.close');

    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        updateCartDisplay();
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }

        if (e.target.classList.contains('remove-item')) {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        }
    });

    // Add product to cart
    function addToCart(productId) {
        // Find product in all categories
        let product = null;
        for (const category in products) {
            product = products[category].find(p => p.id === productId);
            if (product) break;
        }

        if (!product) return;

        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCartCount();
        showAddToCartNotification(product.name);
    }

    // Remove product from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartDisplay();
    }

    // Update cart count display
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }

    // Update cart display in modal
    function updateCartDisplay() {
        const cartItems = document.getElementById('cart-items');
        const totalAmount = document.getElementById('total-amount');

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            totalAmount.textContent = '0';
            return;
        }

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toLocaleString('en-IN')} x ${item.quantity}</p>
                </div>
                <p class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</p>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            cartItems.appendChild(cartItem);
        });

        totalAmount.textContent = total.toLocaleString('en-IN');
    }

    // Show notification when item added to cart
    function showAddToCartNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = `${productName} added to cart`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your purchase! Your order has been placed.');
        cart = [];
        updateCartCount();
        updateCartDisplay();
        modal.style.display = 'none';
    });

    // Initialize the page
    displayProducts();

    // Add notification styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #6a0dad;
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }
        .notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
