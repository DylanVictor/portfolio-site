// Toggle button for navbar when width < 630px
$(".toggle-button").click(function(){
	$("nav ul li").toggleClass("active");
})

// Project list expanding and collapsing
$(".list").click(function(){
	var clickedDivID = $(this).attr('id');
	$("."+clickedDivID + "-desc").toggleClass("expand collapsed");
  $("."+clickedDivID+"-icon").toggleClass("icon-rotate-up icon-rotate-down")
})

// Remove navbar animation for media resizing after the first play
$(document).ready(function(){
	setTimeout(function(){
		$("nav li").css({
			"animation-delay": "0s",
			"animation-duration": "0s"
		});
	},3300);
});
