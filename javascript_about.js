let clickMenu = document.getElementById('menu_ham');

clickMenu.addEventListener('click', function() {
  let storeMenu = document.getElementById('menu_expand');
  storeMenu.style.height = "100vh";
  storeMenu.getElementsByTagName('a')[0].style.visibility = "visible";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "visible";
  document.getElementsByClassName('abuut_menu_img')[0].style.visibility = "hidden";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "visible";
})

let hideMenu = document.getElementById('close_menu');

hideMenu.addEventListener('click', function() {
  document.getElementById('menu_expand').style.visibility = "visible";
  let storeMenu = document.getElementById('menu_expand');
  storeMenu.style.height = "100%";
  storeMenu.getElementsByTagName('a')[0].style.visibility = "hidden";
  storeMenu.getElementsByTagName('a')[1].style.visibility = "hidden";
  document.getElementsByClassName('abuut_menu_img')[0].style.visibility = "visible";
  document.getElementsByClassName('hide_menu')[0].style.visibility = "hidden";
})

let getScreenSize = window.innerWidth;
functionName();

window.addEventListener('resize', functionName);
function functionName(e) {

  if (e != undefined) {
    var storeScreenSize = e.currentTarget.screen.availWidth;

  } else {
    storeScreenSize = getScreenSize;
  }

  if (storeScreenSize <= 767) {
    var converToPx = storeScreenSize * .40 + "px";
    var converToPxSection = storeScreenSize * .53 + "px";
    var converToGlobalIcon = storeScreenSize * .60 + "px";
    var adjustFooterLogoCommons = storeScreenSize * .02 + "px";
    var adjustCommonFontSize = storeScreenSize * .026 + "px";
    var adjustFooterFontSize = storeScreenSize * .019 + "px";

    document.getElementsByClassName('global_2013_mobile')[0].style.height = converToPx;
    document.getElementsByClassName('global_2011_mobile')[0].style.height = converToPx;
    document.getElementsByClassName('icon_partners')[0].style.height = converToPxSection;
    document.getElementsByClassName('global_icon_mobile')[0].style.width = converToGlobalIcon;
    document.getElementsByClassName('commons')[0].style.lineHeight  = adjustFooterLogoCommons;
    document.getElementsByClassName('commons')[0].style.fontSize = adjustCommonFontSize;
    document.getElementsByClassName('rights')[0].style.fontSize = adjustFooterFontSize;
  }
}