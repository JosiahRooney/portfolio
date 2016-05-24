jQuery(function($) {
	$(document).ready(function() {

		// FullPage Init
		$('#fullpage').fullpage({
			anchors:['top','about','work','skills','contact'],
			onLeave: function(index, nextIndex, direction){
				$('.active_link').removeClass('active_link');
				switch(nextIndex) {
					case 1:
					$('.top_link').addClass('active_link');
					break;
					case 2:
					$('.about_link').addClass('active_link');
					break;
					case 3:
					$('.work_link').addClass('active_link');
					break;
					case 4:
					$('.skills_link').addClass('active_link');
					break;
					case 5:
					$('.contact_link').addClass('active_link');
					break;
				}
				window.onkeydown = function(e) {
					if (e.keyCode == '38' || e.keyCode == '40') {
						return false;
					}
				}
			}
		});

		function scrollWithArrowKeys (){

			var keypressed = false;

			window.onkeydown = function(e) {

				if (!keypressed) {
					keypressed = true;
					if (e.keyCode == '38') {
						e.preventDefault();
						$.fn.fullpage.moveSectionUp();
					}
					if (e.keyCode == '40') {
						e.preventDefault();
						$.fn.fullpage.moveSectionDown();
					}
				}
			};

			window.onkeyup = function(e) {
				keypressed = false;
			};
		}
		scrollWithArrowKeys();

		// Lettering.js
		//$('.site_title').lettering();

		// Hover reveal drop downs
		$('.skills > li').hover(function() {
			$(this).find('.tips').slideDown();
		}, function() {
			$(this).find('.tips').delay(500).fadeOut();
		});

		// Reveal skills after page load
		function revealSkills() {
			$('.skills > li').delay(700).animate({
				'opacity': 1,
				'padding': '0 1.4%'
			}, 1600);
		}
		function revealHeader() {
			$('.site_title').fadeIn(1200, revealSkills());
		}
		revealHeader();

		function cycleThroughSkills() {
			$('.skills > li').each(function(index) {
				$(this).delay(500*index).animate({
					'color': '#bf5d58'
				},500);
				$(this).animate({
					'color': 'inherit'
				},500);
			});
		}
		cycleThroughSkills();

		function fadeHeaderToWhite() {
			$('.site_title').animate({
				'color':'#fff'
			},2000,function() {
				$('.hidden_title').animate({
					'opacity': 1
				},2000);
			});
		}
		fadeHeaderToWhite();

	});
});
























