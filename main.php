<?php header('Content-Type: text/html; charset= utf-8');  ?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="font-family/caviar.css">
	<link rel="stylesheet" href="css/drova-style.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="_bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="_bootstrap/css/bootstrap-theme.min.css">
	<!-- <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,cyrillic' rel='stylesheet' type='text/css'> -->
	<link href='https://fonts.googleapis.com/css?family=Play&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/jquery.form.min.js"></script>
	<script src="_bootstrap/js/bootstrap.min.js"></script>
	<script src="js/jc.js"></script>
	<script src="js/script.js"></script>
	<script src="js/post.js"></script>
	<script src="js/wow.min.js"></script>
	<script src="js/angular.js"></script>
	<script src="js/angular-sanitize.js"></script>
	<script src="controllers/landing-data-contoller.js"></script>
	<script src="http://maps.api.2gis.ru/2.0/loader.js"></script>

	
	<title>Сибирские дровишки</title>
</head>
<body ng-app="PageApp">
<div class="static-body">
	<div class="center-body"> 
		
		<div class="drova-header">
			<img src="image/kora1.jpg" alt="" class="drova-img-layer">
			<img src="image/logo.png"  alt="Сибирские дровишки" class="drova-img-logo">
			<div class="drova-header-text">Мы несем тепло в Ваш дом с 2008 года<br>8 (383) 286-66-67
				<div class="drova-zakaz">Сделать заказ</div>
			</div>
			<div class="drova-header-text2">Доставка дров по Новосибирску и области</div>
		</div>

		<div class="drova-why-us" ng-controller="WhyUs">
			<h2><span>ПОЧЕМУ</span> ВЫБИРАЮТ НАС?!</h2><h3>по рекомендации друзей, коллег и знакомых</h3>
			<div class="drova-why-layer">
				<div class="row" style="background: transparent;">
					<div class="col-xs-12 col-md-6 why wow bounceIn" data-wow-delay="0.1s" ng-repeat="SingleWhy in why">
						<img src="{{SingleWhy.img}}" alt=""><p><span>{{SingleWhy.head}}</span><br>{{SingleWhy.body}}</p>
					</div>
				</div>
			</div>		
		</div>	

		<div class="drova-tovar" ng-controller="Price">
			<h2><span>НАШ</span> ТОВАР!</h2>
			<div class="drova-why-layer">
				<div class="row" style="background: transparent;"  ng-repeat="ex in pricelist">
					<div class="drova-tovar-block container-fluid">
						<div class="col-xs-12 col-md-7 tovar"><p ng-bind-html-unsafe="ex.name"></p></div>
						<div class="col-xs-12 col-md-3 tovar price"><p ng-bind-html-unsafe="ex.price"></p></div>
						<div class="tovar col-xs-12 col-md-2"><div class="drova-zakaz">Заказать</div></div>
					</div>
				</div>
			</div>
		</div>	

		<div class="how-we-work" ng-controller="Work">
			<h2><span>КАК</span> МЫ РАБОТАЕМ?</h2>
			<div class="center">
				<div ng-repeat="singlework in howwork">
					<div class="col-xs-{{singlework.xs}} col-md-{{singlework.md}} col-sm-12 debug parent">
						<div class="child">
							<div class="step wow zoomIn" data-wow-delay="0.2s" ng-bind-html-unsafe="singlework.txt"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="map" id="map"></div>

		<div class="footer">
			<div class="center align-center row">
				<span class="footer-txt col-xs-4 col-md-4">Сибирские дровишки</span>
				<span class="footer-txt col-xs-4 col-md-4">8 (383) 286-66-67</span>
				<span class="footer-txt col-xs-4 col-md-4 action">Сделать заказ</span>
			</div>
		</div>

	</div>
</div> 

<div class="popUp"  ng-controller="validateCtrl">
<img class="close-img" src="image/close.png" height="128" width="128" alt="">
	<form class="form-horizontal" role="form" name="form">
  	<div class="form-group">
    	<label for="inputName3" class="col-sm-2 control-label">Имя</label>
			<span ng-show="nameRequired" class="col-sm-9 error-label">{{nameRequired}}</span>
   		<div class="col-sm-12"><input class="form-control" name="inputName" id="inputName3" placeholder="Ваше Имя" ng-model="formInfo.Name"></div>
  	</div>
  	<div class="form-group">
    	<label for="inputEmail3" class="col-sm-2 control-label">Телефон</label>
			<span ng-show="PhoneRequired" class="col-sm-9 error-label"  id="error-phone">{{PhoneRequired}}</span>
           	<span ng-show="form.phone.$error.phoneField" class="col-sm-9 error-label" id="error-validation-phone">Укажите в формате +7 ххх ххх хххх</span>
           	<span ng-show="form.phone.$error.required">This field is required!</span>
    	<div class="col-sm-12">
    		<!-- <input type="tel" class="form-control" name="inputPhone" id="inputEmail3" placeholder="+7 ххх ххх хххх" data-phone ng-model="formInfo.Phone"  ng-pattern="/^\+7.{0,1}[0-9]{3}.{0,1}[0-9]{3}.{0,1}[0-9]{4}$/"> -->
  			<input type="tel" class="form-control" name="phone" id="inputEmail3" placeholder="+7 ххх ххх хххх" data-phone ng-model="phone">
    	</div>
  	</div>
  	<div class="form-group">
    	<label for="inputPassword3" class="col-sm-2 control-label">Описание</label>
     	<div class="col-sm-12">
     		<textarea name="inputComment" id="comment" cols="12" rows="5" class="form-control" ng-model="formInfo.Comment" placeholder="Дополнительная информация"></textarea>
    	</div>
  	</div>
  	<div class="form-group">
    	<div class="col-sm-offset-3 col-sm-6"><button type="submit" ng-click="saveData()" class="btn btn-success">Заказать</button></div>
  	</div>
	</form>
</div>

</body>
<!-- Yandex.Metrika counter -->
<script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter34609970 = new Ya.Metrika({ id:34609970, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="https://mc.yandex.ru/watch/34609970" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</html>