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
						$('.about_me').delay(600).animate({
							'opacity':1,
							'top':'-50px'
						},1200,function() {
							$('.about_me_last').delay(1600).animate({
								'opacity':1
							},1200);
						});
						break;
					case 3:
						$('.work_link').addClass('active_link');
						fadeInGridItems();
						break;
					case 4:
						$('.skills_link').addClass('active_link');
						skillBars();
						break;
					case 5:
						$('.contact_link').addClass('active_link');
						setTimeout(function() {$('.shown').focus()},1000);
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

		// Reveal skills after page load
		function revealSkills() {
			$('.skills > li').delay(700).animate({
				'opacity': 1,
				'margin': '0 2.5%'
			}, 1600);
		}
		function revealHeader() {
			$('.site_title').fadeIn(1200, revealSkills());
		}
		revealHeader();

		function cycleThroughSkills() {
			$('.skills > li').each(function(index) {
				$(this).animate({
					'color': '#ff2220'
				},500,function() {
					$('.tips').fadeIn();
					$(this).find('.tips li').each(function(index) {
						$(this).delay(400*index).fadeIn();
					});
				});
			});
			console.log('cycleThroughSkills()');
		}
		cycleThroughSkills();

		var barsMade = false;
		function skillBars() {
			var arr = [
				['js', 8.33, 5],
				['php', 6.6, 4],
				['ruby', 4.33, 1],
				['python', 2.6, 1],
				['jquery', 9.2, 5],
				['css', 10, 6],
				['html', 10, 13],
				['wordpress', 8.33, 5],
				['sql', 5.44, 2],
				['oop', 4.33, 1],
				['lamp',10, 8],
				['sass', 6.66, 2]
			]
			
			if ( barsMade === false ) {
				for(var i = 0; i < arr.length; i++) {
					$('.skill').eq(i).after('<div class="years">'+arr[i][2]+'</div>');
				}
				barsMade = true;
			}
			
			setTimeout(function() {
				for (var i = 0; i < arr.length; i++) {
					var w = arr[i][1] * 10 +'%';
					$('.skill .bar').eq(i).animate({
						'width': w
					},2000);
				}
			},1000);
		};

		function fadeInGridItems() {
			setTimeout(function() {
				$('.grid_item').each(function(i) {
					$(this).delay(700*i).animate({
						'opacity':1
					}, 700)
				});
			},700);
		}
		
		function showFormElements() {
			$('.shown').on('input',function() {
				$('.name_div span').fadeOut('fast');
				$('.contact div input').delay(500).fadeIn(1500);
			});
			$('.shown_next').on('input',function() {
				$('.contact div textarea').delay(500).fadeIn(1500);
			});
			$('.contact textarea').on('input',function() {
				$('.contact button').delay(500).animate({
					'opacity': 1
				},1500);
			});
		}
		showFormElements();

		function fadeHeaderToWhite() {
			$('.site_title').animate({
				'color':'#fff'
			},2000);
			console.log('fadeHeaderToWhite()');
		}
		fadeHeaderToWhite();

		$('#contact_form').on('submit',function(e) {
			e.preventDefault();
			$.ajax({
				type: 'POST',
				url: 'mailer.php',
				data: {
					name: $('.name_div input').val(),
					email: $('.email_div input').val(),
					message: $('.message_div textarea').val()
				},
				success: function () {
					$('#contact_form input, #contact_form textarea, #contact_form button').remove();
					$('#contact_form').prepend('<h3>Thank you for your message!</h3>');
				}
			});
		});


	});
});
























