$(document).ready(function(){
	
	var twitchAPI = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"]
	
	$.ajax({
		  url: twitchAPI,
		  data: {
			format: "json",
		  },
		  dataType: "jsonp",
		  type: "GET",
		  success: function(data) {
			  console.log(data);
		  }
	});
});