(function ($) {
	$.fn.emailValidator = function (email) {
		var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return emailValidation.test(email)
		// your code here
	}

	$('#email').keyup(function(){
		let inputValue = $(this).val()
		let validateValue = $.fn.emailValidator(inputValue)
		if(validateValue){
			$('#email').addClass("success")
			$('p').text('Email Address is valid').css('color','green')
		}else{
			$('#email').addClass("error")
			$('p').text('Email Address is not valid').css('color','red')
		}
	})
})(jQuery)
