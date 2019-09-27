var productList = ['Laptop','Smartphone','4K-HDTV','XBOX','VR-Headset'];


createProductList();

// Add products to Products list
function createProductList(){
    for(var i=0; i<productList.length; i++){
         // The following line didn't work. Ask Prof. why it didn't work      
       // document.getElementById("products").innerHTML += "<option'>" + productList[i] + "</option'>";
        var newOption = document.createElement("option");
        newOption.text = productList[i];
        newOption.value = productList[i];
        var selectProducts = document.getElementById("products");
        selectProducts.appendChild(newOption);
    }                
}

// Add the selected product to the shopping cart
function addToCart(){
        var products = document.getElementById("products");
        var shoppingCart = document.getElementById("shoppingCart");

        if (products.selectedIndex==-1) {
            alert('Please select a product');
            return;
        }
        
        for (var i=0; i< shoppingCart.options.length; i++)
        { 
            if (shoppingCart.options[i].value == products.options[products.selectedIndex].value) 
            { 
            alert('The selected product already exists in your shopping cart');
            return;
            } 
        }

        var newOption = document.createElement("option");
        newOption.text = products.options[products.selectedIndex].text;
        newOption.value = products.options[products.selectedIndex].value;                                        
        shoppingCart.appendChild(newOption);                                        
}    

function removeFromCart(){
    var shoppingCart = document.getElementById("shoppingCart");    
    shoppingCart.options[shoppingCart.selectedIndex].remove();         
}    

function placeOrder(){
    var fullname = document.getElementById("name").value;                    
    var addr1 = document.getElementById("address1").value;  
    var addr2 = document.getElementById("address2").value;  
    var shopcart_products = [];

    for (var i=0; i< shoppingCart.options.length; i++)
        { 
            shopcart_products[i] = shoppingCart.options[i].value;
        }

        
        document.getElementById("ordersummary").innerHTML  =  " <div> <b> Order Summary </b> <br /> " + "Name : " +  fullname + "<br />" + "Address : " +   addr1 
        + "<br />"    + addr2 + "<br />" + "Products : "  + shopcart_products.toString()  + "</div>";
}        
            


