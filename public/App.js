	var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"];
	
	
	$.get(twitchUser + user[2], function(data){
		console.log(data);
		$.get(twitchStream + user[2], function(val){
		console.log(val);
		})
	});
	
	
			/*$("#twitch_channels").append(
				"<article class = 'flex--aligned'>" +
					"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
						"<section id = 'text'>" +
							"<a id = 'title'" + "href = " + data.url + " target = _blank>" + data.display_name + "</a>" +
							"<p id = 'description'>" + data.status + "</p>" +
							"<p id = 'followers'>" + data.followers + "</p>" +
						"</section>" +
						"<img id = 'logo2'/>" +	
				"</article>"
			);*/
					
	

	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	//getChannels();
	
	
	//make another ajax call to get online status from streamAPI (check this) and make sure its placed correctly
	
	//call get channels function upon clicking the all button
	
	//show online/offline on click, will most likely need to use the streamsAPI again for this
	
	//get search bar showing relevant channels upon typing
	
	//move search bar between button and channels, center everything
	
	//style CSS accordingly
	
	//Speed up javascript (check quick way to append and any other best practices)
});