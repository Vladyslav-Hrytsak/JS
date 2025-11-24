fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(productObj => {
        let output = document.getElementById('output');

        productObj.carts.forEach(cart => {
            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');
            cartDiv.innerHTML = `
                <p><b>Cart ID:</b> ${cart.id}</p>
                <p><b>User ID:</b> ${cart.userId}</p>
                <p><b>Total Products:</b> ${cart.totalProducts}</p>
                <p><b>Total Quantity:</b> ${cart.totalQuantity}</p>
                <p><b>Total:</b> ${cart.total}</p>
                <p><b>Discounted Total:</b> ${cart.discountedTotal}</p>
                <h3>Products:</h3>
            `;

            cart.products.forEach(product => {
                let prod = document.createElement('div');
                prod.classList.add('prod');

                prod.innerHTML = `
                    <p><b>Product ID:</b> ${product.id}</p>
                    <p><b>Title:</b> ${product.title}</p>
                    <p><b>Price:</b> ${product.price}</p>
                    <p><b>Quantity:</b> ${product.quantity}</p>
                    <p><b>Total:</b> ${product.total}</p>
                    <p><b>Discount (%):</b> ${product.discountPercentage}</p>
                    <p><b>Discounted Price:</b> ${product.discountedPrice}</p>
                    <img src="${product.thumbnail}" alt="${product.title}" width="120" style="margin-top:10px; border-radius:8px;">
                `;

                cartDiv.appendChild(prod);
            });

            output.appendChild(cartDiv);
        });
    });

