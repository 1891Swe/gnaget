document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    let cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close');
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const cartCount = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Product details
    const products = {
        tshirt: {
            name: "Premium T-Shirt",
            price: 399,
            image: "/api/placeholder/100/100"
        },
        hoodie: {
            name: "Classic Hoodie",
            price: 599,
            image: "/api/placeholder/100/100"
        }
    };
    
    // Open cart modal
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'block';
        renderCart();
    });
    
    // Close cart modal
    closeButton.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Add items to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productInfo = products[productId];
            
            // Get selected options
            let size, color;
            
            if (productId === 'tshirt') {
                size = document.getElementById('tshirt-size').value;
                color = document.getElementById('tshirt-color').value;
            } else {
                size = document.getElementById('hoodie-size').value;
                color = document.getElementById('hoodie-color').value;
            }
            
            // Create cart item object
            const item = {
                id: productId,
                name: productInfo.name,
                price: productInfo.price,
                size: size,
                color: color,
                quantity: 1
            };
            
            // Check if item already exists in cart (same product, size, and color)
            const existingItemIndex = cart.findIndex(cartItem => 
                cartItem.id === item.id && 
                cartItem.size === item.size && 
                cartItem.color === item.color
            );
            
            if (existingItemIndex !== -1) {
                // Increment quantity if item already exists
                cart[existingItemIndex].quantity += 1;
            } else {
                // Add new item to cart
                cart.push(item);
            }
            
            // Update cart count
            updateCartCount();
            
            // Show confirmation message
            showNotification(`Added ${item.name} to cart!`);
        });
    });
    
    // Render cart items
    function renderCart() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
            totalAmount.textContent = '0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>Size: ${getSizeLabel(item.size)} | Color: ${item.color}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div>
                    <p>$${itemTotal.toFixed(2)}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            
            cartItems.appendChild(cartItemElement);
        });
        
        // Update total amount
        totalAmount.textContent = total.toFixed(2);
        
        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartCount();
                renderCart();
            });
        });
    }
    
    // Update cart count
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#333';
        notification.style.color = '#fff';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '4px';
        notification.style.zIndex = '2000';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'opacity 0.3s, transform 0.3s';
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Get readable size labels
    function getSizeLabel(sizeCode) {
        const sizes = {
            's': 'Small',
            'm': 'Medium',
            'l': 'Large',
            'xl': 'X-Large'
        };
        
        return sizes[sizeCode] || sizeCode;
    }
    
    // Handle checkout
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        alert('Thank you for your order! This is a demo site, so no actual purchase will be processed.');
        cart = [];
        updateCartCount();
        cartModal.style.display = 'none';
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real site, you would send this data to a server
        console.log('Form submission:', { name, email, message });
        
        // Show success message
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#cart') {
                return; // Let the cart icon handler deal with this
            }
            
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
