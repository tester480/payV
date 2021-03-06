$(document).ready(function(){
   mobBurger();
   feedback();
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

function feedback() {
   $(".feedback__img, .popup__close").on('click', function () {
         var $parent = $(".feedback");
         if ($parent.hasClass('popup-open')) {
            $parent.removeClass('popup-open');
         } else {
            $parent.addClass('popup-open');
         }
   }); 
   $("html").on('click', function(event) {
      if (!$(event.target).closest(".feedback__img, .popup__close, .feedback__popup").length) {
         if ($(".feedback").hasClass("popup-open")) {
            $(".feedback").removeClass("popup-open");
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
   $(".offer__input").on('click', function () {
         if ($(this).parent().hasClass('hint-show')) {
            $(this).parent().removeClass('hint-show');
         } else {
            $(".offer").removeClass('hint-show');
            $(this).parent().addClass('hint-show');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".offer__input, .search__hint").length) {
         if ($(".offer").hasClass("hint-show")) {
            $(".offer").removeClass("hint-show");
         }
      }
   });
}

function select() {
   $('.select').select2();
}