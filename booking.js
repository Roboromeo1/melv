$(function () {
    // add input listeners
    google.maps.event.addDomListener(window, 'load', function () {
        var from_places = new google.maps.places.Autocomplete(document.getElementById(
            'from_places'));
        var to_places = new google.maps.places.Autocomplete(document.getElementById(
            'to_places'));

        google.maps.event.addListener(from_places, 'place_changed', function () {
            var from_place = from_places.getPlace();
            var from_address = from_place.formatted_address;
            $('#origin').val(from_address);
        });

        google.maps.event.addListener(to_places, 'place_changed', function () {
            var to_place = to_places.getPlace();
            var to_address = to_place.formatted_address;
            $('#destination').val(to_address);
        });

    });
    // calculate distance
    function calculateDistance() {
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            //unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
            unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
            avoidHighways: false,
            avoidTolls: false
        }, callback);
    }
    // get distance results
    function callback(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
            $('#result').html(err);
        } else {
            var origin = response.originAddresses[0];
            var destination = response.destinationAddresses[0];
            if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                $('#result').html("Better get on a plane. There are no roads between " + origin +
                    " and " + destination);
            } else {
                var distance = response.rows[0].elements[0].distance;
                var duration = response.rows[0].elements[0].duration;
                console.log(response.rows[0].elements[0].distance);
                var distance_in_kilo = distance.value / 1000; // the kilom
                var distance_in_mile = distance.value / 1609.34; // the mile
                var duration_text = duration.text;
                var duration_value = duration.value;
                $('#in_mile').text(distance_in_mile.toFixed(2));
                $('#in_kilo').val(distance_in_kilo.toFixed(2));
                $('#duration_text').val(duration_text);
                $('#duration_value').val(duration_value);
                $('#from').val(origin);
                $('#to').val(destination);

                //base price
                var basePrice = 5.99;
                //Initail price per km 
                var InitPriceKm = 1.09;
                var DeliveryTime;
                $('#sel1').on('click', function () {
                   var DeliveryTime = $(this).val();
                   console.log(DeliveryTime+"v");
                });
                // Premium Price 60 mins actual fare * 1.50 , 9- mins act fa * 1.30 , 120 mins dealy act fare * 1.20
                var ActualFare;
                ActualFare = (basePrice + (distance_in_kilo * InitPriceKm)).toFixed(2);
                if(DeliveryTime =="60"){
                    ActualFare = ((basePrice + (distance_in_kilo * InitPriceKm)).toFixed(2)) * 1.50;
                }else if (DeliveryTime == "90"){
                    ActualFare = ((basePrice + (distance_in_kilo * InitPriceKm)).toFixed(2)) * 1.30;
                }else if(DeliveryTime == "120"){
                    ActualFare =((basePrice + (distance_in_kilo * InitPriceKm)).toFixed(2)) * 1.20;
                }else if(DeliveryTime == "regular"){
                    ActualFare = (basePrice + (distance_in_kilo * InitPriceKm)).toFixed(2);
                }

                console.log(DeliveryTime+"v");

                $('#totalPrice').val('$' + ActualFare);
                console.log(ActualFare);
            }
        }
    }
    // print results on submit the form
    $('#distance_form').submit(function (e) {
        e.preventDefault();
        calculateDistance();
    });

});