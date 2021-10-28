//	DESIGNED BY BRAVE#3907
//	You are not allowed to copy, change or sell this product in any way!

$(function () {
    function display(bool) {
        if (bool) {
            $(".container").show();
            $(".element2_1").hide();
            $(".element2_2").hide();
            $(".element2_3").hide();
            // $.post("http://esx_kryptomining/masterterminal")
        } else {
            $(".container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        } else if (event.data.type === "updateBalance") {
            let money = event.data.balance
            let guthaben = formatter.format(event.data.guthaben)
            let strom = formatter.format(event.data.strom)
            let btcwert = formatter.format(event.data.btcwert)
            let vorname = event.data.vorname
            let nachname = event.data.nachname
            let balancecash = formatter.format(event.data.balancecash)
            let wartung = formatter.format(event.data.wartung)
            
            $('.balance').html(money);
            $('.aufgeladenes').html(guthaben);
            $('.strom').html(strom);
            $('.aktienkursnumber').html(btcwert);
            $('.balancecash').html(balancecash);
            $('.wartung').html(wartung);
            

        } else if (event.data.type === "inforigs") {
            let size1 = event.data.size1
            let size2 = event.data.size2
            let size3 = event.data.size3
            let minedbtc = event.data.minedbtc

        
            if (size1 == true) {
                $('.element2_1').show();
                $('.rig1').hide();

            }
            if (size2 == true) {
                $('.element2_2').show();
                $('.rig2').hide();
            }
            if (size3 == true) {
                $('.element2_3').show();
                $('.rig3').hide();
            }

            if (size1 == true & size2 == true & size3 == true) {
                $('#mining_kaufen_button').hide();

            }

            $('.btcprohour').show();
            $('.minedbtc').html(minedbtc);
            $('.minedbtc').show();

            
        } else if (event.data.type === "masterterminal") {
            let checked = event.data.checked

        
            if (checked == true) {
                $('.terminal').show();
            } else {
                $('.terminal').hide();
            }

            
        } 
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://esx_kryptomining/exit', JSON.stringify({}));
            return
        }
    };
    
    $(".restart").click(function () {
        
        $.post("http://esx_kryptomining/restart")

        return
     })

    $(".id1").click(function () {
       $(".miningrigmieten").hide();
       $(".size1").hide();
        $(".size2").hide();
        $(".size3").hide();
        $('.btcprohour').hide();
        $('.minedbtc').hide();
        $(".steigend").hide();
        $(".sinkend").hide();
        $(".random").hide();
        $.post("http://esx_kryptomining/info")
       $(".info-label").show();
        return
    })

    $(".id2").click(function () {
        $.post("http://esx_kryptomining/inforigs")
        $(".miningrigmieten").hide();
        $(".info-label").hide();
        $(".miningrigs").show();
        $(".size1").hide();
        $(".size2").hide();
        $(".size3").hide();
        $(".steigend").hide();
        $(".sinkend").hide();
        $(".random").hide();
        return;
    })

    $(".id3").click(function () {
        $(".info-label").hide();
        $(".size1").hide();
        $(".size2").hide();
        $(".size3").hide();
        $('.btcprohour').hide();
        $('.minedbtc').hide();
        $(".steigend").hide();
        $(".sinkend").hide();
        $(".random").hide();
        $(".miningrigmieten").show();
        return;
    })

    $(".id4").click(function () {
        $.post("http://esx_kryptomining/auszahlen")
        return;
    })

    $(".id5").click(function () {
        $.post("http://esx_kryptomining/give")
        return;
    })

    $(".paywartung").click(function () {
        $.post("http://esx_kryptomining/paywartung")
        return;
    })

    $(".terminal").click(function () {
        $(".info-label").hide();
        $(".size1").hide();
        $(".size2").hide();
        $(".size3").hide();
        $('.btcprohour').hide();
        $('.minedbtc').hide();
        $(".miningrigmieten").hide();
        $(".steigend").show();
        $(".sinkend").show();
        $(".random").show();
        

        return;
    })

    $(".aufladen").click(function () {
        $.post("http://esx_kryptomining/aufladen")

        return;
    })

    $(".paystrom").click(function () {
        $.post("http://esx_kryptomining/paystrom")

        return;
    })

    $(".buy1").click(function () {
        $.post("http://esx_kryptomining/buy1")

        return;
    })

    $(".buy2").click(function () {
        $.post("http://esx_kryptomining/buy2")

        return;
    })

    $(".buy3").click(function () {
        $.post("http://esx_kryptomining/buy3")

        return;
    })

    $(".steigend").click(function () {
        $.post("http://esx_kryptomining/steigend")

        return;
    })

    $(".sinkend").click(function () {
        $.post("http://esx_kryptomining/sinkend")

        return;
    })

    $(".random").click(function () {
        $.post("http://esx_kryptomining/random")

        return;
    })



    //when the user clicks on the submit button, it will run
    $("#submit").click(function () {
        let inputValue = $("#input").val()
        if (inputValue.length >= 100) {
            $.post("http://esx_kryptomining/error", JSON.stringify({
                error: "Input was greater than 100"
            }))
            return
        } else if (!inputValue) {
            $.post("http://esx_kryptomining/error", JSON.stringify({
                error: "There was no value in the input field"
            }))
            return
        }
        // if there are no errors from above, we can send the data back to the original callback and hanndle it from there
        $.post('http://esx_kryptomining/main', JSON.stringify({
            text: inputValue,
        }));
        return;
    })

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
})



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
        $.post("http://esx_kryptomining/inforigs")
        

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
