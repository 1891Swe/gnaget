document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    const cartItems = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const cartCount = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productPrice = parseInt(this.getAttribute('data-price'));
            const productName = this.closest('.product-info').querySelector('h3').textContent;
            
            // Get selected options
            let size, color;
            
            if (productId === 'tshirt') {
                size = document.getElementById('tshirt-size').value;
                color = document.getElementById('tshirt-color').value;
            } else if (productId === 'hoodie') {
                size = document.getElementById('hoodie-size').value;
                color = document.getElementById('hoodie-color').value;
            }
            
            // Add item to cart
            const item = {
                id: productId,
                name: productName,
                price: productPrice,
                size: size,
                color: color
            };
            
            cartItems.push(item);
            updateCart();
            
            // Show notification
            showNotification(`${productName} added to cart!`);
        });
    });
    
    // Open cart modal
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'block';
        updateCartDisplay();
    });
    
    // Close cart modal
    closeBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Close modal if clicked outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        alert('Thank you for your purchase! Your items will be available for pickup at the next home game.');
        cartItems.length = 0; // Clear cart
        updateCart();
        cartModal.style.display = 'none';
    });
    
    // Update cart count and total
    function updateCart() {
        cartCount.textContent = cartItems.length;
        updateCartDisplay();
    }
    
    // Update cart display
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            
            cartItemElement.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size.toUpperCase()}, Color: ${item.color}</p>
                </div>
                <div>
                    <p>${item.price} SEK <img src="https://flagcdn.com/w20/se.png" alt="Swedish flag" class="currency-flag"></p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
            total += item.price;
        });
        
        totalAmount.textContent = total;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cartItems.splice(index, 1);
                updateCart();
            });
        });
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
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
    
    // No contact form processing needed
});
