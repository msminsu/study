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
<<<<<<< HEAD
		}
		
=======
>>>>>>> b08291aec45c1c63936caa5d5b35570987f14df8
		});

		btnMinus.on('click',function(){
			input.val(+input.val()-1> 0 ?+input.val() -1: 0);
		});
	});
}(window.jQuery));

//
