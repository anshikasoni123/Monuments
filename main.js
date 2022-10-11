let latitude=22.7868542, longitude=88.3643296;

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

var map = new mapboxgl.Map({
    container:"map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude,latitude],
    zoom: 16
})

map.addControl(
     new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
     })
)

var img1 = document.querySelector("#amber");
var img2 = document.querySelector("#gateway");
var img3 = document.querySelector("#gate");
var img4 = document.querySelector("#lotus");
var img5 = document.querySelector("#victoria");

var marker1 = new mapboxgl.Marker({
    element : img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var marker2 = new mapboxgl.Marker({
    element : img2
})
.setLngLat([72.83466253378626,18.921917141999263])
.addTo(map)

var marker3 = new mapboxgl.Marker({
    element : img3
})
.setLngLat([77.22952042558433,28.61304384243596])
.addTo(map)

var marker4 = new mapboxgl.Marker({
    element : img4
})
.setLngLat([77.25883712558274,28.553614493096962])
.addTo(map)

var marker5 = new mapboxgl.Marker({
    element : img5
})
.setLngLat([88.34258998311451,22.54506581735006])
.addTo(map)