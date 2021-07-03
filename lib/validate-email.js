(function ($) {
	$.fn.emailValidator = function () {
		var email = /[a-zA-Z0-9]*@[a-zA-Z0-9]+\.com/
		return	email.test(this.val());
	}
})(jQuery)
