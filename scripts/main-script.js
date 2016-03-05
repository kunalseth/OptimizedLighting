
var w=800;
var h=800;
var pwr=60;//default is tungsten
var eff=15;//default is tungsten


//initial slider
$( "#slider1" ).slider({

    orientation: "horizontal",
    range: "min",
    value: 60,
    min: 60,
    max: 120,
    step: 20,
    animate: true,
    slide: function (event, ui) {
        $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
        var power=+(ui.value);
        console.log(ui.value);
    },
    create: function (event, ui) {
        var tooltip = $('<div class="ui-slider-tooltip" />').css({
            position: 'absolute',
            top: -25,
            left: -10
        });
    }
});
//end of initial slider

//Selecting and saving the value of the radio button
var bulb=$("input[type='radio'][name='bulb']:checked").val();
//console.log(bulb);
$('input').on('change', function() {
    bulb=($("input[name='bulb']:checked").val());
});
//End of radio

//Selecting and saving values of dimensions
var len=+(document.getElementById("length").value);
$('input').on('change', function() {
    len=+(document.getElementById("length").value);
});
var brd=+(document.getElementById("breadth").value);
$('input').on('change', function() {
    brd=+(document.getElementById("breadth").value);
});
var hgt=+(document.getElementById("height").value);
$('input').on('change', function() {
    hgt=+(document.getElementById("height").value);
});
//End of text box

$( ".bulb" ).change(function()
{
    if (bulb == 'inc') {

        eff=15;
        pwr=60;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 60,
            min: 60,
            max: 120,
            step: 20,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
            },
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
            }
        });
    }
    else if (bulb == 'cfl') {
        eff=60;
        pwr=10;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 10,
            min: 10,
            max: 50,
            step: 10,
            animate: true,
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
            }
        });
    }
    else if (bulb == 'led') {
        eff=90;
        pwr=5;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 5,
            min: 5,
            max: 50,
            step: 5,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
            },
            slide: function (event, ui) {
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                pwr=+ui.value;
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
            }
        });
    }
});

function calculate()
{
    var num;
    var area=len*brd*hgt;
    num=Math.round((300*area)/(pwr*eff*0.5*0.8));
    console.log(num);
    document.getElementById("demo").innerHTML=num;
    //document.write(num);
}


