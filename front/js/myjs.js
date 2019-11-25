function initialLoadJSONs(){

    const JSONusers = {'users':[
        {'id':1, 'name':'Anne', 'pass':'1111', 'rol':1 },
        {'id':2, 'name':'Bob', 'pass':'2222', 'rol':2 },
        {'id':3, 'name':'Charlie', 'pass':'3333', 'rol':2 },
        {'id':4, 'name':'Damien', 'pass':'4444', 'rol':3 }
    ]};

    const JSONproducts = {'products':[
        {'product_id':1, 'seller_id':2, 'name':'art', 'price':[10, 27, 78], 'description':"art box",'suscription':[1, 3, 9], 'category':'art'},
        {'product_id':2, 'seller_id':2, 'name':'knives', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'survival'},
        {'product_id':3, 'seller_id':3, 'name':'tools', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'survival'},
        {'product_id':4, 'seller_id':2, 'name':'Bio-cosmetics', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'cosmetics'},
        {'product_id':5, 'seller_id':3, 'name':'Maekup', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'cosmetics'},
        {'product_id':6, 'seller_id':3, 'name':'Korean food', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'food'},
        {'product_id':7, 'seller_id':2, 'name':'Japaneese food', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'food'},
        {'product_id':8, 'seller_id':3, 'name':'Nintendo merchandising', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'freak'},
        {'product_id':9, 'seller_id':2, 'name':'Random', 'price':[10, 27, 78], 'description':'','suscription':[1, 3, 9], 'category':'random'},
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
}

//SHOPPING CART code
function loadShoppingCart(){

    const JSONusers    = JSON.parse(localStorage.getItem('JSONusers'));
    const JSONproducts = JSON.parse(localStorage.getItem('JSONproducts'));
    const JSONcart     = JSON.parse(localStorage.getItem('JSONcart'));

    var user
    $.each(JSONusers.users, function(index, element){
        if(element.id == JSONcart.user_id){
            user = element.name;
        }
    })
    console.log(user);;
//    document.getElementsByClassName('cart_title').appendChild(user);
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
