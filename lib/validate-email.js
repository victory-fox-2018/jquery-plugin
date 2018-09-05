(function ($) {
	$.fn.emailValidator = function (result) {
		this.keyup()
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return emailRegex.test(result)
	}
})(jQuery)

$( '#Email' ).keyup(function () {
	let value = $(this).val()
	let result = $.fn.emailValidator(value)
	console.log(result)

	if (!result) {
		$(this).addClass("error").text("email format is invalid").css("color", "red")	
	} else {
		$(this).addClass("success").text("email format is correct").css("color", "green")
	}
})
