(function ($) {
	$.fn.emailValidator = function (email) {
		if(!email || !/\S+@\S+\.\S+/.test(email)) {
			return false
		} else {
			return true
		}
	}
})(jQuery)
