
(function ($) {
	$.fn.emailValidator = function (email) {
		if(email.length == 0) {
			return false
		}
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( email );
	}
})(jQuery)