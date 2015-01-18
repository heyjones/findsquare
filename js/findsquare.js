$(document).ready(function(){
	$('.findsquare').keypress(function(){
		if($(this).val().length > 3){
			$.getJSON('https://api.foursquare.com/v2/venues/suggestcompletion?intent=global&query=' + $(this).val() + '&oauth_token=VWWQ00AMWSSJWQQEABZGW4PDDBP54J5DHTN2L0EC45U5XALP&v=20150118', function(data){
				console.log(data);
			});
		}
	});
});
