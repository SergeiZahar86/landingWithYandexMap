// "use strict";
//
// function initMap() {
//
//   var image = new google.maps.MarkerImage(
//       'img/widgets/iconmonstr-location-1-48.png',
//       new google.maps.Size(48,54),
//       new google.maps.Point(0,0),
//       new google.maps.Point(24,54)
//   );
//
//   //var customMapTypeId = 'custom_style';
//
//   //var brooklyn = {lat: 54.71805344673631, lng: 20.50015651983569}; //54.71177163661044,
//   // 20.500691917036633
//
//   // Styles a map in night mode.
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 54.7180, lng: 20.5001 }, 
//     zoom: 12,
//     styles: [
//       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{ color: "#263c3f" }],
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#6b9a76" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ color: "#38414e" }],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#212a37" }],
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9ca5b3" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{ color: "#746855" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#1f2835" }],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#f3d19c" }],
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{ color: "#2f3948" }],
//       },
//       {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#17263c" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#515c6d" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{ color: "#17263c" }],
//       },
//     ],
//   });
//
//   var brooklyn = {lat: 54.7180, lng: 20.5001}; //54.71177163661044, 20.500691917036633
//   var marker = new google.maps.Marker({
//     map: map,
//     icon: image,
//     title: 'Brooklyn',
//     position: brooklyn
//   });
//
//   //map.mapTypes.set(customMapTypeId, marker);
//   //map.setMapTypeId(customMapTypeId);
//
// }
//
// window.initMap = initMap;







// "use strict";
//
// window.initMap = function() {
//   var customMapType = new google.maps.StyledMapType([
//     {
//       stylers: [
//         {'saturation': -100},
//         {'lightness': 50},
//         {'visibility': 'simplified'}
//       ]
//     },
//     {
//       elementType: 'labels',
//       stylers: [{visibility: 'on'}]
//     },
//     {
//       featureType: 'road',
//       stylers: [{color: '#bbb'}]
//     }
//   ], {
//     name: 'Dublin'
//   });
//
//   var image = new google.maps.MarkerImage(
//       'img/widgets/gmap-pin.png',
//       new google.maps.Size(48,54),
//       new google.maps.Point(0,0),
//       new google.maps.Point(24,54)
//   );
//
//   var customMapTypeId = 'custom_style';
//
//   var brooklyn = {lat: 41.850, lng: -73.961};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 6,
//     scrollwheel: false,
//     streetViewControl: false,
//     mapTypeControl: false,
//     center: brooklyn, // Brooklyn.
//     mapTypeControlOptions: {
//       mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
//     }
//   });
//
//   var marker = new google.maps.Marker({
//     map: map,
//     icon: image,
//     title: 'Brooklyn',
//     position: brooklyn
//   });
//
//   map.mapTypes.set(customMapTypeId, customMapType);
//   map.setMapTypeId(customMapTypeId);
// }

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [54.7101, 20.5101],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 9
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter());

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        });
    
}

