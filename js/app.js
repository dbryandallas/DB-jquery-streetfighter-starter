$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();    
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-still').hide();
  $('.ryu-throwing').show();

  //$('.hadouken').show();
  $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                //$(this).hide();
                $(this).css('left', '520px');
                $(this).stop();
                $(this).hide();
                //$(this).css('left', '-212px');
           });
  // animate hadouken to the right of the screen
  })
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });   

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
        $(".ryu-still").hide();
        $(".ryu-ready").hide();
        $(".ryu-throwing").hide();
        $(".ryu-cool").show();
    };

}).keyup(function(e) {
    if(e.keyCode == 88) {
      $(".ryu-ready").hide();
      $(".ryu-throwing").hide();
      $(".ryu-cool").hide();
      $(".ryu-still").show();
    };
  });
});
