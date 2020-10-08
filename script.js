let menu_ic = document.getElementById("menu-ic");
let navigation_container = document.getElementById("collapsible-navigation-container");
let close_ic = document.getElementById("close-ic");
menu_ic.onclick = function(){
    navigation_container.style.width = "100%"; 
}
close_ic.onclick = function(){
    navigation_container.style.width = "0"; 
}