(function($){
  $.fn.inputFocus = function(method, options){

		var settings = $.extend({
			'text': 'Podaj imię',
			'colorb': 'pink',
			'colorg': 'white'

		}, options);

		var inputText =  settings.text; //'Podaj imię';

		this.val(inputText);

		$(this).css({
			"background-color": settings.colorg 
		});

		var methods = {
			setText : function(){
				$(this).focus(function(){
					if ($(this).val() == inputText){
						$(this).val("");
				
					}
				});

				$(this).blur(function(){
					if ($(this).val() == ""){
						$(this).val(inputText);
						$(this).css({"background-color": settings.colorb });			
					} else {
						$(this).css({"background-color": settings.colorg });
					}
				});
			},

			clearText : function(){
				$(this).val("");
			}
			
		};

		return this.each(function(){
			if (methods[method]) {
				return methods[method].apply(this, 
					Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + method + ' does not exist in fn.inputFocus');
			}

		});
		
	};
	$.fn.sprawdz = function(method, options){
		var settings = $.extend({
			'ilosc': 12,
			'nan': 'Wpisz liczbę.',
			'num': 5

		}, options);

		var ilosc = settings.ilosc;

		var methods = {
			pelnoletni : function() {
				$(this).keyup(function(){
					if (isNaN($(this).val())) {
						$(this).next().html(settings.nan);
					} else {
						if ($(this).val() < 18){
							$(this).next().html("Nie jesteś pełnoletni.");
					
						} else if ($(this).val() > 140){
							$(this).next().html("Trochę za dużo wiosen sobie liczysz.");
					
						} else {
							$(this).next().html("");
						}
					}
				});
			},
			
			emailcheck : function() {
				$(this).keyup(function() {
					var patt = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if (!patt.test($(this).val())){
						$(this).next().html("Wpisz poprawny email. [np. nazwa@domena.pl]");
					} else {
						$(this).next().html("");
						
					}
				});
			},

			pcheck : function() {
				$(this).keyup(function() {
					
					//$(this).next().html('Długość hasła: '+ $(this).val().length);
					if ($(this).val().length > 5) $(this).next().html('Hasło ma więcej niż ' + settings.num+ ' znaków');
					else $(this).next().html('');

					
				});
			},

			ppcheck : function() {
				$(this).keyup(function(){
					var hasError = false;
			        var passwordVal = $("#password").val();
			        var checkVal = $("#password-check").val();
			        if (passwordVal == '') {
			            $("#password").next().html('Wprowadź hasło.');
			            hasError = true;
			        } else if (checkVal == '') {
			            $("#password-check").next().html('Wpisz ponownie hasło.');
			            hasError = true;
			        } else if (passwordVal != checkVal ) {
			            $("#password-check").next().html('Niezgodne hasła.');
			            hasError = true;
			        } else {
			        	$("#password-check").next().html('');
			            hasError = true;
			        }
			        if(hasError == true) {return false;}
		    	});
			},

			charlimit : function(){
				$(this).keyup(function() {
				    
				    var inputVal = $(this).val();
				    var characterReg = /^([a-zA-Z0-9]{0,ilosc})$/;
				    
				    $('#ile').html('Długość: '+ $(this).val().length );
				    if(!characterReg.test(inputVal)) {
				        $(this).next().html("Maksimum " + ilosc + " znaków.");
				    } else {
				    	 $(this).next().html("");
				    }
				});
			},

			/*ccheck : function() {
				$('input[type=radio]').change(function(){
					if ($('#woman').next().html() == "") {
						$('#woman').next().html("Zaznacz odpowiednie pole");
					}
					else {
						$('#woman').next().html("");
					}
				});
			}*/
			
				// || !$('#woman:checked').val()) {	       
				/*	$('#man').next('span').html("Zaznacz odpowiednie pole");
				} else {
					$('#man').next('span').html("");
				}*/
			
		}

		return this.each(function(){
			if (methods[method]) {
				return methods[method].apply(this, 
					Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + method + ' does not exist in fn.sprawdz');
			}

		});
	};

})(jQuery);
