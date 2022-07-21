
const cookieWeb = document.querySelector('.cookie_web');
const cookieMobile = document.querySelector('.cookie_mobile');

const btnMobile = document.querySelector('.button-cookie__ok-mobile');
const btnWeb = document.querySelector('.button-cookie__ok');

btnMobile.addEventListener('click', () => cookieMobile.style.display = 'none');
btnWeb.addEventListener('click', () => cookieWeb.style.display = 'none');



