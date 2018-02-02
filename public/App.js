var twitchStreamAPI = "https://wind-bow.glitch.me/twitch-api/streams/";
	twitchChannelAPI = "https://wind-bow.glitch.me/twitch-api/channels/";

var user = ["ESL_SC2", "LegendaryLea", "cretetion", 
			"freecodecamp", "Miss_Rage", "Pandagirl91", 
			"RobotCaleb", "noobs2ninjas"];

function twitchChannel(username){
		$.get(twitchChannelAPI + username, function(data){
				$("#twitch_channels").append(`
				<article id = '${username}' class = 'flex flex--aligned-center channel--margin'>
					<img id = 'channel_icon' src = '${data.logo}' alt = 'data.display_name'/>
					<section id = 'channel_info'>
						<a id = 'channel_title' href = ${data.url} target = '_blank' rel="noopener">${data.display_name}</a>
						<p id = 'channel_description'>${data.game}</p>
						<p id = 'channel_followers'>Followers ${data.followers}</p>
					</section>
					<p></p>
				</article>`);
			$.get(twitchStreamAPI + username, function(val){		
				if(val.stream === null){
                    $("#" + username).css("box-shadow", "5px 0px 10px red")
									 .addClass("channel--offline");
                    $("#" + username + ">p")
					.text("Offline")
					.css("color","red")
                } else {
					$("#" + username).css("box-shadow", "5px 0px 10px green")
									 .addClass("channel--online");
                    $("#" + username + ">p")
							.text("Online")
                            .css("color","green")
                        }
			})
		})
};
	
//////////////////////////////////////////////////////////////////

$(document).ready(function(){
	for (i = 0; user.length > i; i ++){
		twitchChannel(user[i]);
	}
});

$("#channels_all").click(function(){
	$('.channel--online, .channel--offline').show();
});

$("#channels_online").click(function(){
	$('.channel--online').show();
    $('.channel--offline').hide();
});

$("#channels_offline").click(function(){
	$('.channel--offline').show();
    $('.channel--online').hide();
});

$("#search-box").keyup(function(){
  var inputValue = $("#search-box")
	.val()
    .toLowerCase();
  var userLowerCase = user.map(function(x) {
    return x.toLowerCase();
  });
	
for(i = 0; user.length > i; i ++){
	if(userLowerCase[i].indexOf(inputValue) !== -1){
		console.log(userLowerCase[i]);
		$("#" + user[i]).removeClass("channel--display-none");
	} else {
		$("#" + user[i]).addClass("channel--display-none");
	}
}
});

