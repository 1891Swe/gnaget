/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #cccccc;
    background-color: #000000;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: #cccccc;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

.btn {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #555;
}

/* Header */
header {
    background-color: #222222;
    box-shadow: 0 2px 5px rgba(255,255,255,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

header h1 {
    font-size: 1.8rem;
    font-weight: 600;
}

nav ul {
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    font-weight: 500;
    padding: 5px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #777;
}

#cart-icon {
    position: relative;
}

#cart-count {
    background-color: #333;
    color: #fff;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    margin-left: 5px;
}

/* Hero section */
.hero {
    background-color: #eee;
    padding: 100px 0;
    text-align: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/api/placeholder/1200/600');
    background-size: cover;
    background-position: center;
    color: #fff;
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.hero .btn {
    font-size: 1.1rem;
    padding: 12px 30px;
}

/* Products section */
.products {
    padding: 80px 0;
    background-color: #fff;
}

.products h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.product-card {
    border-radius: 8px;
    overflow: hidden;
    background-color: #333333;
    box-shadow: 0 3px 10px rgba(255,255,255,0.1);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image {
    height: 300px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    margin-bottom: 10px;
    font-size: 1.3rem;
}

.product-info p {
    color: #aaaaaa;
    margin-bottom: 15px;
}

.price {
    font-weight: 600;
    font-size: 1.2rem;
    color: #ffffff !important;
}

.product-options {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.size-selector, .color-selector {
    display: flex;
    flex-direction: column;
}

select {
    padding: 8px;
    border: 1px solid #555555;
    background-color: #444444;
    color: #cccccc;
    border-radius: 4px;
    margin-top: 5px;
}

/* About section */
.about {
    padding: 80px 0;
    background-color: #111111;
}

.about h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
}

.about p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 20px;
    font-size: 1.1rem;
}

/* Contact section */
.contact {
    padding: 80px 0;
    background-color: #222222;
}

.contact h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
}

.contact form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #555555;
    border-radius: 4px;
    background-color: #444444;
    color: #cccccc;
    font-family: inherit;
    font-size: 16px;
}

.contact button {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: #333333;
    margin: 10% auto;
    padding: 30px;
    border-radius: 8px;
    width: 70%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(255,255,255,0.2);
    position: relative;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

#cart-items {
    margin: 20px 0;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #555555;
}

#cart-total {
    margin: 20px 0;
    text-align: right;
    font-weight: 600;
    font-size: 1.2rem;
}

#checkout-btn {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    margin-top: 20px;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links {
    display: flex;
}

.social-link {
    color: #fff;
    margin-left: 20px;
    transition: opacity 0.3s ease;
}

.social-link:hover {
    opacity: 0.8;
}

/* Responsive design */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    
    nav ul {
        margin-top: 20px;
    }
    
    .hero {
        padding: 60px 0;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .product-grid {
        grid-template-columns: 1fr;
    }
    
    footer .container {
        flex-direction: column;
        text-align: center;
    }
    
    .social-links {
        margin-top: 20px;
        justify-content: center;
    }
    
    .social-link {
        margin: 0 10px;
    }
    
    .modal-content {
        width: 90%;
        margin: 20% auto;
    }
}
