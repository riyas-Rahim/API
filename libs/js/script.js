$('#btnGetPlace').click(function() {

    $.ajax({
        url: "./libs/php/place.php",
        type: ' POST',
        dataType: 'json',
        data: {
            postcode: $('#postcode').val(),
            country: $('#country').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#cloud').html(result['data']);
                $('#dt').html(result['data']);
                $('#cc').html(result['data']);
                $('#temperature').html(result['data']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });
}); 

//weather api


$('#btnGetWeather').click(function() {

    $.ajax({
        url: "./libs/php/weather.php",
        type: ' POST',
        dataType: 'json',
        data: {
            latitude: $('.lat_W').val(),
            longitude: $('.lon_W').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#cloud').html(result['data']);
                $('#dt').html(result['data'][0]);
                $('#cc').html(result['data'][0]);
                $('#temperature').html(result['data'][0]);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });
});

//timezone Api



$('#GetTimezone').click(function() {

    $.ajax({
        url: "./libs/php/time.php",
        type: ' POST',
        dataType: 'json',
        data: {
            latitude: $('.lat_T').val(),
            longitude: $('.lon_T').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#cloud').html(result['data']);
                $('#dt').html(result['data']);
                $('#cc').html(result['data']);
                $('#temperature').html(result['data']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });
});



//getcountryinfo API
$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#cloud').html(result['data'][0]['continent']);
                $('#dt').html(result['data'][0]['capital']);
                $('#cc').html(result['data'][0]['languages']);
                $('#temperature').html(result['data'][0]['population']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});
