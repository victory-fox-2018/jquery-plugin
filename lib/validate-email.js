(function ($) {
	$.fn.emailValidator = function ($email) {

		var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
		if( !$email || !emailfilter.test( $email ) ) {
			return false
		} else {
			return true
		}
	}
})(jQuery)
