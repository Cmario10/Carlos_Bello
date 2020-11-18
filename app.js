window.addEventListener('load', function(){
	new Glider(document.querySelector('.voltapaises'), {
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: '.voltita',
		arrows: {
			prev: '.prev',
			next: '.next'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});