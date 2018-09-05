(function ($) {
	$.fn.emailValidator = function () {
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

		if (this.val().match(pattern) != null) {
			return true
		} else {
			return false
		} 		
	}
})(jQuery)
