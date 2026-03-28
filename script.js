// Product Data
const productData = {
    mobiles: [
        { name: "iPhone 15 Pro Max", price: 159900, oldPrice: 169900, imgId: "20" },
        { name: "Samsung Galaxy S24 Ultra", price: 134999, oldPrice: 144999, imgId: "26" },
        { name: "Google Pixel 8 Pro", price: 106999, oldPrice: 119999, imgId: "15" },
        { name: "OnePlus 12", price: 64999, oldPrice: 69999, imgId: "42" },
        { name: "Xiaomi 14 Ultra", price: 89999, oldPrice: 99999, imgId: "55" },
        { name: "Nothing Phone (2)", price: 44999, oldPrice: 49999, imgId: "60" },
        { name: "Vivo X100 Pro", price: 89990, oldPrice: 94990, imgId: "65" },
        { name: "iQOO 12", price: 52999, oldPrice: 56999, imgId: "72" },
        { name: "Motorola Edge 50 Ultra", price: 59999, oldPrice: 64999, imgId: "88" },
        { name: "Asus ROG Phone 8", price: 79999, oldPrice: 84999, imgId: "96" }
    ],
    laptops: [
        { name: "MacBook Air M3", price: 114900, oldPrice: 124900, imgId: "100" },
        { name: "Dell XPS 15", price: 159999, oldPrice: 174999, imgId: "101" },
        { name: "HP Spectre x360", price: 139999, oldPrice: 149999, imgId: "102" },
        { name: "Lenovo Legion 5 Pro", price: 139990, oldPrice: 149990, imgId: "103" },
        { name: "ASUS ROG Zephyrus G14", price: 124990, oldPrice: 134990, imgId: "104" },
        { name: "Acer Predator Helios", price: 119999, oldPrice: 129999, imgId: "105" },
        { name: "MSI Stealth 14", price: 154999, oldPrice: 169999, imgId: "106" },
        { name: "Microsoft Surface Laptop 5", price: 108999, oldPrice: 118999, imgId: "107" },
        { name: "Apple MacBook Pro 14", price: 189900, oldPrice: 199900, imgId: "108" },
        { name: "Samsung Galaxy Book4 Ultra", price: 149990, oldPrice: 159990, imgId: "109" }
    ],
    clothes: [
        { name: "Men's Cotton Slim Fit Shirt", price: 1499, oldPrice: 2999, imgId: "110" },
        { name: "Women's Floral Maxi Dress", price: 2899, oldPrice: 4599, imgId: "111" },
        { name: "Classic Denim Jacket", price: 3599, oldPrice: 4999, imgId: "112" },
        { name: "Sportswear Joggers", price: 1799, oldPrice: 2799, imgId: "113" },
        { name: "Oversized Hoodie", price: 2199, oldPrice: 3499, imgId: "114" },
        { name: "Women's Crop Top", price: 899, oldPrice: 1599, imgId: "115" },
        { name: "Men's Formal Blazer", price: 5499, oldPrice: 7999, imgId: "116" },
        { name: "Summer Linen Shirt", price: 1899, oldPrice: 3299, imgId: "117" },
        { name: "Slim Fit Chinos", price: 2299, oldPrice: 3899, imgId: "118" },
        { name: "Women's Denim Shorts", price: 1299, oldPrice: 2299, imgId: "119" }
    ]
};

// Cart State
let cart = [];

// Helper Functions
function getImageUrl(product, category) {
    let baseId = product.imgId;
    if (category === 'mobiles') return `https://picsum.photos/id/${baseId}/240/200?grayscale&seed=${baseId}`;
    if (category === 'laptops') return `https://picsum.photos/id/${baseId}/240/200?seed=laptop${baseId}`;
    return `https://picsum.photos/id/${baseId}/240/200?random=${baseId}&fashion`;
}

function showToast(message) {
    const toast = document.getElementById('cartToast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
}

// Render Products
function renderProducts() {
    const mobilesGrid = document.getElementById('mobiles-grid');
    const laptopsGrid = document.getElementById('laptops-grid');
    const clothesGrid = document.getElementById('clothes-grid');
    
    function buildCard(product, category, idx) {
        const uniqueId = `${category}-${idx}`;
        const imgUrl = getImageUrl(product, category);
        const priceINR = product.price.toLocaleString('en-IN');
        const oldPriceHtml = product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>` : '';
        
        return `
            <div class="product-card" data-product-id="${uniqueId}" data-name="${product.name}" data-price="${product.price}" data-img="${imgUrl}" data-category="${category}">
                <div class="img-wrapper">
                    <img class="product-img" src="${imgUrl}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/240x200/EEE/333?text=${encodeURIComponent(product.name.slice(0,12))}'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="price">₹${priceINR} ${oldPriceHtml}</div>
                    <button class="btn-add" data-add="${uniqueId}"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        `;
    }
    
    mobilesGrid.innerHTML = productData.mobiles.map((p, idx) => buildCard(p, 'mobiles', idx)).join('');
    laptopsGrid.innerHTML = productData.laptops.map((p, idx) => buildCard(p, 'laptops', idx)).join('');
    clothesGrid.innerHTML = productData.clothes.map((p, idx) => buildCard(p, 'clothes', idx)).join('');
    
    // Attach event listeners to all add buttons
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.product-card');
            if (!card) return;
            const name = card.getAttribute('data-name');
            const price = parseInt(card.getAttribute('data-price'));
            const image = card.getAttribute('data-img');
            const category = card.getAttribute('data-category');
            addToCart({ id: Date.now() + Math.random(), name, price, image, category });
        });
    });
}

// Cart Functions
function addToCart(item) {
    cart.push(item);
    updateCartUI();
    showToast(`${item.name} added to cart`);
}

function removeFromCart(index) {
    const removed = cart[index];
    cart.splice(index, 1);
    updateCartUI();
    showToast(`${removed.name} removed`);
}

function updateCartUI() {
    const cartCountSpan = document.getElementById('cartCount');
    const cartList = document.getElementById('cartItemsList');
    const totalSpan = document.getElementById('cartTotalPrice');
    
    cartCountSpan.innerText = cart.length;
    let total = 0;
    
    if (cart.length === 0) {
        cartList.innerHTML = '<li style="text-align:center; color:#94a3b8;">Your cart is empty 🛍️</li>';
        totalSpan.innerText = '₹0';
        return;
    }
    
    let itemsHtml = '';
    cart.forEach((item, idx) => {
        total += item.price;
        itemsHtml += `
            <li class="cart-item">
                <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/50x50'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
                <div class="remove-item" data-removeidx="${idx}"><i class="fas fa-trash-alt"></i></div>
            </li>
        `;
    });
    
    cartList.innerHTML = itemsHtml;
    totalSpan.innerText = `₹${total.toLocaleString('en-IN')}`;
    
    // Attach remove event listeners
    document.querySelectorAll('.remove-item').forEach(el => {
        el.addEventListener('click', (e) => {
            const idxAttr = el.getAttribute('data-removeidx');
            if (idxAttr !== null) removeFromCart(parseInt(idxAttr));
        });
    });
}

// Cart Sidebar Controls
function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

// Section Navigation
function setActiveSection(section) {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = {
        mobiles: document.getElementById('mobiles-section'),
        laptops: document.getElementById('laptops-section'),
        clothes: document.getElementById('clothes-section')
    };
    
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[data-section="${section}"]`).classList.add('active');
    sections[section].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render products
    renderProducts();
    updateCartUI();
    
    // Cart icon click
    document.getElementById('cartIconBtn').addEventListener('click', openCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    document.getElementById('overlay').addEventListener('click', closeCart);
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Cart empty! Add items first.");
            return;
        }
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`✅ Order placed! Total ₹${total.toLocaleString('en-IN')}. Thanks for shopping at TechStyle Bazaar.`);
        cart = [];
        updateCartUI();
        closeCart();
        showToast("Order confirmed!");
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            if (section) setActiveSection(section);
        });
    });
    
    // Set active section on load
    setActiveSection('mobiles');
});
