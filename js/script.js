window.onload=function(){

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        console.log('testing');
        $('nav').addClass('resizing');
    }
    else {
        $('nav').removeClass('resizing');
    }
})

// products

var availableDates = ["04/01/2018", "04/02/2018", "04/03/2018", "04/04/2018", "04/05/2018", "04/06/2018", "04/07/2018"];
function available(date) {
    var string = jQuery.datepicker.formatDate('mm/dd/yy', date);
    return [ availableDates.indexOf(string) != -1];
}

$(function() {
    console.log('date'),
    $( "#datepicker" ).datepicker({
    dateFormat: 'mm/dd/yy',
    beforeShowDay: available,
        onSelect: function(dateText) {
            console.log("Selected date: " + dateText);
            if (dateText == '04/01/2018') {
                $('.item').removeClass('show');
                let day1 = ['#p01', '#p03', '#p07'];
                 jQuery.each( day1, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/02/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p02', '#p04', '#p05', '#p06', '#p08', '#p09', '#p31'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/03/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p30'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/04/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p10', '#p11', '#p12', '#p13', '#p14', '#p15'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/05/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p16', '#p17', '#p18'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/06/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p19', '#p20', '#p21', '#p22', '#p23', '#p24'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/06/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p25', '#p26', '#p27'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '04/07/2018') {
                $('.item').removeClass('show');
                let day2 = ['#p29'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else {
                $('.item').removeClass('show');
            }
            event.preventDefault();
        }
    });
    $( "#food" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let food = ['#p01', '#p02', '#p03', '#p04', '#p08', '#p09', '#p10', '#p11', '#p12', '#p13', '#p17', '#p19', '#p20', '#p21', '#p22', '#p23', '#p24', '#p25', '#p26', '#p27'];
        jQuery.each( food, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#shopping" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let shopping = ['#p05', '#p06', '#p16'];
        jQuery.each( shopping, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#supplies" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let supplies = ['#p7', '#p14', '#p15'];
        jQuery.each( supplies, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#social" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let supplies = ['#p18', '#p29', '#p30', '#p31'];
        jQuery.each( supplies, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#medical" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let supplies = ['#p28'];
        jQuery.each( supplies, function( i, val ) {
            $( val ).addClass("show");
        });
    })
});


function myFunction() {
    event.preventDefault();
    document.getElementById("myDropdown").classList.toggle("show");
}

}

//d3 piechart

var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "March Expenditure",
            "fontSize": 20,
            "font": "exo"
        },
        "subtitle": {
            "text": "My expenditure in March 2018",
            "color": "#999999",
            "fontSize": 10,
            "font": "exo"
        },
        "location": "pie-center",
        "titleSubtitlePadding": 10
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 590,
        "pieInnerRadius": "77%",
        "pieOuterRadius": "79%"
    },
    "data": {
        "sortOrder": "value-asc",
        "content": [
            {
                "label": "Food",
                "value": 56,
                "color": "#E6A2C5"
            },
            {
                "label": "Shopping",
                "value": 4,
                "color": "#C7CEF6"
            },
            {
                "label": "Supplies",
                "value": 8,
                "color": "#D8A49B"
            },
            {
                "label": "Social",
                "value": 13,
                "color": "#7496D2"
            },
            {
                "label": "Medication",
                "value": 15,
                "color": "#FDDDA4"
            },
            {
                "label": "Transport",
                "value": 3,
                "color": "#76A08A"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "label-percentage2",
            "pieDistance": 20
        },
        "inner": {
            "format": "none"
        },
        "mainLabel": {
            "font": "exo",
            "fontSize": 14
        },
        "percentage": {
            "color": "#999999",
            "font": "exo",
            "fontSize": 11,
            "decimalPlaces": 0
        },
        "value": {
            "color": "#cccc42",
            "font": "exo",
            "fontSize": 11
        },
        "lines": {
            "enabled": true,
            "style": "straight",
            "color": "#777777"
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "colors": {
            "segmentStroke": "#000000"
        }
    },
    //tooltips
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {percentage}%",
        "styles": {
            "font-size": 12,
        }
    },
});