(function($){ //1. 즉시실행 함수 설정

	function SpinBox(obj){//2. 만들 객체 정의 

		var that = this;
		// 5. 
		this.detect = {// 처음에 찾아놓고 다음번에 찾지 않을려고,
			input: obj.find('input'),
			btnPlus: obj.find('.btn-plus'),
			btnMinus: obj.find('.btn-minus'),
			btnReset: obj.find('.btn-reset'),
			initValue: obj.find('input').val(),// this.input 사용안하는 이유- 실행이 안되고 찾아서 undefinded 
			currentValue: obj.find('input').val()
		};
		/*obj.find('input');
		obj.find('input');
		obj.find('input');*/
		//console.log(this.detect)

		this.detect.btnPlus.on('click',function(){
			//console.log("+")
			//this.plus();// 함수 안의 this는 돔 객체  해당 클릭 이벤트 객체
			that.detect.currentValue = +that.detect.currentValue +1; 
			that.plus(that.detect.currentValue);
		});

		this.detect.btnMinus.on('click',function(){
			//console.log("-")
			that.detect.currentValue = +that.detect.currentValue -1; 
			that.minus(that.detect.currentValue);
		});
		this.detect.btnReset.on('click',function(){
			//console.log("-")
			
			that.reset(that.detect.initValue);
			that.detect.currentValue = that.detect.initValue;
		});
	}

	SpinBox.prototype = {
		//4. 기능 추가 
		plus: function(value){
			this.detect.input.val(value);
		},
		minus: function(value){
			this.detect.input.val(value);
		},
		reset: function(value){
			this.detect.input.val(value);
		}

	}

	$('.spin-box').each(function(){//3. 찾을 요소 정의 
		new SpinBox($(this));
	})

}(window.jQuery));