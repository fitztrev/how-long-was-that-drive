var from_loc;
var to_loc;

$('.set_location').click(function(e){
	e.preventDefault();

	$('#loading').show();
	$(this).hide();

	navigator.geolocation.getCurrentPosition(save_location, handle_error, {
		enableHighAccuracy: true,
		timeout: 30000
	});
});

function save_location(position) {
	// Debug geolocation results
	$('#logs').append(
		position.coords.latitude + ', ' + position.coords.longitude + ' (' + position.coords.accuracy + 'm accuracy)<br>'
	);

	if ( from_loc ) {
		to_loc = position.coords;
		calculate_distance();
	} else {
		from_loc = position.coords;
		$('#to_loc').show();
	}
	$('#loading').hide();
}

function handle_error(err) {
	if (err.code == 1) {
		alert('Location permission needed.');
	} else {
		alert('Network error: Can\'t find position.');
	}
}

function calculate_distance() {
	var meters = getDistance(from_loc.latitude, from_loc.longitude,
	                         to_loc.latitude, to_loc.longitude);
	var yards = meters * 1.09361;
	$('#results').html(round(yards) + ' yards (' + round(meters) + ' meters)');
}

function round(num) {
	return Math.ceil(num * 100)/100;
}
