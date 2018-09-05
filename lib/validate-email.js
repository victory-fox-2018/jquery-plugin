(function ($) {
	$.fn.emailValidator = function (email) {
		let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if (regex.test(String(email).toLowerCase())) {
			return true
		} else {
			return false
		}
	}
})(jQuery)
