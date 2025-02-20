document.addEventListener("DOMcontent loaded" ,()=> {
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons =  document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fa-heart");

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".card-body").forEach(product => {
            const unitprice = parseFloat (product.querySelector (".unit-price").textContent);
            const quantity = parseInt (product.querySelector(".quantity").textContent);
            total+=unitprice* quantity;
        });
        console.log ("prix total :" + total+"$");
    }
    //gestion des bouttons +
    plusButtons.forEach (button => {
        button.addEventListener ("click", ()=> {
            let quantitySpan = button.nextElementSibling;
            let quantity= parseInt(quantitySpan.textContent);
                quantitySpan.textContent=quantity + 1;
                    updateTotal();
        });
    });
    //gestion des buttons -
    minusButtons.forEach(button=>{
        button.addEventListener("click",() => {
            let quantitySpan= button.previousElementSibling;
            let quantity =parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantitySpan.textContent=quantity - 1;
                updateTotal();
            }
        });
    });
    //suppression des articles
    deleteButtons.forEach(button => {
        button.addEventListener("click",() => {
        button.closest(".card-body").remove();
        updateTotal();
        });
    });
    //gestion des likes
    likeButtons.forEach (button=> {
        button.addEventListener("click", () =>{
            button.classList.toggle("liked");
        });
    });
    updateTotalprice();
});
