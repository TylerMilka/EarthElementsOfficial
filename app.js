//Code Starts
$(document).ready(function() {
//Landscaping Javascript

$(document).ready(function() {
	$("#freequotes").show();
    $("#freequotes").animate({left: "+=2365"}, 12000);
  /*  $("#freequotes").delay(2000).fadeOut();*/

});


$('#landscapingServices').show();
$('#weeklyServiceContent').slideUp();
$('#lawnCareContent').slideUp();
$('#treeServicesContent').slideUp();
$('#installationsContent').slideUp();


$("#landscapingService").click(function(){
	$('#landscapingServicesContent').show();
	$('#weeklyServiceContent').slideUp();
	$('#lawnCareContent').slideUp();
	$('#treeServicesContent').slideUp();
	$('#installationsContent').slideUp();
});

$("#weeklyService").click(function(){
	$('#weeklyServiceContent').show();
	$('#lawnCareContent').slideUp();
	$('#landscapingServicesContent').slideUp();
	$('#treeServicesContent').slideUp();
	$('#installationsContent').slideUp();
});

$("#lawnCare").click(function(){
	$('#lawnCareContent').show();
	$('#landscapingServicesContent').slideUp();
	$('#weeklyServiceContent').slideUp();
	$('#treeServicesContent').slideUp();
	$('#installationsContent').slideUp();
});

$("#treeServices").click(function(){
	$('#treeServicesContent').show();
	$('#landscapingServicesContent').slideUp();
	$('#weeklyServiceContent').slideUp();
	$('#lawnCareContent').slideUp();
	$('#installationsContent').slideUp();
});


$("#installations").click(function(){
	$('#installationsContent').show();
	$('#landscapingServicesContent').slideUp();
	$('#weeklyServiceContent').slideUp();
	$('#lawnCareContent').slideUp();
	$('#treeServicesContent').slideUp();
});


//snow removal javascript
$('#snowRemovalContent').show();
$('#commercialServiceContent').slideUp();
$('#residentialServiceContent').slideUp();
$('#saltApplicationContent').slideUp();

$("#snowRemoval").click(function(){
	$('#snowRemovalContent').show();
	$('#commercialServiceContent').slideUp();
	$('#residentialServiceContent').slideUp();
	$('#saltApplicationContent').slideUp();
});

$("#commercialService").click(function(){
	$('#snowRemovalContent').slideUp();
	$('#commercialServiceContent').show();
	$('#residentialServiceContent').slideUp();
	$('#saltApplicationContent').slideUp();
});

$("#residentialService").click(function(){
	$('#snowRemovalContent').slideUp();
	$('#commercialServiceContent').slideUp();
	$('#residentialServiceContent').show();
	$('#saltApplicationContent').slideUp();
});

$("#saltApplication").click(function(){
	$('#snowRemovalContent').slideUp();
	$('#commercialServiceContent').slideUp();
	$('#residentialServiceContent').slideUp();
	$('#saltApplicationContent').show();
});

})
//     $("#hover").css("opacity", 0.5);
//     $("#hover").hover(function() {
//         $(this).animate({opacity: 1.0}, 500);
//     }, function() {
//         $(this).animate({opacity: 0.5}, 500);
//     });

// var rotation = 0;

// jQuery.fn.rotate = function(degrees) {
//     $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
//     return $(this);
// };

// $('#.logo').hover(function() {
//     rotation += 90;
//     $(this).rotate(rotation);

// });

