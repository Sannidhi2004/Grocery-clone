let searchForm = document. querySelector('.search-form'); //We put a dot bcoz search-form is a class name
//We want the button to get active as soon as it is clicked so we select the id as follows:
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');

   
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
    
}
let shoppingCart = document. querySelector('.shopping-cart'); //We put a dot bcoz search-form is a class name
//We want the button to get active as soon as it is clicked so we select the id as follows:
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');

searchForm.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
    
}
let loginForm = document. querySelector('.login-form'); //We put a dot bcoz search-form is a class name
//We want the button to get active as soon as it is clicked so we select the id as follows:
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');

searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
navbar.classList.remove('active');
    
}
let navbar = document. querySelector('.navbar'); //We put a dot bcoz search-form is a class name
//We want the button to get active as soon as it is clicked so we select the id as follows:
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');

searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');

    
}

window.onscroll = () =>
{
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navbar.classList.remove('active');
}

var swiper = new Swiper(".products-slider",
{
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1020: {
            slidesPerView: 3,
        },
    },

    
});
var swiper = new Swiper(".product-slider",
{
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1020: {
            slidesPerView: 3,
        },
    },

    
});
var swiper = new Swiper(".review-slider",
{
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1020: {
            slidesPerView: 3,
        },
    },

    
});
var swiper = new Swiper(".categories-slider",
{
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1020: {
            slidesPerView: 3,
        },
    },

    
});