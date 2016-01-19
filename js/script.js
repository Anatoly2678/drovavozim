$(document).ready(function() {

// карта 2ГИС
var $balun='<div class="balun"><p>Сибирские дровишки<br />ул. 2 Экскаваторная, 1 к.3<br /><br />+7 (383) 286-66-67</p></div>';
DG.then(function() {
	var map, myPopUp;
  map = DG.map('map', {
  	center: [55.03424493245215, 82.78252687683107], zoom: 15
  });
  DG.popup({maxWidth: 350, sprawling: true}).setLatLng([55.033899,82.773499]).setContent($balun).openOn(map); });


$("body").on("click", ".popUp .close-img", function() {
$(".popUp").fadeOut(300);
})

$("body").on("click", ".drova-zakaz,.footer span.action", function() {
$(".popUp").fadeIn(500);
})


	// анимация
	new WOW().init();

	// логотипы
	var lenta = function() {
		$(".lenta").animate({"background-position": "+=100000"}, 3000000, "linear", lenta);
	};
	lenta();

	// слайдеры
	$(".slider").on("click", ".arrow-r", function() {
		var $slider = $(this).closest(".slider"),
			$img1 = $slider.find("img").first(),
			$img2 = $slider.find("img").last(),
			w = $img1.width();
		$img1.animate({marginLeft: "-="+w}, 500, function() {
			$img2.after($img1);
			$img1.css({marginLeft: "0"});
		});
	});
	$(".slider").on("click", ".arrow-l", function() {
		var $slider = $(this).closest(".slider"),
			$img1 = $slider.find("img").first(),
			$img2 = $slider.find("img").last(),
			w = $img1.width();
		$img1.before($img2);
		$img2.css({marginLeft: -w+"px"});
		$img2.animate({marginLeft: "0"}, 500, function() {
			
		});
	});


	// смена фокуса
	$(".field").filter("[name=phone1]").on("input", function() {
		if ($(this).val().length > 2) {
			$(this).next().focus();
		};
	});

	// выпадающие списки
	$(".dropdown").on("click", function(event) {
		// $(this).toggleClass("dropdown-active");
		$(this).find("ul").slideToggle(100);
		return false;
	});
	$(".dropdown a").on("click", function(event) {
		var selectItem = $(this).html();
		$(this).closest(".dropdown").find("span").html(selectItem);
	});
	$(document).click(function() {
		// $(".dropdown").removeClass("dropdown-active");
		$(".dropdown").find("ul").slideUp(100);
	});

	// калькулятор
	$(".calc-btn").on("click", function() {
		$(".step-1").fadeOut(400, function() {
			$(".step-2").fadeIn(400);
		})
	});
	$("#back").on("click", function() {
		$(".step-2").fadeOut(400, function() {
			$(".step-1").fadeIn(400);
		})
	});

	// галлерея
	$(".letter").on("click", ".doc", function() {
		$('#overlay').fadeIn(400, function() {
			$(".gall")
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);
		});
		var selectImgIndex = parseInt($(this).next().attr("alt"));

		$("#gall-img").attr("src", "img/big/" + selectImgIndex + ".jpg");

		$(".arrow-gall-r").on("click", function() {
			selectImgIndex++;
			if (selectImgIndex > 8) {
				selectImgIndex = 1;
			};
			$("#gall-img").attr("src", "img/big/" + selectImgIndex + ".jpg");
		});
		$(".arrow-gall-l").on("click", function() {
			selectImgIndex--;
			if (selectImgIndex < 1) {
				selectImgIndex = 8;
			};
			$("#gall-img").attr("src", "img/big/" + selectImgIndex + ".jpg");
		});
	});
	$('.close, #overlay').click(function(){
		$(".gall").animate({opacity: 0, top: '45%'}, 200, function() {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(400);
		});
	});

	// модальные окна
	$(".open-modal-order").click(function() {
		$('#form-overlay').off("click");
		$('#form-overlay').fadeIn(400, function() {
			$(".modal-order")
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);

			$('#form-overlay').click( function(){
				$(".modal-order").animate({opacity: 0, top: '45%'}, 200, function() {
					$(this).css('display', 'none');
					$('#form-overlay').fadeOut(400);
				});
			});
		});	
	});
	$(".open-modal-questions").click(function() {
		//event.preventDefault();
		$('#form-overlay').off("click");
		$('#form-overlay').fadeIn(400, function() {
			$(".modal-questions")
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);

			$('#form-overlay').click( function(){
				$(".modal-questions").animate({opacity: 0, top: '45%'}, 200, function() {
					$(this).css('display', 'none');
					$('#form-overlay').fadeOut(400);
				});
			});
		});	
	});
	$(".open-card").click(function() {
		//event.preventDefault();
		$('#card-overlay').off("click");
		var openCard = $(this).attr("title");
		$('#card-overlay').fadeIn(400, function() {
			$(".modal-card-" + openCard)
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);

			$('#card-overlay').click( function(){
				$(".modal-card-" + openCard).animate({opacity: 0, top: '45%'}, 200, function() {
					$(this).css('display', 'none');
					$('#card-overlay').fadeOut(400);
				});
			});
		});	
	});

	// timer 
	var myDate = new Date();
	function returnEndDate(d,h,m){
		myDate.setDate(myDate.getDate()+d);
		myDate.setHours(myDate.getHours()+h);
		myDate.setMinutes(myDate.getMinutes()+m);
		return myDate;
	}
	
	if($.cookie("timer")){
		var dateEnd = $.cookie("timer");
	}else{
		var dateEnd = returnEndDate(0,3,27,38);
		$.cookie("timer", dateEnd, {expires: 1});
	}

	function get_timer() {
		var date_new = dateEnd;
		////////////////////////////////////
		////////////////////////////////////
		
		var date_t = new Date(date_new);
		var date = new Date();
		var timer = date_t - date;
		
		if(date_t > date) {
			
			var day = parseInt(timer/(60*60*1000*24));
			if(day < 10) {
				day = '0' + day;
			}
			day = day.toString();
				
			var hour = parseInt(timer/(60*60*1000))%24;
			if(hour < 10) {
				hour = '0' + hour;
			}
	
			hour = hour.toString();
				
			var min = parseInt(timer/(1000*60))%60;
			if(min < 10) {
				min = '0' + min;
			}
			min = min.toString();
				
			var sec = parseInt(timer/1000)%60;
			if(sec < 10) {
				sec = '0' + sec;
			}
			sec = sec.toString();
			
			if(day[1] == 9 && 
				hour[0] == 2 && 
				hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($(".day0"),day[0]);
			}
			else {
				$(".day0").html(day[0]);
			}
			if(hour[0] == 2 && 
				hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($(".day1"),day[1]);
			}
			else {
				$(".day1").html(day[1]);
			}
			if(hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($(".hour0"),hour[0]);
			}
			else {
				$(".hour0").html(hour[0]);
			}
			if(min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($(".hour1"),hour[1]);
			}
			else {
				$(".hour1").html(hour[1]);
			}
				
			if(min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($(".min0"),min[0]);
			}
			else {
				$(".min0").html(min[0]);
			}
			if(sec[0] == 5 && sec[1] == 9) {
				animation($(".min1"),min[1]);
			}
			else {
				$(".min1").html(min[1]);
			}
				
			if(sec[1] == 9) {
				animation($(".sec0"),sec[0]);
			}
			else {
				$(".sec0").html(sec[0]);
			}
			animation($(".sec1"),sec[1]);	
			setTimeout(get_timer,1000);
		}
		else {
	
		}
		
	}
	function animation(vibor,param) {
		vibor.html(param);
	}
	get_timer();
});