var mobile = document.getElementsByClassName('mobile')[0];
var menu = document.getElementsByTagName('ul')[0];

mobile.addEventListener('click', function(){
  if( menu.style.display != 'block') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});