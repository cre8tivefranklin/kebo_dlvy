
// Pseudocode for handling the click event and toggling the visibility of order items

// Get references to the order button and order items

//ordering functions
function open_restuarant(){
    var open_items = document.getElementById('order-items-r');
    open_items.classList.toggle('hide-r');

    ////////////replicate this formula
    var restaurants_list = ['Jefferson Cafe','b','c','d','e','f','g'];//create list of restaurants
    var restaurants_all = restaurants_list.length;//creates list length
    var list_restaurants = '';//where list of restaruants is stored

    for (var index_r = 1; index_r <= restaurants_all; index_r++) {
        restaurants = restaurants_list[index_r]
        restaurants_list.push(restaurants);
        list_restaurants += '<li>' + restaurants_list[index_r - 1] + '</li>';
      }
    open_items.innerHTML = '<div id="restaurant" onclick="open_menu()"><ul>' + list_restaurants + '</ul></div>';//RESTAURANTS LIST OPENS HERE
   

    var close_menu = document.getElementById("Menus");
    close_menu.classList.add('hide-m');
    var close_order = document.getElementById('cart_grabber');
    close_order.classList.add('hide_cart');
}

function open_menu(){
    var open_menu = document.getElementById("Menus");
    open_menu.classList.toggle("hide-m");

    var menu_list = ["Burger","Mac","Special"];
    var menu_all = menu_list.length;
    var list_menu = "";

    for (index_m = 1; index_m <= menu_all; index_m ++) {
        menus = menu_list[index_m];
        menu_list.push(menus);
        list_menu += "<li>"+menu_list[index_m - 1]+"</li>";
    }
    open_menu.innerHTML = 
    '<div onclick="show_items()">Menu</div>'+
    '<div class="items-container hide-i" id="M1_items">'+
    '<p>Items:</p><br>'+'<ul>'
    +list_menu+
    '</ul>'+'</div>'+'</div>';
}

function show_items(){
    var open_items = document.getElementById('M1_items');
    open_items.classList.toggle('hide-i');
    // var items = [];
}

//cart functions
function show_cart(){
    var cart_show =document.getElementById('cart_grabber');
    var close_order_win = document.getElementById('order-items-r');
    var close_menu_win = document.getElementById('Menus');
    cart_show.classList.toggle('hide_cart');
    close_order_win.classList.add('hide-r');
    close_menu_win.classList.add('hide-m');
} 