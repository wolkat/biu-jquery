$(document).ready(function(){
	
	$('#fullname').inputFocus('setText', 
        {'text': 'Podaj imię', 'colorb': 'red', 'colorg': 'green'});
	$('#age').sprawdz('pelnoletni', {'nan': 'to nie liczba'}).inputFocus('setText', {'text': 'Podaj swój wiek'});
	$('#email').sprawdz('emailcheck');

  //$('#man').sprawdz('ccheck');
  //$('#woman').sprawdz('ccheck');
  $('#password').sprawdz('pcheck');
  $('#password-check').sprawdz('ppcheck');
  $('#about').sprawdz('charlimit');
  //$('#send').click(function(){$(this).sprawdz('ccheck');}); 
});
