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

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Taipei vs. London'
    },
    subtitle: {
        text: 'Source: numbeo.com'
    },
    xAxis: {
        categories: [
            'Milk',
            'Rice',
            'Eggs',
            'Cheese',
            'Wine',
            'Beer',
            'Metro Ticket',
            'Meal outside',
            'Cappuccino',
            'Internet',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Pounds (£)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>£ {point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Taipei',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]

    }, {
        name: 'London',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5]

    }]
});

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