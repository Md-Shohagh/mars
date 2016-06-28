$(function() {
		$('#foo2').carouFredSel({
			responsive: true,
			auto: false,
			prev: '#prev2',
			next: '#next2',
			pagination: "#pager2",
			mousewheel: true,
			swipe: {
				onMouse: true,
				onTouch: true,
			}
		});

	});