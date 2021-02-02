$( document ).ready(function() {
	var titles=['Assistance','Highway','Highway Direction', 'What has happened to your vehicle?','Events']
 /*   $( ".btn" ).click(function() {
	var id = $(this).parent().attr('id');
	$('#'+id).hide(1000);
	$('#'+id+'1').show(1000);
	 $('#'+id).addClass( 'hideSet').removeClass('showSet' );
	 $('#'+id+'-1').removeClass('hideSet' ).addClass( 'showSet');
	});
	
	var $this =$(this).parent(),
	id=$this.attr('id');
	currentParent = $this.closest("fieldset"),
	nextParent = currentParent.next();	
	currentParent.hide();
	nextParent.show();
	var nextParentId=nextParent.attr('id');
	
	if ( nextParentId.indexOf('-') > -1 ) 
		$('#title').text(titles[nextParentId.slice(-1)]);
	else
			$('#title').text(titles[0]);
   if(nextParentId=='step-4' ){
		setTimeout(function(){ 
        $('#step-4').closest("fieldset").next().show();
		 $('#step-4').hide();
		 $('.navbar').hide();
		}, 3000);
	}
});*/

var map;
var mgr;
var elevator;
var myOptions = {
    zoom: 2,
    center: new google.maps.LatLng(46.87916, -3.32910),
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
    }, // here´s the array of controls
    //disableDefaultUI: true, // a way to quickly hide all controls
      streetViewControl: false,
             mapTypeControl: false,
    scaleControl: true,
};
var map = new google.maps.Map(document.getElementById('map'), myOptions);

google.maps.event.addListenerOnce(map, 'idle', function() {
    var bounds = map.getBounds();
    var southWest = bounds.getSouthWest();
    var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();
    for (var i = 0; i < 400; i++) {
        var newLat = southWest.lat() + (latSpan * Math.random());
        var newLng = southWest.lng() + (lngSpan * Math.random());  
        var latlng = new google.maps.LatLng(newLat,newLng);
    
        var marker = new google.maps.Marker({
            title: 'Test',
            position: latlng,
            map: map,
            draggable: true
        });
    
        var mapLabel = new MapLabel({
            text: 'Test'
        });
        
        mapLabel.bindTo('position', marker);
        mapLabel.bindTo('map', marker);

    }
});	

 $( "#vehInfo" ).click(function() {
      window.location.href='highway.html';
 });



});


