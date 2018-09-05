(function ($) {
	$.fn.emailValidator = function () {
	
		// console.log(this.val())
		var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	
		if (this.val().match(pattern) != null) {
			return true
		} else {
			return false
		} 	
	}
})(jQuery)
