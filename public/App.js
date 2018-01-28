var twitchUser = "https://wind-bow.glitch.me/twitch-api/users/";
	twitchStream = "https://wind-bow.glitch.me/twitch-api/streams/";
	twitchChannel = "https://wind-bow.glitch.me/twitch-api/channels/";

var user = ["ESL_SC2", "OgamingSC2", "cretetion", 
			"freecodecamp", "Miss_Rage", "Pandagirl91", 
			"RobotCaleb", "noobs2ninjas"];

function showChannel(username){
		$.get(twitchChannel + username, function(data){
			var userTitle = function 
				$("#twitch_channels").append(
					"<article id = " + username + " class = 'flex channel--margin flex--aligned-center'>" +
						"<img id = 'logo'" + "src = '" + data.logo + "' alt = '" + data.display_name + "'/>" +
						"<section id = 'text'>" +
							"<a id = 'title'" + "href = " + data.url + " target = _blank " + "at = " + data.display + ">" + data.display_name + "</a>" +
							"<p id = 'description'>" + data.game + "</p>" +
							"<p id = 'followers'>" + "Followers " + data.followers + "</p>" +
						"</section>" +
						"<p></p>" +
					"</article>"
				);
			$.get(twitchStream + username, function(val){		
				if(val.stream === null){
                    $("#" + username).css("box-shadow", "5px 0px 10px red");
                    $("#" + username + ">p").text("Offline")
											.css("color","red");
                } else {$("#" + username).css("box-shadow", "5px 0px 10px green");
                        $("#" + username + ">p").text("Online")
                                    .css("color","green");
                        }
			})
		})
};

function showOnlineChannels(username){
	$("#" + username).removeClass("channel--display-none");
	$.get(twitchStream + username, function(data){
		if(data.stream === null){
			$("#" + username).addClass("channel--display-none");
		}
	});
}

function showOfflineChannels(username){
	$("#" + username).removeClass("channel--display-none");
	$.get(twitchStream + username, function(data){
		if(data.stream !== null){
			$("#" + username).addClass("channel--display-none");
		}
	});
}
	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	
	for (i = 0; user.length > i; i ++){
		showChannel(user[i]);
	}
});

$("#channels_all").click(function(){
	for (i = 0; user.length > i; i ++){
		$("#" + user[i]).removeClass("channel--display-none");
	};
});

$("#channels_online").click(function(){
	for(i = 0; user.length > i; i ++){
		showOnlineChannels(user[i]);
	}
});

$("#channels_offline").click(function(){
	for(i = 0; user.length > i; i ++){
		showOfflineChannels(user[i]);
	}
});

//Search channels upon typing
$("#search-box").keyup(function(){
	var inputValue = $("#search-box").val().toLowerCase();
	
	//Get title text and compare to input value?
});

