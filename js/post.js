// $(document).ready(function() {
// 	$("form").submit(function() {
// 		var $form = $(this),
// 			$reqField = $(".required", $form);

// 		if ($reqField.val() == "") {
// 			$reqField.css('border', '1px solid #EB2828');
// 		} else {
// 			$reqField.css('border', '1px solid #fff;');
// 			var data = $form.serialize();

// 			$.post(
// 				"./mail.php",
// 				data,
// 				function(resp) {
// 					$(".modal-questions, .modal-order").animate({opacity: 0, top: '45%'}, 200, function() {
// 						$(this).css('display', 'none');
// 						$('#form-overlay').fadeIn(400);
// 						$(".modal-thx")
// 							.css('display', 'block')
// 							.animate({opacity: 1, top: '50%'}, 200);

// 						$('#form-overlay').click( function(){
// 						$(".modal-thx").animate({opacity: 0, top: '45%'}, 200, function() {
// 								$(this).css('display', 'none');
// 								$('#form-overlay').fadeOut(400);
// 							});
// 						});
// 					});
// 					yaCounter26175777.reachGoal("remont");
// 				}
// 			);
// 		};
// 		return false;
// 	});



// 	function referrer() {
// 		var srch = [
// 			[/^http:\/\/(?:\w+\.)?google\.[a-z]+/, /q=([^&]+)/],
// 			[/^http:\/\/(?:\w+\.)?yahoo\.[a-z]+/, /p=([^&]+)/],
// 			[/^http:\/\/(?:\w+\.)?yandex\.[a-z]+/, /text=([^&]+)/],
// 			[/^http:\/\/(?:\w+\.)?rambler\.[a-z]+/, /query=([^&]+)/]
// 		]
		
// 		var tem;
// 		for (var key in srch) {
// 			tem = srch[key];
// 			if (document.referrer.match(tem[0])){
// 				var ref = document.referrer.match(tem[1]);
// 				return decodeURIComponent(ref.length ? ref[1] : 'Пришли по ссылке. Или через неизвестный поисковик.');
// 			}
// 		}
// 		return 'Пришли не с поисковика';
// 	}
// 	$('input[name="search"]').val(referrer());
// 	$('input[name="referrer"]').val(document.referrer ? document.referrer : 'Пришли сразу на сайт');

// 	ymaps.ready(init);

// 	function init() {
// 		var geolocation = ymaps.geolocation;
// 		$('input[name="city"]').val(geolocation.city)
// 	}

// });