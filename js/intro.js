
$(document).ready(function(e) {
	$(".txt_title_out").mouseover(function(e) {
		$(".txt_title_over").removeClass("hidden");
		$(".txt_title_out").addClass("hidden");
	});
	$(".txt_title_over").mouseout(function(e) {
		$(".txt_title_over").addClass("hidden");
		$(".txt_title_out").removeClass("hidden");
	});
	$(".txt_title_over").click(function(e) {
		window.location = "intro.html";
		//$("#txt_intro").removeClass("hidden");
	});

	$(".enter1").mouseover(function(e) {
		$(".enter2").removeClass("hidden");
		$(".enter1").addClass("hidden");
	});
	$(".enter2").mouseout(function(e) {
		$(".enter2").addClass("hidden");
		$(".enter1").removeClass("hidden");
	});
	$(".enter2").click(function(e) {
		window.location = "sequence/1.html";
		//$("#txt_intro").removeClass("hidden");
	});
	
	$("#ri").hover(function(e) {
		$("#chelsea").toggleClass("hidden");
		toggleStates("#ri", e);
	});
	$("#va").hover(function(e) {
		$("#mom").toggleClass("hidden");
		toggleStates("#va", e);
	});
	$("#md").hover(function(e) {
		$("#charlie").toggleClass("hidden");
		toggleStates("#md", e);
	});
	$("#cn").hover(function(e) {
		$("#dad").toggleClass("hidden");
		toggleStates("#cn", e);
	});
	
	$(window).resize(resizer);
});
$(window).load(function(e) {
	resizer();
	for (var i in states) {
		$(states[i]).removeClass("hidden");
	}
});

function toggleStates(state, e) {
	if (e.type == "mouseleave") {
		showAll(state);
	}
	else {
		hideAllBut(state);
	}
}
function resizer(e) {
	var im = $("#bgmap");
	$("#state_cont").width(im.width());
	$("#state_cont").height(im.height());
	$("#state_cont").offset(im.offset());
	
	if (im.offset().left > 600) {
		setTimeout(resizer, 600);
		return;
	}
	
	var STATE_SCALE = .65;
	var ratio = im.width() / 785;
	$("#ri").css("width", ratio * 58 * STATE_SCALE + "px");
	$("#ri").css("height", ratio * 55 * STATE_SCALE + "px");
	$("#cn").css("width", ratio * 49 * STATE_SCALE + "px");
	$("#cn").css("height", ratio * 54 * STATE_SCALE + "px");
	$("#va").css("width", ratio * 148 * STATE_SCALE + "px");
	$("#va").css("height", ratio * 110 * STATE_SCALE + "px");
	$("#md").css("width", ratio * 81 * STATE_SCALE + "px");
	$("#md").css("height", ratio * 58 * STATE_SCALE + "px");
}

var states = ["#ri", "#cn", "#va", "#md"];
function hideAllBut(state) {
	for (var i in states) {
		if (states[i] != state) {
			//$(states[i]).addClass("faded");
			$(states[i]).css("z-index", $(states[i]).css("z-index") - 990);
		}
	}
	
	switch (state) {
	case "#ri":
		$(".profile").css("background", "rgba(255, 249, 250, .8)");
		break;
	case "#cn":
		$(".profile").css("background", "rgba(254, 254, 254, .8)");
		break;
	case "#va":
		$(".profile").css("background", "rgba(248, 249, 253, .8)");
		break;
	case "#md":
		$(".profile").css("background", "rgba(248, 252, 255, .8)");
		break;
	}
}
function showAll() {
	for (var i in states) {
		var zind = parseInt($(states[i]).css("z-index"));
		if (zind < 500)
			$(states[i]).css("z-index", zind + 990);
	}
}