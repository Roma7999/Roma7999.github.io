// function initMap() {
//     var uluru = {lat: -48.7344558, lng: 37.5795725};
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }

// var coords= {lat: -48.7344558, lng: 37.5795725};
function initMap() {

    var coords = {lat: 48.844700, lng: 37.597792},
        container = document.getElementById('map'),
        content = container.innerHTML,
        map = new google.maps.Map(container, {
            zoom: 16,
            center: coords
        });
    var marker = new google.maps.Marker({
        position: coords,
        map: map
        // animation: google.maps.Animation.BOUNCE
    });
}
