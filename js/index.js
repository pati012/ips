"use strict";

 //burger menu

  const burger = document.querySelector('.burger');
   const burgerMenu = document.querySelector('.header__body');
 burger.addEventListener('click', burgers);
 
  function burgers(){
    burger.classList.toggle('open');
     burgerMenu.classList.toggle('active');
    document.body.style.overflow = 'visible';
     if(burger.classList.contains('open')){
        document.body.style.overflow = 'hidden';
     }
  }


  //ссылки
 
   const items = document.querySelectorAll('.menu-item');
    items.forEach(item =>{
        const menuItem = item; 
     menuItem.addEventListener('click', clicke);
    });
     function clicke(){
        const element = event.target;
        burger.classList.remove('open');
        burgerMenu.classList.remove('active');
         document.body.style.overflow = 'visible';
     }