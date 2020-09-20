$(document).ready(function(){
   mobBurger();
   balanceDropdown();
   searchHint();
   select();
});

function mobBurger() {
   $(".header__burger").on('click', function () {
         var $parent = $("body");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $("html").on('click', function(event) {
      if (!$(event.target).closest(".header__burger, .sidebar").length) {
         if ($("body").hasClass("mob-menu")) {
            $("body").removeClass("mob-menu");
         }
      }
   });
}

function balanceDropdown() {
   $(".balance__inner").on('click', function () {
         var $parent = $(".balance");
         if ($parent.hasClass('balance-open')) {
            $parent.removeClass('balance-open');
         } else {
            $parent.addClass('balance-open');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".balance__inner, .balance__dropdown").length) {
         if ($(".balance").hasClass("balance-open")) {
            $(".balance").removeClass("balance-open");
         }
      }
   });
}

function searchHint() {
   $(".search__input").on('click', function () {
         var $parent = $(".search");
         if ($parent.hasClass('hint-show')) {
            $parent.removeClass('hint-show');
         } else {
            $parent.addClass('hint-show');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".search__input, .search__hint").length) {
         if ($(".search").hasClass("hint-show")) {
            $(".search").removeClass("hint-show");
         }
      }
   });
}

function select() {
   $('.select').select2();
}