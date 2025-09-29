const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const src_menu = document.getElementById('src_menu')

nav.style.left = '100%';
src_menu.src = 'public/icon/menu_open.svg';
menu.onclick = () => {
    if (nav.style.left === '100%') {
      nav.style.left = '30%';
      src_menu.src = 'public/icon/menu_close.svg';
      
      
    } else {
      nav.style.left = '100%';
      src_menu.src = 'public/icon/menu_open.svg';
    }
}