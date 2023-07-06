
// Pseudocode for handling the click event and toggling the visibility of order items

// Get references to the order button and order items

//ordering functions
function open_restuarant(){
    var open_items = document.getElementById('order-items-r');
    open_items.classList.toggle('hide-r');

    ////////////replicate this formula
    var restaurants_list = ['Jefferson Cafe'];//create list of restaurants
    var restaurants_all = restaurants_list.length;//creates list length
    var list_restaurants = '';//where list of restaruants is stored

    for (var index_r = 1; index_r <= restaurants_all; index_r++) {
        restaurants = restaurants_list[index_r];
        restaurants_list.push(restaurants);
        list_restaurants += '<li>' + restaurants_list[index_r - 1] + '</li>';
      }
    open_items.innerHTML = '<div id="restaurant" onclick="open_menu()"><ul>' + list_restaurants + '</ul></div>';//RESTAURANTS LIST OPENS HERE
   

    var close_menu = document.getElementById("Menus");
    close_menu.classList.add('hide-m');
    var close_order = document.getElementById('cart_grabber');
    close_order.classList.add('hide_cart');
}

function open_menu() {
  // Toggle the "hide-m" class on the "Menus" element
  var open_menu = document.getElementById("Menus");
  open_menu.classList.toggle("hide-m");

  // Define the menu items
  var menu_list = ["Burger", "Mac", "Special"];
  var menu_all = menu_list.length;
  var list_menu = "";

  // Object to store the quantity values for each item
  var quant_values = {};

  // Loop through the menu items
  for (index_m = 0; index_m < menu_all; index_m++) {
    var menus = menu_list[index_m];
    var display_val_id = 'display_val_' + index_m;

    // Initialize the quantity value for each item to 0
    quant_values[display_val_id] = 0;

    // Construct the HTML for each item with quantity display and buttons
    list_menu += '<li>' + menus + '<div id="' + display_val_id + '" class="display_val">' + quant_values[display_val_id] + '</div>' +
      '<div class="button_container">' +
      '<button onclick="quantity(\'' + display_val_id + '\', 1)" class="quant_pos">+</button>' +
      '<button onclick="quantity(\'' + display_val_id + '\', -1)" class="quant_neg">-</button>' +
      '</div>' +
      '</li>';
  }

  // Update the HTML to display the menu items with quantities
  open_menu.innerHTML =
    '<div onclick="show_items()">Menu</div>' +
    '<div class="items-container hide-i" id="M1_items">' +
    '<p>Items:</p><br>' + '<ul>' +
    list_menu +
    '</ul>' + '</div>' + '</div>';
}

function quantity(display_val_id, increment) {
  // Get the element to display the quantity
  var quantShowElement = document.getElementById(display_val_id);

  // Retrieve the current quantity value
  var currentQuantValue = parseInt(quantShowElement.textContent);

  // Calculate the new quantity value by adding or subtracting the increment
  var newQuantValue = currentQuantValue + increment;

  // Ensure the quantity remains non-negative
  if (newQuantValue >= 0) {
    // Update the quantity value in the HTML
    quantShowElement.textContent = newQuantValue;
  }
  return newQuantValue;
}

//create a function that will calculate and display newQuantValue and add the value to the cart


  

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