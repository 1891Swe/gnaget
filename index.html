document.addEventListener('DOMContentLoaded', function() {
    // Change cart buttons to order buttons
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
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
            
            // Create email with order details
            const subject = `Ny beställning: ${productName}`;
            const body = `
                Produkt: ${productName}
                Pris: ${productPrice} SEK
                Storlek: ${size.toUpperCase()}
                Färg: ${color}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:simplifymenu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show notification
            showNotification(`Beställning för ${productName} skapas!`);
        });
    });
    
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
});
