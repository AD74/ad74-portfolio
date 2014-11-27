// JavaScript Document

google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(51.528110, -0.032980),
            zoom: 12,
            zoomControl: false,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
		mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles:	[	{ "featureType": "administrative.locality", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
						{ "featureType": "road.local", "stylers": [ { "visibility": "off" } ] },
						{ "featureType": "road.arterial", "stylers": [ { "visibility": "simplified" } ] },
						{ "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#808080" }, { "visibility": "off" } ] },
						{ "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "visibility": "simplified" }, { "color": "#cccccc" } ] },
						{ "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#d5d5d5" } ] },
						{ "featureType": "water", "stylers": [ { "visibility": "simplified" } ] },{ "featureType": "poi.park" },
						{ "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" } ] } 
					]
						
        }
        var mapElement = document.getElementById('AD74location');
        var map = new google.maps.Map(mapElement, mapOptions);
		
		//Resize
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}); 
        
		var Pin = new google.maps.MarkerImage('img/map-pin-with-shadow.png',
					new google.maps.Size(136,94),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
		
		var Shadow = new google.maps.MarkerImage('img/map-pin-shadow.png',
					new google.maps.Size(110,49),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

		var companyPos = new google.maps.LatLng(51.5464919, 0.0059781);
		/*		
		var locations = [
					['AD74', 'description', '07971317021', 'andy@ad74.co.uk', 'www.ad74.co.uk', 51.5464919, 0.0059781]
        		];
		*/
		var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: Pin,
					shadow: Shadow,
					title:"AD74",
					zIndex: 10});
        
	}