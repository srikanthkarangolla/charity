// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-migrate-1.1.1
//= require script
//= require jquery.ui.totop
//= require superfish
//= require jquery.equalheights
//= require jquery.mobilemenu
//= require jquery.easing.1.3
//= require owl.carousel
//= require jquery.flexslider-min
//= require kwiks

$(document).ready(function(){
	$().UItoTop({ easingType: 'easeOutQuart' });
	var owl = $("#owl");
	owl.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [995,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [767, 2], // betweem 900px and 601px
		itemsTablet: [700, 2], //2 items between 600 and 0
		itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
		navigation : true,
	});
})
var Main = Main || {};
jQuery(window).load(function() {
	window.responsiveFlag = jQuery('#responsiveFlag').css('display');
	Main.gallery = new Gallery();
	jQuery(window).resize(function() {
		Main.gallery.update();
	});
});
function Gallery(){
	var self = this,
		container = jQuery('.flexslider'),
		clone = container.clone( false );
		this.init = function (){
			if( responsiveFlag == 'block' ){
			var slides = container.find('.slides');
			slides.kwicks({
				max : 500,
				spacing : 0
			}).find('li > a').click(function (){
				return false;
			});
			} else {
				container.flexslider();
			}
		}
		this.update = function () {
			var currentState = jQuery('#responsiveFlag').css('display');
			if(responsiveFlag != currentState) {
				responsiveFlag = currentState;
				container.replaceWith(clone);
				container = clone;
				clone = container.clone( false );
				this.init();
			}
		}
	this.init();
}