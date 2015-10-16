$(document).ready(function(){
	
	$('img:first').addClass('shown')
	
	$('.name').text('Batman')

	
});



$('.next').click(function(e){

	

$('img:first').removeClass('shown')
	
$('img:first').next().addClass('shown')

$('.name').text('Captain America')



	
});


$('.next').click(function(e){
	$('.shown').css('opacity','0');
}):


