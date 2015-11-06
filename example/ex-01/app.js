/*
+function a(){

}

(function a(){
	
});

즉시실행함수 
(function(){}());
+function(){}();


모듈화 , 캡슐화 
스코프  생명주기
변수의 유효범위 

*/

(function($){
	$('.spin-box').each(function(){
		var obj = $(this),
			btnMinus = obj.find('.btn-minus'),
			btnPlus = obj.find('.btn-plus'),
			input = obj.find('input');

		btnPlus.on('click',function(){
			input.val(+input.val() + 1);
		}
		});

		btnMinus.on('click',function(){
			input.val(+input.val()-1> 0 ?+input.val() -1: 0);
		});
	});
}(window.jQuery));