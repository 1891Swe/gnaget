document.addEventListener('DOMContentLoaded', function() {
    // Get all order buttons
    const orderButtons = document.querySelectorAll('.order-btn');
    
    // Add click event to each order button
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product details
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
            
            // Prepare email content
            const subject = encodeURIComponent(`Ny beställning: ${productName}`);
            const body = encodeURIComponent(
                `Produkt: ${productName}\nPris: ${productPrice} SEK\nStorlek: ${size.toUpperCase()}\nFärg: ${color}`
            );
            
            // Create mailto link
            const mailtoLink = `mailto:simplifymenu@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show notification
            showNotification(`Beställning för ${productName} skapas!`);
        });
    });
    
    // Show notification function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            
            // Remove from DOM after animation completes
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
});
