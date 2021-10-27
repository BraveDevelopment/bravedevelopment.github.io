//	DESIGNED BY BRAVE#3907
//	You are not allowed to copy, change or sell this product in any way!

$(document).ready(function () {
	$("#startseite_button").click(function () {
		document.getElementById("startseite_button").className =
			"active_button";
		document.getElementById("mining_starten_button").className = "button";
		document.getElementById("mining_kaufen_button").className = "button";
		$("#rigs_starten, #rigs_kaufen").fadeOut(200);
		$("#startseite_page").delay(210).fadeIn(200);
	});

	$("#mining_starten_button").click(function () {
		document.getElementById("mining_starten_button").className =
			"active_button";
		document.getElementById("startseite_button").className = "button";
		document.getElementById("mining_kaufen_button").className = "button";
		$("#startseite_page, #rigs_kaufen").fadeOut(200);
		$("#rigs_starten").delay(210).fadeIn(200);
	});

	$("#mining_kaufen_button").click(function () {
		document.getElementById("mining_kaufen_button").className =
			"active_button";
		document.getElementById("startseite_button").className = "button";
		document.getElementById("mining_starten_button").className = "button";
		$("#startseite_page, #rigs_starten").fadeOut(200);
		$("#rigs_kaufen").delay(210).fadeIn(200);
	});
});
