


$(document).ready(function() {
		loading_screen.finish();

		//Fullpage
		$('#fullpage').fullpage({
			autoScrolling:true,
			touchSensitivity: 15,
			dragAndMove:true,
			normalScrollElementTouchThreshold: 5,
			controlArrows:false,
		});


		//Blotter
		inicializarBlotter();
});



function inicializarBlotter(){
	var text = new Blotter.Text("Acerca de mi:", {
		family : "MyWebFont",
		size : 100,
		fill : "#171717"
	});

	var material = new Blotter.ChannelSplitMaterial();

	material.uniforms.uOffset.value= 0.070;
	material.uniforms.uRotation.value = 138;
	material.uniforms.uApplyBlur.value = 1;
	material.uniforms.uAnimateNoise.value = 1;
	var blotter = new Blotter(material, { texts : text });


	var scope = blotter.forText(text);

	scope.appendTo(document.getElementById("blotterTitleSectionTwo"));

	var elem = $( ".title-section-2 > .b-canvas");
	var element_x = elem.position().left;
	var element_y = elem.position().top + 1;
	var body_x = $(document).width();
	var body_y = $(document).height();
	// blotter.needsUpdate = true;
	$( document ).on( "mousemove", function( event ) {
			var cursor_x = event.pageX;
			var cursor_y = event.pageY;
			var diff_x = Math.abs(cursor_x - element_x);
			var diff_y = Math.abs(cursor_y - element_y);
			var porcent_x = diff_x / body_x;
			var porcent_y = diff_y / body_y;
			var rotation = 90 * porcent_x;
			if(cursor_x > element_x)
				rotation = 180*porcent_x;

			var offset = 0.800*porcent_y;


			// var diff = Math.floor(Math.sqrt(Math.pow(cursor_x - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(cursor_y - (elem.offset().top+(elem.height()/2)), 2)));

			material.uniforms.uOffset.value= offset;
			material.uniforms.uRotation.value = rotation;
			scope.render();

	});

}




// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//Navigation
// 		menu: '#menu',
// 		lockAnchors: false,
// 		anchors:['firstPage', 'secondPage'],
// 		navigation: false,
// 		navigationPosition: 'right',
// 		navigationTooltips: ['firstSlide', 'secondSlide'],
// 		showActiveTooltip: false,
// 		slidesNavigation: false,
// 		slidesNavPosition: 'bottom',
//
// 		//Scrolling
// 		css3: true,
// 		scrollingSpeed: 700,
// 		autoScrolling: true,
// 		fitToSection: true,
// 		fitToSectionDelay: 1000,
// 		scrollBar: false,
// 		easing: 'easeInOutCubic',
// 		easingcss3: 'ease',
// 		loopBottom: false,
// 		loopTop: false,
// 		loopHorizontal: true,
// 		continuousVertical: false,
// 		continuousHorizontal: false,
// 		scrollHorizontally: false,
// 		interlockedSlides: false,
// 		dragAndMove: false,
// 		offsetSections: false,
// 		resetSliders: false,
// 		fadingEffect: false,
// 		normalScrollElements: '#element1, .element2',
// 		scrollOverflow: false,
// 		scrollOverflowReset: false,
// 		scrollOverflowOptions: null,
// 		touchSensitivity: 15,
// 		normalScrollElementTouchThreshold: 5,
// 		bigSectionsDestination: null,
//
// 		//Accessibility
// 		keyboardScrolling: true,
// 		animateAnchor: true,
// 		recordHistory: true,
//
// 		//Design
// 		controlArrows: true,
// 		verticalCentered: true,
// 		sectionsColor : ['#ccc', '#fff'],
// 		paddingTop: '3em',
// 		paddingBottom: '10px',
// 		fixedElements: '#header, .footer',
// 		responsiveWidth: 0,
// 		responsiveHeight: 0,
// 		responsiveSlides: false,
// 		parallax: false,
// 		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
//
// 		//Custom selectors
// 		sectionSelector: '.section',
// 		slideSelector: '.slide',
//
// 		lazyLoading: true,
//
// 		//events
// 		onLeave: function(index, nextIndex, direction){},
// 		afterLoad: function(anchorLink, index){},
// 		afterRender: function(){},
// 		afterResize: function(){},
// 		afterResponsive: function(isResponsive){},
// 		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
// 		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
// 	});
// });
