const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

let order = [];

document.querySelectorAll('.add-to-order').forEach(button => {
    button.addEventListener('click', function() {
        const ticketName = this.getAttribute('data-ticket');
        const ticketPrice = this.getAttribute('data-price');
        order.push({ name: ticketName, price: ticketPrice });
        updateOrderSummary();
    });
});

document.getElementById('view-order').addEventListener('click', function() {
    if (order.length === 0) {
        alert("Tu pedido está vacío.");
    } else {
        let orderList = order.map(item => `${item.name}: ${item.price}€`).join('\n');
        alert(`Tu pedido:\n\n${orderList}`);
    }
});

document.getElementById('reset-order').addEventListener('click', function() {
    order = [];
    updateOrderSummary();
});

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    if (order.length === 0) {
        orderSummary.innerHTML = '<p>Aún no has seleccionado ninguna entrada.</p>';
    } else {
        const total = order.reduce((sum, item) => sum + Number(item.price), 0);
        orderSummary.innerHTML = `
            <p><strong>Entradas seleccionadas:</strong></p>
            <ul>
                ${order.map(item => `<li>${item.name} - ${item.price}€</li>`).join('')}
            </ul>
            <p><strong>Total: ${total}€</strong></p>
        `;
    }
}
