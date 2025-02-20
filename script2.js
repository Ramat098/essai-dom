document.addEventListener('DOMContentLoaded', function() {
    //boutons"+"
    const plusButtons =document.querySelectorAll('.fa-plus-circle');
    plusButtons.forEach(button => {
        button.addEventListener('click', function(){
            const quantityElement.textContent = quantity + 1;
            updateTotalPrice();
        });
    });
    //boutons "-"
    const minusButtons =document.querySelectorAll('.fa-minus-circle');
    minusButtons.forEach(button => {
        button.addEventListener('click', function(){
            const quantityElement = this.previousElementSibling;
            let quantity= parseInt(quantityElement.textContent);
            if (quantity>0) {
                quantityElement.textContent =
            quantity - 1;
            updateTotalPrice();
        }
        });
        });
        //Bouttons de suppression
        const deleteButtons = 
        document.querySelectorAll('.fa-trash-alt');
        deleteButtons.forEach(button => {
            button.addEventListener('click',function() {
                const productElement= this.closest('.card-body');
                productElement.remove();
                updateTotalPrice();
            });
        });
        //Bouttons "like"
        const likeButtons = document.querySelectorAll('.fa-heart');
        likeButtons.forEach(button => {
            button.addEventListener('click', function (){
                this.classList.toggle ('liked');
            });  
            });
            //fonction pour mettre a jour le prix total
            function updateTotalPrice() {
                let total =0;
                const products = document.querySelectorAll('.card-body');
                products.forEach(product => {
                    const unitPrice = parseFloat(product.querySelector('.unit-price').textContent);
                    const quantity = parseInt(product.querySelector('.quantity').textContent);
                    total += unitPrice*
                    quantity;
                });
                document.getElementById('total-price').textContent = total.toFixed(2) + '$';
            }
        });