
//SHOPPING CART code
function loadShoppingCart(){

    const JSONusers    = JSON.parse(localStorage.getItem('JSONusers'));
    const JSONproducts = JSON.parse(localStorage.getItem('JSONproducts'));
    const JSONcart     = JSON.parse(localStorage.getItem('JSONcart'));

    var user;
    $.each(JSONusers.users, function(index, element){
        if(element.id == JSONcart.user_id){
            user = element.name;
        }
    })
    console.log(user);;
//    document.getElementsByClassName('cart_title').appendChild(user);
}

function loadProducts(){

    const JSONproducts = JSON.parse(localStorage.getItem('JSONproducts'));
    var html = "";

    $.each(JSONproducts.products, function(index, element){
        html += '<div class="product">';
        html += '<img src="' + element.image + '" alt="' + element.name + '">'
        html += '<div class="miniature">'
        html += '<a href="product.html" class="productLink"><p class="name">'+element.name+'</p>'
        html += '<div class="info"> <p class="price">'+element.price+'</p>'
        html += '<button class="btn btn-outline-info">Add to cart</button></div>'
        html += '</div>'
        html +='</div>';
    })

    document.getElementById("productos").innerHTML = html;
}


function initialLoadJSONs(){

    const JSONusers = {'users':[
        {'id':1, 'name':'Anne', 'pass':'1111', 'rol':1 },
        {'id':2, 'name':'Bob', 'pass':'2222', 'rol':2 },
        {'id':3, 'name':'Charlie', 'pass':'3333', 'rol':2 },
        {'id':4, 'name':'Damien', 'pass':'4444', 'rol':3 }
    ]};

    const JSONproducts = {'products':[
        {'product_id':1, 'seller_id':2, 'name':'art', 'price':[10, 27, 78], 'description':"art box",'suscription':[1, 3, 9], 'category':'art', 'image':'../assets/products/arte.jpg'},
        {'product_id':2, 'seller_id':2, 'name':'knives', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'survival', 'image':'../assets/products/survival.jpeg'},
        {'product_id':3, 'seller_id':3, 'name':'tools', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'survival', 'image':'../assets/products/survvival.jpeg'},
        {'product_id':4, 'seller_id':2, 'name':'Bio-cosmetics', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'cosmetics', 'image':'../assets/products/makeup.png'},
        {'product_id':5, 'seller_id':3, 'name':'Maekup', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'cosmetics', 'image':'../assets/products/makeup.png'},
        {'product_id':6, 'seller_id':3, 'name':'Korean food', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'food', 'image':'../assets/products/japFood.jpg'},
        {'product_id':7, 'seller_id':2, 'name':'Japaneese food', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'food', 'image':'../assets/products/japFood.jpg'},
        {'product_id':8, 'seller_id':3, 'name':'Nintendo merchandising', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'freak', 'image':'../assets/products/friki.jpeg'},
        {'product_id':9, 'seller_id':2, 'name':'Random', 'price':[10, 27, 78], 'description':'Box de cuchillos para el superviviente','suscription':[1, 3, 9], 'category':'random', 'image':'../assets/products/random.png'},
    ]};

    const JSONcart = {
        'user_id':4,
        'products':[1,1,2,6,4],
        'total':50
    };

    localStorage.clear();
    localStorage.setItem( 'JSONusers', JSON.stringify(JSONusers));
    localStorage.setItem( 'JSONproducts', JSON.stringify(JSONproducts));
    localStorage.setItem( 'JSONcart', JSON.stringify(JSONcart));

    loadProducts();
}

/*******************************************************************************
                            localStorage MMETHODS
*******************************************************************************/


function saveJSON(name, JSONfile){
        localStorage.setItem(name, JSON.stringify(JSONfile));

}

function loadJSON(){
        var myJSON = JSON.parse(localStorage.getItem('myJSONls'));
        $.each(myJSON.users, function(index, element){
                console.log("id: " + element.id);
        });


}


function eraseJSON(){

        localStorage.removeItem('myJSONls');

}
