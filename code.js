$('img').on('click', function(){
  let img1 = $(this).attr('src');
  let img2 = $(this).attr('data-alt-src');
  $(this).attr('src', img2);
  $(this).attr('data-alt-src', img1);
  decir('jaia'); 
});

$("img").hover(function() {
  $(this).css('transform', 'scale(1.1)');
}, function() {
  $(this).css('transform', 'scale(1)');
});

function decir(mensaje){
  var msg = new SpeechSynthesisUtterance();
  msg.text = mensaje;
  window.speechSynthesis.speak(msg)
}