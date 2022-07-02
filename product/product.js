let productList = {};
let url = "https://fixedfitnesswebsite-default-rtdb.europe-west1.firebasedatabase.app/"

async function getList() {

    const response = await fetch(url + ".json");
    productList = await response.json();

    draw();
}

let str = "";

function draw() {

    for (let [i, product] of Object.entries(productList)){
        let productImage = product.image[0];
        let productName = product.name;
        // let productOverview = product.productOverview[0];
        let productPrice = product.price[0];

        str += `<div class="productCard">
                    
                    <div class="productImage">
                        <img src=${productImage} alt="Product image">
                    </div>

                    <div class="productInfo">
                        <span class="title">${productName}</span>

                        <span class="price">$${productPrice}</span>
                    </div>

                    <button><a href=detail.html?id=${i}>View Details</a></button>

                </div>`
                // <span class="description">${productOverview}</span>
    }
    
    document.querySelector(".productList").innerHTML = str; 
}

function openCart(){
    window.location = "/cart/cart.html";
 }
 
