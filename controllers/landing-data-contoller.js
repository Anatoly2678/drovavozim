var PageApp = angular.module('PageApp', []);
PageApp.controller('WhyUs', ['$scope', function ($scope) {
	$scope.why = [
		{	"img": "image/1.png",
  		"head": "Доставка в удобное для Вас время",
   		"body":"в самые кратчайшие сроки"
  	},
  	{	"img": "image/2.png",
  		"head": "Быстрая разгрузка",
   		"body":"самосвалом"
  	},	
  	{	"img": "image/3.png",
  		"head": "Работаем круглый год",
   		"body":"без выходных и праздников"
  	},
  	{	"img": "image/4.png",
  		"head": "УСЛОВИЯ ЗАКАЗА",  
   		"body":"минимальный заказ от 0,5 м3, возможен самовывоз"
  	}];
}]);

PageApp.controller('Price', ['$scope', function ($scope) {
 $scope.pricelist = [{
        "name": "Дрова березовые колотые<br/>(35-40см)",
        "price": "1250 р/куб"
    },
    {
        "name": "Дрова березовые колотые<br/>(под размер)",
        "price": "1350 р/куб"
    },
    {
        "name": "Дрова в вязанках",
        "price": "120 р/шт"
    }];    
}]);

PageApp.controller('Work', ['$scope', function ($scope) {
 $scope.howwork = [{
        "xs": "4",
        "md": "2",
        "txt":"<img src='image/step-1.png' alt=''><p>Вы оставляете заявку на сайте<br>или звоните нам по телефону</p>"
    },
    {
        "xs": "2",
        "md": "1",
        "txt":"<div class='arrow-b wow rotateIn arrow' data-wow-delay='0.4s'></div>"
    },
    {
        "xs": "4",
        "md": "2",
        "txt":"<img src='image/step-2.png' alt=''><p>С Вами связывается наш менеджер и уточняет место и время доставки</p>"
    },

    {
        "xs": "2",
        "md": "1",
        "txt":"<div class='arrow-b wow rotateIn arrow' data-wow-delay='0.4s'></div>"
    },
    {
        "xs": "5",
        "md": "2",
        "txt":"<img src='image/why1.png' alt=''><p>Оплачиваете товар по факту прибытия</p>"
    },
    {
        "xs": "2",
        "md": "1",
        "txt":"<div class='arrow-b wow rotateIn arrow' data-wow-delay='0.4s'></div>"
    },
    {
        "xs": "5",
        "md": "2",
        "txt":"<img src='image/step-5.png' alt=''><p>Вы получаете качественные дрова и отличное настроение</p>"
    }];    
}]);

var PHONE_REGEXP = /^\+{0,1}[7|8].{0,1}[0-9]{3}.{0,1}[0-9]{3}.{0,1}[0-9]{4}$/;

PageApp.controller('validateCtrl', function($scope) {});

PageApp.directive('phone', function() {
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                if(PHONE_REGEXP.test(value)) {
                    $("#error-validation-phone").css('display','none');  
                    $("#error-phone").css('display','none');  
                } 
                else {
                  if (value =='')
                  { $("#error-phone").css('display','block');  
                    $("#error-validation-phone").css('display','none');
                    return false;
                  }
                    $("#error-phone").css('display','none');  
                    $("#error-validation-phone").css('display','block');
                }
            });              
        }            
    }        
});

PageApp.controller('validateCtrl', ['$scope', function ($scope) {
$scope.formInfo = {};
    $scope.saveData = function() {
      $scope.nameRequired = '';
      $scope.PhoneRequired = '';
      $scope.Comment = '';
 
      if (!$scope.formInfo.Name) {
        $scope.nameRequired = 'Введите Ваше име';
      }
      if (!$scope.phone) {
        $scope.PhoneRequired = 'Укажите Ваш телефон';
      }
 console.log ($scope.formInfo.Phone);
      if ($scope.phone && $scope.formInfo.Name)
        { 
          var s = $('.form-horizontal').serializeArray();
          $(".form-horizontal").ajaxSubmit({type: 'post', url: '/Ext/sendmail.php'});
          console.log(s);
          $(".popUp").fadeOut(300);
          $(".popUp input,.popUp textarea").val('');
        }

    };

// $scope.submitForm = function() {
//   if ($scope.userForm.$valid) {
//     alert('our form is amazing');
//   }
// };
}]);

//\+7.{0,1}[0-9]{3}.{0,1}[0-9]{3}.{0,1}[0-9]{4}

// var app = angular.module('PageApp', []);
// app.controller('validateCtrl', function($scope) {
//     $scope.user = 'John Doe';
//     $scope.email = 'john.doe@gmail.com';
// });
