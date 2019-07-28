const G_TRACKING_ID = 'UA-144705507-1';
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', G_TRACKING_ID);

  }); // end of document ready
})(jQuery); // end of jQuery name space
