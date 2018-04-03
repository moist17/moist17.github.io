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


$(function() {
    $( "#datepicker" ).datepicker({
        onSelect: function(dateText) {
            console.log("Selected date: " + dateText);
            if (dateText == '03/01/2018') {
                $('.item').removeClass('show');
                let day1 = ['#spaghetti', '#scarf', '#socks'];
                 jQuery.each( day1, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else if (dateText == '03/02/2018') {
                $('.item').removeClass('show');
                let day2 = ['#mushroom', '#cn_leaf', '#o_juice'];
                jQuery.each( day2, function( i, val ) {
                    $( val ).addClass('show');
                });
            } else {
                $('.nodata').html('<p>No data this day.</p>');
                $('.item').removeClass('show');
            }
            event.preventDefault();
        }
    });
    $( "#food" ).click(function() {
        $('.nodata').removeClass('show');
        $('.item').removeClass('show');
        event.preventDefault();
        let food = ['#fox_cookie', '#pad_thai', '#o_juice', '#spaghetti', '#ice_cream', 'cn_leaf', 'mushroom', 'chicken_burger', 'cheese_powder', 'chocolate_milk'];
        jQuery.each( food, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#shopping" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let shopping = ['#shopping', '#socks', '#red_scarf'];
        jQuery.each( shopping, function( i, val ) {
            $( val ).addClass("show");
        });
    })
    $( "#supplies" ).click(function() {
        $('.item').removeClass('show');
        event.preventDefault();
        let supplies = ['#bowl', '#shower_gel', '#tissue_paper'];
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