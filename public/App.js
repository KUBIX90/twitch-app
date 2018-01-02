$(document).ready(function(){
	
	var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"];
	
	function getChannels(){
	for (var i = 0; i < user.length; i++){	
		$.ajax({
		  url: twitchChannel + user[i],
		  data: {
			format: "json",
		  },
		  dataType: "jsonp",
		  type: "GET",
		  success: function(data) {
			
		$("#twitch_channels").append(
			"<article class = 'flex--aligned'>" +
				"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
					"<section id = 'text'>" +
						"<a id = 'title'" + "href = " + data.url + "target = _blank>" + data.display_name + "</a>" +
						"<p id = 'description'>" + data.status + "</p>" +
						"<p id = 'followers'>" + data.followers + "</p>" +
					"</section>" +
					"<img id = 'logo2'/>" +	
			"</article>"
			);
		}
	});	
	}
	};
	
	getChannels();
});