			//Helps plugin load read more after page refresh
			$(window).load(function() {
				//cusomtized for page
				$(function() {
				$('.dot1').dotdotdot();
				$('.dot2').dotdotdot();
				$('.dot3').dotdotdot({
					after: 'a.more'
				});
				$('.dot4').dotdotdot({
					watch: 'window'
				});
				$('.dot5 .pathname').each(function() {
					var path = $(this).html().split( '/' );
					if ( path.length > 1 ) {
						var name = path.pop();
						$(this).html( path.join( '/' ) + '<span class="filename">/' + name + '</span>' );
						$(this).dotdotdot({
							after: '.filename',
							wrap: 'letter'
						});						
					}
				});
			});
		});