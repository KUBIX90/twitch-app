	var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"];
	
function showChannel(username){
		$.get(twitchChannel + username, function(data){
				$("#twitch_channels").append(
					"<article id = " + username + " class = 'flex--aligned'>" +
						"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
						"<section id = 'text'>" +
							"<a id = 'title'" + "href = " + data.url + " target = _blank>" + data.display_name + "</a>" +
							"<p id = 'description'>" + data.status + "</p>" +
							"<p id = 'followers'>" + "Followers " + data.followers + "</p>" +
						"</section>" +
					"</article>"
				);
			$.get(twitchStream + username, function(val){
				if(val.stream === null){
					$("#" + username).css("color", "red")
				} else {$("#" + username).css("color", "green")}
			})
		})
	
};

	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	
	for (i = 0; user.length >= i; i ++){
		showChannel(user[i]);
	}
	
});