(function ($) {
	$.fn.emailValidator = function (email) {
		if(email.length == 0) {
			return false
		}
		
		var emailReg = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		return emailReg.test(email)
	}
})(jQuery)
