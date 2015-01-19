(function($){
	$.fn.findsquare = function(options){

		var settings = $.extend({
			intent: 'global',
			oauth_token: 'VWWQ00AMWSSJWQQEABZGW4PDDBP54J5DHTN2L0EC45U5XALP',
			v: 20150118,
			name: 'name',
			address: 'address',
			city: 'city',
			state: 'state',
			postalCode: 'postalCode',
			country: 'country'
        }, options );

		$(this).wrap('<div class="findsquare-container"></div>');
		$('<ul class="findsquare-results">').appendTo('.findsquare-container');

		$(this).focus(function(){
			$('.findsquare-results').show();
		});
		$(this).blur(function(){
			setTimeout(function(){
				$('.findsquare-results').hide();
			}, 100);
		});

		$(this).keydown(function(){
			if($(this).val().length < 3){
				$('.findsquare-results').hide();
			}else{
				$('.findsquare-results').show();
				$.getJSON('https://api.foursquare.com/v2/venues/suggestcompletion', {
						intent: settings.intent,
						oauth_token: settings.oauth_token,
						v: settings.v,
						query: $(this).val()
					}, function(data){
						var result = '';
						var minivenues = data.response.minivenues;
						$(minivenues).each(function(i, minivenue){
							console.log(minivenue);
							result = result + '<li class="findsquare-result"><a href="#" class="findsquare-venue" data-name="' + minivenue.name + '" data-address="' + minivenue.location.address + '" data-city="' + minivenue.location.city + '" data-state="' + minivenue.location.state + '" data-zip="' + minivenue.location.postalCode + '" data-country="' + minivenue.location.country + '"><strong>' + 
								minivenue.name + '</strong> ' + 
								minivenue.location.address + ' ' + 
								minivenue.location.city + ', ' + 
								minivenue.location.state + ' ' + 
								minivenue.location.postalCode + ' ';
								minivenue.location.country + '</a></li>';
						});
						$(result).appendTo('.findsquare-results');
					}
				);
			}
		});
		
		$(document).on('click', '.findsquare-venue', function(e){
			e.preventDefault();
			$('*[data-findsquare="name"]').val($(this).data('name'));
			$('*[data-findsquare="address"]').val($(this).data('address'));
			$('*[data-findsquare="city"]').val($(this).data('city'));
			$('*[data-findsquare="state"]').val($(this).data('state'));
			$('*[data-findsquare="zip"]').val($(this).data('zip'));
			$('*[data-findsquare="country"]').val($(this).data('country'));
		});

	};
}(jQuery));