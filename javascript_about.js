let clickMenu = document.getElementById('menu_ham');

clickMenu.addEventListener('click', function() {
  let storeMenu = document.getElementById('menu_expand');
  storeMenu.getElementsByTagName('a')[0].style.visibility = "visible";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "visible";
  document.getElementsByClassName('abuut_menu_img')[0].style.visibility = "hidden";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "visible";
})

let hideMenu = document.getElementById('close_menu');

hideMenu.addEventListener('click', function() {
  document.getElementById('menu_expand').style.visibility = "visible";
  let storeMenu = document.getElementById('menu_expand');
  storeMenu.getElementsByTagName('a')[0].style.visibility = "hidden";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "hidden";
  document.getElementsByClassName('abuut_menu_img')[0].style.visibility = "visible";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "hidden";
})
