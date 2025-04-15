<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sangeetha - Online Shopping</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>Sangeetha</h1>
            <p>Your Favorite Shopping Destination</p>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#mobiles">Mobiles</a></li>
                <li><a href="#laptops">Laptops</a></li>
                <li><a href="#clothes">Clothes</a></li>
                <li><a href="#cart"><i class="fas fa-shopping-cart"></i> Cart <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <div class="hero-content">
                <h2>Welcome to Sangeetha</h2>
                <p>Discover amazing products at unbeatable prices</p>
                <button class="shop-now">Shop Now</button>
            </div>
        </section>

        <section id="mobiles" class="product-section">
            <h2>Mobile Phones</h2>
            <div class="product-grid" id="mobile-grid">
                <!-- Products will be added by JavaScript -->
            </div>
        </section>

        <section id="laptops" class="product-section">
            <h2>Laptops</h2>
            <div class="product-grid" id="laptop-grid">
                <!-- Products will be added by JavaScript -->
            </div>
        </section>

        <section id="clothes" class="product-section">
            <h2>Clothing</h2>
            <div class="product-grid" id="clothes-grid">
                <!-- Products will be added by JavaScript -->
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Sangeetha</h3>
                <p>Your one-stop shop for all your electronic and fashion needs. We offer quality products at competitive prices.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#mobiles">Mobiles</a></li>
                    <li><a href="#laptops">Laptops</a></li>
                    <li><a href="#clothes">Clothes</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@sangeetha.com</p>
                <p>Phone: +91 9876543210</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Sangeetha. All Rights Reserved.</p>
        </div>
    </footer>

    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Your Shopping Cart</h2>
            <div id="cart-items">
                <!-- Cart items will be added here -->
            </div>
            <div id="cart-total">
                <p>Total: ₹<span id="total-amount">0</span></p>
                <button id="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
