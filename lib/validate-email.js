(function ($) {
	$.fn.emailValidator = function (input) {
		var email = /[a-zA-Z0-9]*@[a-zA-Z0-9]+\.com/
		return	email.test(input);
	}
})(jQuery)
