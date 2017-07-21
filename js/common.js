///Прирівнюємо висоту хедера то висоди дисплея
var clientHeight = document.documentElement.clientHeight;
var clientWidth = document.documentElement.clientWidth;


//_______________________________________________________________________________
window.addEventListener("orientationchange", function() { //listening Screen's orientation
  
});

window.addEventListener("resize", function(){ //listening sreen's change size
  
})
//______________________________________________________________________________________

//Menu's styles Begin//
var navItems = document.getElementsByClassName("fa");
var firstMenuItem  = document.getElementById("first");
var secondMenuItem  = document.getElementById("second");
var thirdMenuItem  = document.getElementById("third");
var fourthMenuItem  = document.getElementById("fourth");
function str(firstMenuItem,i){
	firstMenuItem.addEventListener("mouseover", function(){
		navItems[i].classList.add("str");
		navItems[i].style.opacity="1";
	// })
});
	firstMenuItem.addEventListener("mouseout", function(){
		navItems[i].classList.remove("str");
		navItems[i].style.opacity=".35";
	// })
});
}
str(firstMenuItem,0);
str(secondMenuItem,1);
str(thirdMenuItem,2);
str(fourthMenuItem,3);

function mobileNav(){
	  var browserWidth = document.documentElement.clientWidth;
	  var nav = document.getElementById("nav");
	  var mobileNav = document.getElementById("mobile-nav");
	  if (browserWidth<=1230) {
	  	nav.style.display="none";
	  	
	  }
	  else{
	  	nav.style.display="block";
	  	
	  }
}
mobileNav();
window.addEventListener("orientationchange", function() {
	mobileNav();
});
window.addEventListener("resize", function(){
	mobileNav();
});


//Menu's styles END//
// if (clientWidth<clientHeight+120)
// {
// 	alert(1);
// }

//Slider's Type Begin
