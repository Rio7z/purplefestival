$(document).ready(function(){

 $(function() {
   $('#navSmall').on('click', function() {
     $(this).addClass('hide').parent().next().removeClass('hide').addClass('show').find('img').attr("src","images/close.svg");
   });

   $('#navMain').on('click', function() {
     $(this).parent().addClass('hide').removeClass('show').prev().children().removeClass('hide').parent().next().find('img').attr("src","images/logoMenu.svg");
   });

});
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#222222",
      "text": "#ffffff"
    },
    "button": {
      "background": "#ba14a9",
      "text": "#ffffff"
    }
  },
  "theme": "edgeless",
  "showLink": false
})});
});
