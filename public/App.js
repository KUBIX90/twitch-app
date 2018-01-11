	var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"];
	
function showChannels(){
	for (var i = 0; i < user.length; i++){
		$.get(twitchChannel + user[i], function(data){
			$.get(twitchStream + user[i], function(val){
				console.log(val);
				$("#twitch_channels").append(
					"<article class = 'flex--aligned'>" +
						"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
						"<section id = 'text'>" +
							"<a id = 'title'" + "href = " + data.url + " target = _blank>" + data.display_name + "</a>" +
							"<p id = 'description'>" + data.status + "</p>" +
							"<p id = 'followers'>" + "Followers " + data.followers + "</p>" +
						"</section>" +
					"</article>"
				);
			if(val.stream == null){
				$("#twitch_channels").css("color", "red");
			}
			})
		})
	};
};

	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){

	showChannels();

	$("#channels_all").click(function(){
		$("#twitch_channels").empty();
		showChannels();
	});

});