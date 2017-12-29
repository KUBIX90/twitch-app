$(document).ready(function(){
	
	var twitchUser = "https://wind-bow.gomix.me/twitch-api/users/";
	    twitchStream = "https://wind-bow.gomix.me/twitch-api/streams/";
		twitchChannel = "https://wind-bow.gomix.me/twitch-api/channels/";
	
	var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
				"freecodecamp", "storbeck", "habathcx", 
				"RobotCaleb", "noobs2ninjas"]
	
	$.ajax({
		  url: twitchChannel + user[3],
		  data: {
			format: "json",
		  },
		  dataType: "jsonp",
		  type: "GET",
		  success: function(data) {
			  console.log(data);
			  $("#logo").attr({src: data.logo,
							   alt: data.display_name});
			  $("#title").html(data.display_name)
						 .attr({"href": data.url,
								"target": "_blank"});
			  $("#description").html(data.status);
			  $("#followers").html(data.followers);
		  }
	});
});