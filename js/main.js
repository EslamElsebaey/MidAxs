
// $(window).load(function(){
//   $(".preloader").fadeOut();
// })




$(document).ready(function(){


  // Nested menu in Mob nav

  if($(window).width() < 992){
    $(".li-drop .navLink").removeAttr("href")
  }
  $(".li-drop .navLink").click(function(){
    $(this).next(".dropdown").slideToggle(300);
    $(this).toggleClass("nav-arrow-rotate");
  })

// **************************************************************************************************


  // open and close side bar
  $(".bars").click(function(){
    $(".mob-Nav").addClass("show-sideBar");
    $("body").addClass("overflow-hidden") ;
  })

  $(".closeNavBtn").click(function(){
    $(".mob-Nav").removeClass("show-sideBar")
    $("body").removeClass("overflow-hidden") ;
  })



// **************************************************************************************************

  
  // show and hide search box

$(".searchBtn").click(function(){
  $(".search-overlay").addClass("show-searchBox");
  $("body").addClass("overflow-hidden") ;
})

$(".closeSearch-btn").click(function(event){
  event.stopPropagation();
  $(".search-overlay").removeClass("show-searchBox");
  $("body").removeClass("overflow-hidden") ;
})


// **************************************************************************************************


// Video resizing 

  var vidHolder = document.querySelector(".vid-holder");
  var mainWidth = 90; 
  var maxScroll = 500;

  if($(".vid-holder").length){
    if($(window).width() < 768){
      maxScroll = 100
    }
    if($(window).width() > 1300){
      mainWidth = 88
    }
    window.addEventListener('scroll', function(){
      var scrollTop = window.scrollY;
      var newWidth = mainWidth + (scrollTop / maxScroll) * 10; 
      newWidth = Math.min(Math.max(newWidth, mainWidth), 100);
      vidHolder.style.width = newWidth + "%";
    });
  
  }
  



// **************************************************************************************************


  // AOS animation 
  AOS.init();


// **************************************************************************************************

  // Counters
  
  if($(".counter-content").length > 0)  {
    const mySection = document.querySelector('.numbers'); 
    const mySectionOffsetTop = mySection.offsetTop; 
    const windowHeight = window.innerHeight; 
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY; 
      if (scrollPosition > mySectionOffsetTop - windowHeight) {
        let  numDivs  = document.querySelectorAll(".num-holder .num") ; 
        let interval = 4000 ; 
        
      numDivs.forEach((numDiv)=>{
        if(numDiv.innerHTML == "0"){
          let startValue = 0 ; 
          let endValue = parseInt(numDiv.dataset.num ) ; 
          let duration =  Math.floor(interval / numDiv.dataset.num )  ;
          let counter =  setInterval(() => {
          startValue++ ;
          numDiv.textContent = startValue ;
           if(startValue == endValue){
             clearInterval(counter)
          }
      }, duration);
        }
      
    } )
    
        
      }
    });
  }



// **************************************************************************************************




// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 650){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 400);
}) 


// **************************************************************************************************


//fixed nav



  let fixedBar = document.querySelector("header"),
  prevScrollposition = $(window).scrollTop();
  $(window).on("scroll", function () {
     if ($(window).scrollTop() > 150) {
         $(fixedBar).addClass("fixed");
     } else {
      $(fixedBar).removeClass("fixed");
     }

     var scrollTop = $(window).scrollTop();
     prevScrollposition < scrollTop && prevScrollposition > 0 ? fixedBar.classList.add("stayTop") : fixedBar.classList.remove("stayTop"), (prevScrollposition = scrollTop);
   });

  


// **************************************************************************************************

//  nested menus in footer


if($(window).width() < 992){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }
  






})







