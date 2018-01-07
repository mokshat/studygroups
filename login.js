 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500, function(){
	   $('.wrapper').addClass('form-success');
	    location.href = "findGroup.html";
	 });
	 
});
