
// Pseudocode for handling the click event and toggling the visibility of order items

// Get references to the order button and order items

//ordering functions
function open_restuarant(){
    var open_items = document.getElementById('order-items-r');
    open_items.classList.toggle('hide-r');
    var close_menu = document.getElementById("Menus");
    close_menu.classList.add('hide-m');
    var close_order = document.getElementById('cart_grabber');
    close_order.classList.add('hide_cart')
}
function open_menu(){
    var open_menu = document.getElementById("Menus");
    open_menu.classList.toggle("hide-m");    
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