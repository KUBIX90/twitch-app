	var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "Miss_Rage", "Pandagirl91", 
				"RobotCaleb", "noobs2ninjas"];
	
function showChannel(username){
		$.get(twitchChannel + username, function(data){
			console.log(data);
				$("#twitch_channels").append(
					"<article id = " + username + " class = 'flex--aligned channels--margin'>" +
						"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
						"<section id = 'text'>" +
							"<a id = 'title'" + "href = " + data.url + " target = _blank>" + data.display_name + "</a>" +
							"<p id = 'description'>" + data.game + "</p>" +
							"<p id = 'followers'>" + "Followers " + data.followers + "</p>" +
						"</section>" +
					"</article>"
				);
			$.get(twitchStream + username, function(val){
				/*if(val.stream === null){
					$("#" + username).css("box-shadow", "3px red solid")
				} else {$("#" + username).css("border", "3px green solid")}*/
			})
		})
};
	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	
	for (i = 0; user.length > i; i ++){
		showChannel(user[i]);
	}
	
	
	
});